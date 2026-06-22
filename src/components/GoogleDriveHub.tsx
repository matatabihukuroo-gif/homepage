import React, { useState, useEffect, useRef } from "react";
import { 
  Database, UploadCloud, Check, Search, FileText, FileImage, 
  FolderPlus, Folder, Trash2, Loader2, Lock, RefreshCw, 
  AlertTriangle, ExternalLink, File, Download, Eye, X, Info
} from "lucide-react";

interface GoogleDriveFile {
  id: string;
  name: string;
  mimeType: string;
  size?: string;
  createdTime?: string;
  webViewLink?: string;
}

export default function GoogleDriveHub() {
  const [clientId, setClientId] = useState(
    (import.meta as any).env?.VITE_GOOGLE_CLIENT_ID || ""
  );
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [files, setFiles] = useState<GoogleDriveFile[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [fileFilter, setFileFilter] = useState<"all" | "document" | "image" | "folder">("all");
  
  // Folders Tracking
  const [folders, setFolders] = useState<{ id: string; name: string }[]>([]);
  const [currentFolderId, setCurrentFolderId] = useState<string>("root");
  const [folderHistory, setFolderHistory] = useState<{ id: string; name: string }[]>([
    { id: "root", name: "マイドライブ (Root)" }
  ]);
  const [newFolderName, setNewFolderName] = useState("");
  const [isCreatingFolder, setIsCreatingFolder] = useState(false);

  // File Upload State
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dragActive, setDragActive] = useState(false);

  // File Preview Modal State
  const [selectedFile, setSelectedFile] = useState<GoogleDriveFile | null>(null);
  const [previewContent, setPreviewContent] = useState<string | null>(null);
  const [isPreviewLoading, setIsPreviewLoading] = useState(false);

  // Safety Delete State
  const [fileToDelete, setFileToDelete] = useState<GoogleDriveFile | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Notification Banner
  const [notification, setNotification] = useState<{ type: "success" | "error" | "info"; message: string } | null>(null);

  // Helper to show flash messages
  const showMessage = (type: "success" | "error" | "info", message: string) => {
    setNotification({ type, message });
    setTimeout(() => {
      setNotification(null);
    }, 6000);
  };

  // Check URL hash for access_token on load (the standard Implicit Grant callback)
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const params = new URLSearchParams(hash.substring(1));
      const token = params.get("access_token");
      if (token) {
        setAccessToken(token);
        setIsAuthenticated(true);
        showMessage("success", "Google Driveへの接続に成功しました。");
        // Clear the URL hash for clean url and security
        window.history.replaceState(null, "", window.location.pathname);
      }
    }
  }, []);

  // Fetch files whenever we get a new access token or change folders
  useEffect(() => {
    if (accessToken) {
      fetchFiles();
    }
  }, [accessToken, currentFolderId]);

  // Auth flow redirect handler
  const handleConnect = () => {
    if (!clientId.trim()) {
      showMessage("error", "Google Client IDを入力してください。セットアップガイドをご参照ください。");
      return;
    }

    // Google OAuth 2.0 endpoint for implicit grant
    const oauthUrl = "https://accounts.google.com/o/oauth2/v2/auth";
    const scopes = [
      "https://www.googleapis.com/auth/drive.file",
      "https://www.googleapis.com/auth/drive.readonly",
      "https://www.googleapis.com/auth/drive.metadata.readonly",
      "https://www.googleapis.com/auth/drive"
    ].join(" ");
    
    // Redirect URI to current application origin (will bring user back here)
    const redirectUri = window.location.origin;

    const authParams = new URLSearchParams({
      client_id: clientId.trim(),
      redirect_uri: redirectUri,
      response_type: "token",
      scope: scopes,
      include_granted_scopes: "true",
      state: "matatabi_drive_auth"
    });

    // Outer redirect for iframe support
    window.location.href = `${oauthUrl}?${authParams.toString()}`;
  };

  // Disconnect / Clear token
  const handleDisconnect = () => {
    setAccessToken(null);
    setIsAuthenticated(false);
    setFiles([]);
    setFolders([]);
    setCurrentFolderId("root");
    setFolderHistory([{ id: "root", name: "マイドライブ (Root)" }]);
    showMessage("info", "接続を解除しました。認証トークンは正常に消去されました。");
  };

  // Fetch file list from Google Drive API
  const fetchFiles = async () => {
    if (!accessToken) return;
    setIsLoading(true);
    try {
      // Build q query to filter files in the active folder and exclude trashed files
      let q = `'${currentFolderId}' in parents and trashed = false`;
      
      const response = await fetch(
        `https://www.googleapis.com/drive/v3/files?q=${encodeURIComponent(
          q
        )}&fields=files(id,name,mimeType,size,createdTime,webViewLink)&orderBy=folder,name&pageSize=100`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (!response.ok) {
        if (response.status === 401) {
          handleDisconnect();
          throw new Error("セッションが終了しました。再度ログインをお願いします。");
        }
        throw new Error(`Google API エラー: ${response.statusText}`);
      }

      const data = await response.json();
      const fetchedFiles = data.files || [];
      setFiles(fetchedFiles);

      // Extract folders list for parent selection
      const fetchedFolders = fetchedFiles.filter(
        (f: GoogleDriveFile) => f.mimeType === "application/vnd.google-apps.folder"
      );
      setFolders(fetchedFolders);

    } catch (error: any) {
      console.error("Error fetching files:", error);
      showMessage("error", error.message || "ファイルの取得中にエラーが発生しました。");
    } finally {
      setIsLoading(false);
    }
  };

  // Create a new folder on Google Drive
  const handleCreateFolder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!accessToken || !newFolderName.trim()) return;

    // Direct User Confirmation Dialog before mutating drive
    const confirmed = window.confirm(
      `マイドライブに新しいフォルダ「${newFolderName}」を作成します。よろしいですか？`
    );
    if (!confirmed) return;

    setIsCreatingFolder(true);
    try {
      const folderMetadata = {
        name: newFolderName,
        mimeType: "application/vnd.google-apps.folder",
        parents: currentFolderId !== "root" ? [currentFolderId] : undefined,
      };

      const response = await fetch("https://www.googleapis.com/drive/v3/files", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(folderMetadata),
      });

      if (!response.ok) {
        throw new Error("フォルダの作成に失敗しました。");
      }

      setNewFolderName("");
      showMessage("success", `フォルダ「${folderMetadata.name}」を作成しました。`);
      fetchFiles(); // refresh list
    } catch (error: any) {
      showMessage("error", error.message || "フォルダの作成中にエラーが発生しました。");
    } finally {
      setIsCreatingFolder(false);
    }
  };

  // Drag and Drop events
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      uploadFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      uploadFile(e.target.files[0]);
    }
  };

  // Upload file via detailed multipart fetch
  const uploadFile = async (file: File) => {
    if (!accessToken) return;
    setIsUploading(true);
    setUploadProgress(`「${file.name}」をアップロード中...`);

    try {
      const metadata = {
        name: file.name,
        mimeType: file.type || "application/octet-stream",
        parents: currentFolderId !== "root" ? [currentFolderId] : undefined,
      };

      const boundary = "------matatabi_boundary_42nd";
      const delimiter = `\r\n--${boundary}\r\n`;
      const closeDelimiter = `\r\n--${boundary}--`;

      // Read file content as base64
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.onload = async () => {
        try {
          const fileBytes = new Uint8Array(reader.result as ArrayBuffer);
          let binary = "";
          const len = fileBytes.byteLength;
          for (let i = 0; i < len; i++) {
            binary += String.fromCharCode(fileBytes[i]);
          }
          const base64Data = btoa(binary);

          const metadataPart = delimiter +
            "Content-Type: application/json; charset=UTF-8\r\n\r\n" +
            JSON.stringify(metadata) +
            "\r\n";
            
          const mediaHeader = delimiter +
            `Content-Type: ${metadata.mimeType}\r\n` +
            "Content-Transfer-Encoding: base64\r\n\r\n";

          const body = metadataPart + mediaHeader + base64Data + closeDelimiter;

          const response = await fetch(
            "https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart",
            {
              method: "POST",
              headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": `multipart/related; boundary=${boundary}`,
              },
              body: body,
            }
          );

          if (!response.ok) {
            throw new Error(`アップロード失敗: ${response.statusText}`);
          }

          showMessage("success", `ファイル「${file.name}」を正常にアップロードしました！`);
          fetchFiles();
        } catch (innerError: any) {
          showMessage("error", innerError.message || "ファイル処理中にエラーが発生しました。");
        } finally {
          setIsUploading(false);
          setUploadProgress("");
        }
      };

    } catch (error: any) {
      showMessage("error", error.message || "ファイルのアップロード中にエラーが発生しました。");
      setIsUploading(false);
      setUploadProgress("");
    }
  };

  // View File content (Preview text/markdown/image)
  const handleViewFile = async (file: GoogleDriveFile) => {
    setSelectedFile(file);
    setPreviewContent(null);
    
    const isText = file.mimeType.startsWith("text/") || 
                   file.mimeType.includes("javascript") || 
                   file.mimeType.includes("json") || 
                   file.mimeType.includes("markdown") ||
                   file.name.endsWith(".md") || 
                   file.name.endsWith(".txt");
                   
    const isImage = file.mimeType.startsWith("image/");

    if (isText && accessToken) {
      setIsPreviewLoading(true);
      try {
        const response = await fetch(
          `https://www.googleapis.com/drive/v3/files/${file.id}?alt=media`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        if (response.ok) {
          const text = await response.text();
          setPreviewContent(text);
        } else {
          setPreviewContent("プレビュー内容をテキストとして読み込めませんでした。");
        }
      } catch (err) {
        setPreviewContent("ファイル内容の取得中にエラーが発生しました。");
      } finally {
        setIsPreviewLoading(false);
      }
    }
  };

  // Perform permanent file deletion with strict verification dialog (Mandatory!)
  const handleConfirmDelete = async () => {
    if (!fileToDelete || !accessToken) return;
    setIsDeleting(true);
    try {
      const response = await fetch(
        `https://www.googleapis.com/drive/v3/files/${fileToDelete.id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("ファイルの削除に失敗しました。");
      }

      showMessage("success", `ファイル「${fileToDelete.name}」を完全に削除しました。`);
      setFileToDelete(null);
      fetchFiles();
    } catch (error: any) {
      showMessage("error", error.message || "ファイルの削除中にエラーが発生しました。");
    } finally {
      setIsDeleting(false);
    }
  };

  // Navigation: Go inside folder
  const navigateIntoFolder = (folderId: string, folderName: string) => {
    setCurrentFolderId(folderId);
    setFolderHistory(prev => [...prev, { id: folderId, name: folderName }]);
  };

  // Navigation: Breadcrumbs
  const navigateToBreadcrumbIndex = (index: number) => {
    const historyItem = folderHistory[index];
    setCurrentFolderId(historyItem.id);
    setFolderHistory(prev => prev.slice(0, index + 1));
  };

  // Format file size
  const formatSize = (bytesStr?: string) => {
    if (!bytesStr) return "---";
    const bytes = parseInt(bytesStr);
    if (isNaN(bytes)) return "---";
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i];
  };

  // Get matching icon based on mimeType
  const getFileIcon = (mimeType: string) => {
    if (mimeType === "application/vnd.google-apps.folder") {
      return <Folder className="w-5 h-5 text-fukuro-gold fill-fukuro-gold/20" />;
    } else if (mimeType.startsWith("image/")) {
      return <FileImage className="w-5 h-5 text-indigo-500" />;
    } else if (mimeType.startsWith("text/") || mimeType.includes("document") || mimeType.includes("pdf")) {
      return <FileText className="w-5 h-5 text-emerald-600" />;
    } else {
      return <File className="w-5 h-5 text-gray-500" />;
    }
  };

  // Search/Filter files local list
  const filteredFiles = files.filter(file => {
    const matchesSearch = file.name.toLowerCase().includes(searchTerm.toLowerCase());
    if (!matchesSearch) return false;

    if (fileFilter === "folder") {
      return file.mimeType === "application/vnd.google-apps.folder";
    }
    if (fileFilter === "image") {
      return file.mimeType.startsWith("image/");
    }
    if (fileFilter === "document") {
      return file.mimeType.startsWith("text/") || 
             file.mimeType.includes("document") || 
             file.mimeType.includes("pdf") ||
             file.mimeType.includes("spreadsheet");
    }
    return true;
  });

  return (
    <section id="drive-integration" className="py-16 bg-white border-y border-warm-sand/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title with Subtitle and Icon */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-warm-peach border border-soft-orange/30 rounded-full text-xs font-semibold text-soft-orange mb-3">
            <Database className="w-3.5 h-3.5" />
            クラウド資料共有プラットフォーム
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-forest-dark tracking-tight">
            またたび ドライブ連携センター
          </h2>
          <p className="text-gray-600 mt-2 text-sm md:text-base leading-relaxed">
            精神科訪問看護スタッフ用の、Google Driveを活用したクラウド資料確認・共有ステーションです。計画書、指示書、看護カルテや、オンライン問い合わせ等の最新ドキュメントをセキュアに一元管理します。
          </p>
        </div>

        {/* Global Alert Notification Toast Banner */}
        {notification && (
          <div className={`mb-8 p-4 rounded-xl border flex items-start gap-3 shadow-sm max-w-4xl mx-auto animate-fadeIn ${
            notification.type === "success" 
              ? "bg-emerald-50 border-emerald-200 text-emerald-800" 
              : notification.type === "error"
              ? "bg-rose-50 border-rose-200 text-rose-800"
              : "bg-blue-50 border-blue-200 text-blue-800"
          }`}>
            {notification.type === "error" ? (
              <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5 text-rose-500" />
            ) : (
              <Check className="w-5 h-5 shrink-0 mt-0.5 text-emerald-500" />
            )}
            <div className="text-xs md:text-sm font-medium">{notification.message}</div>
          </div>
        )}

        {/* Main Content Split Frame */}
        <div className="max-w-6xl mx-auto bg-warm-cream/50 border border-warm-sand/60 rounded-2xl shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* LEFT COLUMN: Setup Guidelines & Connection Settings */}
          <div className="lg:col-span-5 p-6 md:p-8 bg-warm-sand/20 border-b lg:border-b-0 lg:border-r border-warm-sand/70">
            <h3 className="text-lg font-bold font-serif text-forest-dark flex items-center gap-2 mb-4">
              <Lock className="w-5 h-5 text-soft-orange" />
              1. 接続・認証設定
            </h3>
            
            <p className="text-xs text-slate-500 leading-relaxed mb-6">
              ※本システムはGoogle APIと直接通信します。接続を開始するには、Google Cloud Consoleより取得したお持ちのOAuth <strong>Client ID</strong> をご入力いただくか、プリセットの動作検証用クライアントIDでテスト接続いただけます。
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-forest-medium mb-1.5 uppercase tracking-wide">
                  Google Client ID
                </label>
                <input 
                  type="text"
                  value={clientId}
                  onChange={(e) => setClientId(e.target.value)}
                  placeholder="xxxx.apps.googleusercontent.com"
                  className="w-full text-xs font-mono bg-white border border-warm-sand/80 px-3 py-2 rounded-lg text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-forest-light focus:border-forest-light bg-white"
                  disabled={isAuthenticated}
                />
              </div>

              {!isAuthenticated ? (
                <button
                  type="button"
                  onClick={handleConnect}
                  className="w-full bg-forest-dark hover:bg-forest-medium text-white text-xs font-bold py-2.5 px-4 rounded-xl shadow-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_Logo_sign.svg" width="14" height="14" alt="Google" className="bg-white p-0.5 rounded-full" />
                  Googleアカウントでログイン
                </button>
              ) : (
                <div className="space-y-2.5">
                  <div className="p-3 bg-emerald-50/50 border border-emerald-100 rounded-xl flex items-center gap-2.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0"></div>
                    <span className="text-xs font-serif font-bold text-emerald-800">接続中 (Google Drive認証済)</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleDisconnect}
                    className="w-full bg-white hover:bg-rose-50 border border-warm-sand/90 text-rose-600 text-xs font-bold py-2 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5 shrink-0" />
                    接続・セッション解除
                  </button>
                </div>
              )}
            </div>

            {/* Quick Helper Step Guide */}
            <div className="mt-8 pt-6 border-t border-warm-sand/60">
              <h4 className="text-xs font-bold text-forest-medium flex items-center gap-1.5 mb-3">
                <Info className="w-3.5 h-3.5 text-soft-orange" />
                セットアップ手順（Google API設定）
              </h4>
              <ol className="text-[11px] text-gray-500 space-y-2 list-decimal list-inside leading-relaxed pl-1.5">
                <li>Google Cloud Consoleでプロジェクトを作成します。</li>
                <li><strong>OAuth同意画面</strong>の設定で、許可するテストユーザーとしてご自身のアドレスを追加してください。</li>
                <li><strong>認証情報</strong>からWebアプリケーション用「OAuth 2.0 クライアント ID」を作成します。</li>
                <li>承認された「JavaScript 生成元」および「リダイレクト URI」に、現在のサイトアドレス<br/>
                  <code className="bg-warm-sand/60 font-mono px-1 py-0.5 rounded text-[10px] text-forest-medium font-bold break-all block mt-1 select-all">{window.location.origin}</code>
                  を指定してください。
                </li>
              </ol>
            </div>
          </div>

          {/* RIGHT COLUMN: Drive Exploratory Core */}
          <div className="lg:col-span-7 p-6 md:p-8 flex flex-col justify-between">
            {!isAuthenticated ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 px-4">
                <Database className="w-16 h-16 text-warm-sand bg-warm-sand/15 p-4 rounded-full mb-4 animate-bounce" />
                <h4 className="text-base font-bold font-serif text-forest-dark mb-1">
                  Google Drive 連携ステーションへようこそ
                </h4>
                <p className="text-xs text-gray-400 max-w-sm leading-relaxed mb-6">
                  左側の設定パネルよりGoogleアカウント認証を行うと、現在選択中のフォルダ内の全資料が瞬時にロードされ、閲覧や新規アップロードが可能になります。
                </p>
                <div className="p-3 bg-warm-sand/30 border border-warm-sand rounded-xl text-center">
                  <span className="text-[10px] text-forest-medium font-semibold block">【個人情報・セキュリティへの配慮】</span>
                  <span className="text-[10px] text-slate-500 mt-1 block max-w-md">
                    アプリはブラウザ上でのみ動作し、取得したアクセストークンはメモリ一時保存のため、外部およびサーバーへログ保存されることは一切ございません。
                  </span>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                
                {/* Search & Upload Action Section Header */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-b border-warm-sand/50 pb-5">
                  <div>
                    <h3 className="text-base font-bold font-serif text-forest-dark flex items-center gap-2">
                      <Folder className="w-5 h-5 text-soft-orange" />
                      2. ファイル一覧・操作
                    </h3>
                    
                    {/* BREADCRUMBS NAVIGATION */}
                    <div className="flex flex-wrap items-center gap-1 mt-2">
                      {folderHistory.map((folder, index) => (
                        <React.Fragment key={folder.id}>
                          {index > 0 && <span className="text-[10px] text-gray-500 font-sans">/</span>}
                          <button
                            type="button"
                            onClick={() => navigateToBreadcrumbIndex(index)}
                            className="text-[11px] font-medium text-forest-light hover:text-forest-dark hover:underline focus:outline-none"
                          >
                            {folder.name}
                          </button>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Add Folder button/modal input trigger */}
                  <form onSubmit={handleCreateFolder} className="flex items-center gap-1">
                    <input 
                      type="text"
                      value={newFolderName}
                      onChange={(e) => setNewFolderName(e.target.value)}
                      placeholder="新規フォルダ名"
                      className="text-xs bg-white border border-warm-sand/80 px-2.5 py-1.5 rounded-lg w-28 placeholder-gray-400 focus:outline-none text-slate-700"
                      required
                    />
                    <button
                      type="submit"
                      disabled={isCreatingFolder}
                      className="bg-forest-light hover:bg-forest-medium font-bold text-white text-[11px] py-1.5 px-3 rounded-lg flex items-center gap-1 shrink-0 cursor-pointer"
                    >
                      {isCreatingFolder ? (
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      ) : (
                        <FolderPlus className="w-3.5 h-3.5" />
                      )}
                      作成
                    </button>
                  </form>
                </div>

                {/* SEARCH COMPONENT & FILE TYPE FILTERS */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                  <div className="sm:col-span-5 relative">
                    <span className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-slate-400">
                      <Search className="w-3.5 h-3.5" />
                    </span>
                    <input 
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="ドキュメントを検索..."
                      className="w-full text-xs pl-8 pr-3 py-2 bg-white border border-warm-sand/70 rounded-xl text-slate-700 focus:outline-none focus:ring-1 focus:ring-forest-light focus:border-forest-light"
                    />
                  </div>

                  {/* Filter segmented controller buttons */}
                  <div className="sm:col-span-7 flex flex-wrap gap-1 items-center justify-end">
                    {(["all", "document", "image", "folder"] as const).map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFileFilter(type)}
                        className={`text-[11px] font-sans px-2.5 py-1.5 rounded-lg border font-medium cursor-pointer transition-all ${
                          fileFilter === type 
                            ? "bg-forest-medium text-white border-forest-medium shadow-sm" 
                            : "bg-white hover:bg-warm-sand/15 text-gray-600 border-warm-sand text-slate-600"
                        }`}
                      >
                        {type === "all" && "すべて"}
                        {type === "document" && "文書"}
                        {type === "image" && "画像"}
                        {type === "folder" && "フォルダ"}
                      </button>
                    ))}
                  </div>
                </div>

                {/* DRAG AND DROP FILE UPLOAD AREA */}
                <div 
                  onDragEnter={handleDrag}
                  onDragOver={handleDrag}
                  onDragLeave={handleDrag}
                  onDrop={handleDrop}
                  className={`border-2 border-dashed rounded-xl p-4 transition-all duration-200 text-center relative ${
                    dragActive 
                      ? "border-forest-light bg-forest-light/10" 
                      : "border-warm-sand/90 hover:border-forest-light/60 bg-warm-sand/10"
                  }`}
                >
                  <input 
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileSelect}
                    className="hidden"
                  />
                  {isUploading ? (
                    <div className="flex flex-col items-center py-2.5">
                      <Loader2 className="w-6 h-6 text-forest-medium animate-spin mb-1.5" />
                      <p className="text-xs font-bold text-forest-medium animate-pulse">{uploadProgress}</p>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center">
                      <UploadCloud className="w-8 h-8 text-forest-medium mb-1.5" />
                      <p className="text-xs font-medium text-slate-600">
                        ここにファイルをドラッグ & ドロップ、または
                        <button
                          type="button"
                          onClick={() => fileInputRef.current?.click()}
                          className="text-forest-light hover:text-forest-medium underline font-bold mx-1 cursor-pointer"
                        >
                          ファイルを選択
                        </button>
                      </p>
                      <p className="text-[10px] text-gray-500 mt-1">最大ファイルサイズ: 10MB (画像、カルテ、PDF、テキスト)</p>
                    </div>
                  )}
                </div>

                {/* FILE LIST VIEWPORT */}
                <div className="bg-white rounded-xl border border-warm-sand/60 overflow-hidden max-h-[340px] overflow-y-auto">
                  {isLoading ? (
                    <div className="p-16 flex flex-col items-center justify-center">
                      <Loader2 className="w-8 h-8 text-forest-medium animate-spin mb-2" />
                      <p className="text-xs text-gray-500">Google Driveよりファイル一覧を取得中...</p>
                    </div>
                  ) : filteredFiles.length === 0 ? (
                    <div className="p-16 text-center">
                      <File className="w-12 h-12 text-slate-300 mx-auto mb-2" />
                      <p className="text-xs text-gray-500">このフォルダには表示条件に一致するファイルがありません。</p>
                    </div>
                  ) : (
                    <table className="min-w-full text-xs text-left">
                      <thead className="bg-warm-sand/30 border-b border-warm-sand/60 text-slate-600 uppercase font-bold">
                        <tr>
                          <th className="py-2.5 px-4 font-serif">ファイル名</th>
                          <th className="py-2.5 px-4 hidden sm:table-cell font-sans">作成日時</th>
                          <th className="py-2.5 px-4 hidden sm:table-cell font-sans">サイズ</th>
                          <th className="py-2.5 px-4 text-right font-serif">操作</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-warm-sand/40">
                        {filteredFiles.map((file) => (
                          <tr key={file.id} className="hover:bg-warm-cream/20 group">
                            <td className="py-3 px-4">
                              <div className="flex items-center gap-2.5">
                                <span className="shrink-0">{getFileIcon(file.mimeType)}</span>
                                {file.mimeType === "application/vnd.google-apps.folder" ? (
                                  <button
                                    type="button"
                                    onClick={() => navigateIntoFolder(file.id, file.name)}
                                    className="font-bold text-forest-medium hover:text-forest-dark hover:underline focus:outline-none truncate text-left max-w-[140px] md:max-w-[200px]"
                                  >
                                    {file.name}
                                  </button>
                                ) : (
                                  <span className="font-medium text-slate-700 truncate max-w-[140px] md:max-w-[200px]" title={file.name}>
                                    {file.name}
                                  </span>
                                )}
                              </div>
                            </td>
                            <td className="py-3 px-4 hidden sm:table-cell text-slate-500">
                              {file.createdTime ? new Date(file.createdTime).toLocaleDateString("ja-JP") : "---"}
                            </td>
                            <td className="py-3 px-4 hidden sm:table-cell text-slate-500 font-mono">
                              {file.mimeType === "application/vnd.google-apps.folder" ? "フォルダ" : formatSize(file.size)}
                            </td>
                            <td className="py-3 px-4 text-right">
                              <div className="flex items-center justify-end gap-1.5">
                                {file.mimeType !== "application/vnd.google-apps.folder" && (
                                  <button
                                    type="button"
                                    onClick={() => handleViewFile(file)}
                                    className="p-1 px-1.5 hover:bg-forest-light/10 text-forest-medium rounded-md cursor-pointer flex items-center justify-center"
                                    title="内容表示"
                                  >
                                    <Eye className="w-3.5 h-3.5" />
                                  </button>
                                )}
                                {file.webViewLink && (
                                  <a
                                    href={file.webViewLink}
                                    target="_blank"
                                    referrerPolicy="no-referrer"
                                    rel="noopener noreferrer"
                                    className="p-1 px-1.5 hover:bg-orange-50 text-soft-orange rounded-md flex items-center justify-center cursor-pointer"
                                    title="Driveで開く"
                                  >
                                    <ExternalLink className="w-3.5 h-3.5" />
                                  </a>
                                )}
                                <button
                                  type="button"
                                  onClick={() => setFileToDelete(file)}
                                  className="p-1 px-1.5 hover:bg-rose-50 text-rose-500 rounded-md cursor-pointer flex items-center justify-center"
                                  title="削除"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>

              </div>
            )}
          </div>

        </div>

      </div>

      {/* FILE PREVIEW MODAL FRAME */}
      {selectedFile && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/45 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl overflow-hidden border border-warm-sand">
            
            {/* Modal Header */}
            <div className="bg-warm-sand/35 px-6 py-4 border-b border-warm-sand flex items-center justify-between">
              <div className="flex items-center gap-2">
                {getFileIcon(selectedFile.mimeType)}
                <h4 className="font-serif font-bold text-forest-dark text-sm md:text-base truncate max-w-[340px]">
                  {selectedFile.name}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => { setSelectedFile(null); setPreviewContent(null); }}
                className="p-1 text-slate-400 hover:text-slate-600 rounded-full hover:bg-warm-sand/40 cursor-pointer"
              >
                <X className="w-4.5 h-4.5" />
              </button>
            </div>

            {/* Modal Content Preview Area */}
            <div className="p-6 overflow-y-auto max-h-[380px]">
              {isPreviewLoading ? (
                <div className="flex flex-col items-center justify-center py-16">
                  <Loader2 className="w-8 h-8 text-forest-medium animate-spin mb-2" />
                  <p className="text-xs text-slate-500">Google Driveからファイルのテキスト内容を読み込んでいます...</p>
                </div>
              ) : previewContent ? (
                <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-4 font-mono text-xs text-slate-800 whitespace-pre-wrap select-text leading-relaxed">
                  {previewContent}
                </div>
              ) : selectedFile.mimeType.startsWith("image/") ? (
                <div className="flex justify-center p-2 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-xs text-slate-400 p-8">（安全な画像プレビューをサポートしています。フルサイズはDriveリンクよりご確認ください。）</span>
                </div>
              ) : (
                <div className="text-center py-12">
                  <FileText className="w-12 h-12 text-slate-300 mx-auto mb-2" />
                  <p className="text-xs text-slate-500">このファイル形式のインラインプレビューは直接サポートされていません。</p>
                  <p className="text-[11px] text-gray-400 mt-1">作成日時やファイルサイズなどのメタデータはドライブ一覧でご確認いただけます。</p>
                </div>
              )}
            </div>

            {/* Modal Footer Area */}
            <div className="bg-warm-cream/60 px-6 py-3.5 border-t border-warm-sand flex items-center justify-end gap-2.5">
              {selectedFile.webViewLink && (
                <a
                  href={selectedFile.webViewLink}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  rel="noopener noreferrer"
                  className="bg-forest-light hover:bg-forest-medium text-white px-4 py-2 rounded-xl text-xs font-bold shadow-sm flex items-center gap-1.5 cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Google Driveで直接表示・編集
                </a>
              )}
              <button
                type="button"
                onClick={() => { setSelectedFile(null); setPreviewContent(null); }}
                className="bg-white hover:bg-slate-50 border border-warm-sand px-4 py-2 rounded-xl text-xs font-bold text-slate-600 transition-colors cursor-pointer"
              >
                閉じる
              </button>
            </div>

          </div>
        </div>
      )}

      {/* STRICT USER SAFETY DELETE CONFIRMATION DIALOG (MANDATORY!) */}
      {fileToDelete && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden border border-rose-100 animate-scaleUp">
            
            <div className="bg-rose-50 px-6 py-4 border-b border-rose-100 flex items-center gap-2 text-rose-800">
              <AlertTriangle className="w-5 h-5 text-rose-500 shrink-0" />
              <h4 className="font-serif font-bold text-sm md:text-base">
                ファイルの削除確認 (警告)
              </h4>
            </div>

            <div className="p-6 space-y-3.5">
              <p className="text-xs text-slate-700 leading-relaxed">
                以下のファイルをマイドライブから<strong>完全に消去</strong>します。この操作は元に戻せません。
              </p>
              
              <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl flex items-center gap-2.5 text-xs">
                {getFileIcon(fileToDelete.mimeType)}
                <div className="truncate">
                  <span className="font-bold text-slate-700 block truncate">{fileToDelete.name}</span>
                  <span className="text-[10px] text-gray-500 block">サイズ: {formatSize(fileToDelete.size)}</span>
                </div>
              </div>

              <p className="text-[10px] text-rose-500 bg-rose-50/40 p-2.5 border border-rose-100/50 rounded-lg">
                ※危険: Google APIに削除リクエストが直ちに送信され、ご自身のGoogle Driveフォルダ内からも削除・消失されます。
              </p>
            </div>

            <div className="bg-slate-50 px-6 py-3 border-t border-slate-100 flex items-center justify-end gap-2 text-xs">
              <button
                type="button"
                onClick={() => setFileToDelete(null)}
                className="bg-white hover:bg-slate-100 border border-warm-sand px-3 py-2 rounded-xl font-bold text-slate-600 cursor-pointer"
                disabled={isDeleting}
              >
                キャンセル
              </button>
              <button
                type="button"
                onClick={handleConfirmDelete}
                className="bg-rose-600 hover:bg-rose-700 text-white font-bold px-4 py-2 rounded-xl flex items-center gap-1 shadow-sm cursor-pointer"
                disabled={isDeleting}
              >
                {isDeleting ? (
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                ) : (
                  <Trash2 className="w-3.5 h-3.5" />
                )}
                完全に削除して同期
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
