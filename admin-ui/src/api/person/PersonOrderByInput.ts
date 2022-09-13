import { SortOrder } from "../../util/SortOrder";

export type PersonOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  phoneNo?: SortOrder;
  updatedAt?: SortOrder;
};
