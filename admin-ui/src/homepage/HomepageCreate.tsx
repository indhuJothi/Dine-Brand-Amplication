import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { FreedomPayTitle } from "../freedomPay/FreedomPayTitle";

export const HomepageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Email" source="email" type="email" />
        <ReferenceInput
          source="freedompay.id"
          reference="FreedomPay"
          label="Freedom Pay"
        >
          <SelectInput optionText={FreedomPayTitle} />
        </ReferenceInput>
        <TextInput label="Mobile Number" source="mobileNumber" />
        <TextInput label="Password" source="password" />
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Create>
  );
};
