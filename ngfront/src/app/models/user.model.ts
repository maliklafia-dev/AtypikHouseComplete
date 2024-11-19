export interface User {
  id?: number; // Optional since the ID might not exist until the user is created
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password?: string; // Optional to avoid sending passwords when unnecessary
  reTypePassword?: string; // For registration form validation
  roles: string[];
  isActive: boolean;
  createdAt?: Date; // Optional
  updatedAt?: Date; // Optional
}
