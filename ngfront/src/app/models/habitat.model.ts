import {Category} from '../models/category.model';
export interface Habitat {
  id: number;
  title: string;
  description: string;
  slug: string;
  location: string;
  city: string;         // Added field for city
  country: string;      // Added field for country
  pricePerNight: number;
  maxGuests: number;
  amenities: string[];
  availability: string[];
  createdAt: string;
  updatedAt: string;
  owner: any;
  category: Category | string;
  images: { url: string }[];  // URL for images (can hold multiple images)
  startDate:Date,
  endDate:Date
}