import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const PersonEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Address" source="address" />
        <TextInput label="Name" source="name" />
        <TextInput label="Phone No" source="phoneNo" />
      </SimpleForm>
    </Edit>
  );
};
