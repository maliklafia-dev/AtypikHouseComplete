// src/app/models/avis.model.ts
export interface Avis {
  id: number;
  rating: number;
  comment: string;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
  user: {
    id: number;
    username: string;
    avatarUrl?: string; // Optional field for user profile image
  };
  habitat: {
    id: number;
    title: string;
  };
}
