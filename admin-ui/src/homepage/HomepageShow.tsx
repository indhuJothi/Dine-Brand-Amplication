import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { FREEDOMPAY_TITLE_FIELD } from "../freedomPay/FreedomPayTitle";

export const HomepageShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
