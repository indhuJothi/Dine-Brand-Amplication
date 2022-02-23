import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { FREEDOMPAY_TITLE_FIELD } from "../freedomPay/FreedomPayTitle";

export const HomepageList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Homepages"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
