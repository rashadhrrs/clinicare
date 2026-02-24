export interface Clinic {
  id: string;
  name: string;
  type: string;
  address: string;
  rating: number;
  totalReviews: number;
  images: string[];
}

export interface NearbyClinic {
  name: string;
  address: string;
  rating: number;
  reviews: number;
  distance: string;
  time: string;
  type: string;
  image: string;
}

export interface Article {
  title: string;
  description: string;
  category: string;
  date: string;
  image: string;
}

export interface Promo {
  title: string;
  description: string;
  bgImage: string;
}
