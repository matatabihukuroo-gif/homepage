@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=Noto+Serif+JP:wght@500;700&family=Quicksand:wght@500;600;700&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: "Noto Sans JP", "Quicksand", sans-serif;
  --font-serif: "Noto Serif JP", serif;
  
  --color-warm-cream: #FAF6F0;
  --color-warm-sand: #F4EBE1;
  --color-fukuro-gold: #D4AF37;
  --color-forest-dark: #1E3A2F;
  --color-forest-medium: #2D5A47;
  --color-forest-light: #4A8B71;
  --color-soft-orange: #E89E78;
  --color-warm-peach: #FFF2EB;
}

html {
  scroll-behavior: smooth;
  font-feature-settings: "palt";
}

body {
  background-color: var(--color-warm-cream);
  color: #2D3748;
}

/* Custom scrollbar for subtle aesthetic */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #FAF6F0;
}

::-webkit-scrollbar-thumb {
  background: #D4E2D9;
  border-radius: 9999px;
}

::-webkit-scrollbar-thumb:hover {
  background: #B4CBD0;
}
