import { SortOrder } from "../../util/SortOrder";

export type AddressOrderByInput = {
  addressId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  pinCode?: SortOrder;
  updatedAt?: SortOrder;
};
