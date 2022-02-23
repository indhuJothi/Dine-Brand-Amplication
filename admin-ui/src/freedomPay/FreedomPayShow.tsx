import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { FREEDOMPAY_TITLE_FIELD } from "./FreedomPayTitle";
import { ADDRESS_TITLE_FIELD } from "../address/AddressTitle";

export const FreedomPayShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Address" source="address.id" reference="Address">
          <TextField source={ADDRESS_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Freedom of pay" source="freedomOfPay" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Homepage"
          target="FreedomPayId"
          label="Homepages"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Email" source="email" />
            <ReferenceField
              label="Freedom Pay"
              source="freedompay.id"
              reference="FreedomPay"
            >
              <TextField source={FREEDOMPAY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Mobile Number" source="mobileNumber" />
            <TextField label="Password" source="password" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Username" source="username" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
