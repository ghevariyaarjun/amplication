import { SortOrder } from "../../util/SortOrder";

export type PersonOrderByInput = {
  address?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  phoneNo?: SortOrder;
  updatedAt?: SortOrder;
};
