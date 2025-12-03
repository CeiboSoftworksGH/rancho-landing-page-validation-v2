import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface SectionProps {
  className?: string;
  children: React.ReactNode;
  id?: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface LinkConfig {
  surveyUrl: string;
  contactEmail: string;
  whatsappUrl: string;
  linkedinUrl: string;
}