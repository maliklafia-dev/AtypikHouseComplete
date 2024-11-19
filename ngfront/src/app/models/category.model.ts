export interface Category {
  id?: number;
  '@id': string;
  title: string;
  description?: string | undefined;
  slug: string;
  url: string;
  createdAt?: Date;
  updatedAt?: Date;
}
