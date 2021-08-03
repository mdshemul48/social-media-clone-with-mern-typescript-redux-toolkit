export interface errorMessageInterface {
  msg: string;
}

export default interface errorInterface {
  response: { data: { errors: errorMessageInterface[] } };
}
