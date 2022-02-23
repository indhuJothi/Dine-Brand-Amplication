import { Homepage as THomepage } from "../api/homepage/Homepage";

export const HOMEPAGE_TITLE_FIELD = "username";

export const HomepageTitle = (record: THomepage): string => {
  return record.username || record.id;
};
