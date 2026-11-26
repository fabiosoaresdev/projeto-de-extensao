export interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  caption: string;
  category: 'feira' | 'oficinas' | 'produtos';
  badge?: string;
}

export interface CatalogPage {
  pageNumber: number;
  title: string;
  label: string;
  src: string;
}

export interface MetricItem {
  label: string;
  value: number;
  icon: string;
  prefix?: string;
  suffix?: string;
  isGreen?: boolean;
}

export interface Organization {
  name: string;
  origin: string;
  since: string;
  description: string;
}

export interface Entrepreneur {
  name: string;
  specialty: string;
}

export interface Workshop {
  id: number;
  title: string;
  subtitle: string;
  date: string;
  description: string[];
  mainPhoto: {
    src: string;
    alt: string;
    caption: string;
  };
  subPhotos: Array<{
    src: string;
    alt: string;
    caption: string;
  }>;
  steps?: string[];
}
