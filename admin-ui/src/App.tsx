import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { HomepageList } from "./homepage/HomepageList";
import { HomepageCreate } from "./homepage/HomepageCreate";
import { HomepageEdit } from "./homepage/HomepageEdit";
import { HomepageShow } from "./homepage/HomepageShow";
import { FreedomPayList } from "./freedomPay/FreedomPayList";
import { FreedomPayCreate } from "./freedomPay/FreedomPayCreate";
import { FreedomPayEdit } from "./freedomPay/FreedomPayEdit";
import { FreedomPayShow } from "./freedomPay/FreedomPayShow";
import { AddressList } from "./address/AddressList";
import { AddressCreate } from "./address/AddressCreate";
import { AddressEdit } from "./address/AddressEdit";
import { AddressShow } from "./address/AddressShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Project-DineBrand"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Homepage"
          list={HomepageList}
          edit={HomepageEdit}
          create={HomepageCreate}
          show={HomepageShow}
        />
        <Resource
          name="FreedomPay"
          list={FreedomPayList}
          edit={FreedomPayEdit}
          create={FreedomPayCreate}
          show={FreedomPayShow}
        />
        <Resource
          name="Address"
          list={AddressList}
          edit={AddressEdit}
          create={AddressCreate}
          show={AddressShow}
        />
      </Admin>
    </div>
  );
};

export default App;
