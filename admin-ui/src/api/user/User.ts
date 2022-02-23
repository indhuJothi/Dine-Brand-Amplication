export type User = {
  createdAt: Date;
  firstName: string;
  id: string;
  lastName: string | null;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
