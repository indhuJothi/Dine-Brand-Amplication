import { HomepageWhereInput } from "./HomepageWhereInput";
import { HomepageOrderByInput } from "./HomepageOrderByInput";

export type HomepageFindManyArgs = {
  where?: HomepageWhereInput;
  orderBy?: HomepageOrderByInput;
  skip?: number;
  take?: number;
};
