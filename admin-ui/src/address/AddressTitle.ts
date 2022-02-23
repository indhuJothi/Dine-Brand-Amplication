import { Address as TAddress } from "../api/address/Address";

export const ADDRESS_TITLE_FIELD = "location";

export const AddressTitle = (record: TAddress): string => {
  return record.location || record.id;
};
