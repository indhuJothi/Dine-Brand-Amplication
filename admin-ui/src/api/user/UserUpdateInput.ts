export type UserUpdateInput = {
  firstName?: string;
  lastName?: string | null;
  password?: string;
  roles?: Array<string>;
  username?: string;
};
