export interface ErrorCauseObject {
  elementId: string | number;
  // TODO: add more
}

export interface ErrorObject {
  text: string;
  cause: string | ErrorCauseObject
}
