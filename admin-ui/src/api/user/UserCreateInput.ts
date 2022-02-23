export type UserCreateInput = {
  firstName: string;
  lastName?: string | null;
  password: string;
  roles: Array<string>;
  username: string;
};
