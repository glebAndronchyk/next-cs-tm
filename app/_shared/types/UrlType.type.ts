export type UrlTypeType<
  P extends "https" | "http",
  U extends string
> = `${P}://${U}`;
