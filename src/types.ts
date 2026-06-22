import { LucideIcon } from "lucide-react";

export interface StaffMember {
  name: string;
  kanaName: string;
  role: string;
  position: string;
  profileText: string;
  history: string[];
  hobbies: string[];
  gender: 'male' | 'female';
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'about' | 'cost' | 'target';
}

export interface ServiceDetail {
  id: string;
  title: string;
  summary: string;
  description: string;
  bullets: string[];
}

export interface ContactFormData {
  name: string;
  kana: string;
  relation: string; // 本人、家族、ケアマネジャー、医療機関、その他
  phone: string;
  email: string;
  message: string;
  preferredContact: 'phone' | 'email' | 'either';
}
