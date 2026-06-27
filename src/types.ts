export interface NavLink {
  label: string;
  id: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  longDescription?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  videoUrl?: string;
  client: string;
  year: string;
  color: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatarUrl: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface InquiryFormInput {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  message: string;
}
