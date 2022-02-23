import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { AddressTitle } from "./AddressTitle";

export const AddressCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="address.id" reference="Address" label="Address">
          <SelectInput optionText={AddressTitle} />
        </ReferenceInput>
        <TextInput label="Location" source="location" />
        <TextInput label="Pin Code" source="pinCode" />
      </SimpleForm>
    </Create>
  );
};
