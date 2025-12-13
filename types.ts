import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Product {
  id: string;
  name: string;
  size: string;
  description: string;
  image: string;
  popular?: boolean;
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
}