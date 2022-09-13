import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PersonWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  phoneNo?: StringNullableFilter;
};
