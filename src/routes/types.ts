export function ToResponse(ok: boolean, msg: any): ResponseType {
  return {ok, msg};
}

export interface ResponseType{
  ok: boolean,
  msg: any,
}