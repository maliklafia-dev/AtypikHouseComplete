import {User} from "./user.model";
import {Habitat} from "./habitat.model";
import {Status} from "./status.model";

export interface Reservation {
  id?: number;
  startDate: Date; // or Date if you want to use Date objects
  endDate: Date;
  totalPrice: number;
  createdAt?: Date; // For response only
  updatedAt?: Date; // For response only
  user: User; // Adjust as per the User model
  habitat: Habitat; // Adjust as per the Habitat model
  status: Status; // Adjust as per the Status model
  payments?: Array<any>; // Adjust to Payment model if required
}
