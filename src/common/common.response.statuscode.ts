type NetworkLoadingState = {
  state: "loading";
};
type NetworkFailedState = {
  state: "failed";
  code: number;
};
type NetworkSuccessState = {
  state: "success";
  response: {
    title: string;
    duration: number;
    summary: string;
  };
};
// Create a type which represents only one of the above types
// but you aren't sure which it is yet.
type NetworkState =
  | NetworkLoadingState
  | NetworkFailedState
  | NetworkSuccessState;

export const StatusCode = {
  Success:{
    OK:200,
    Created:201,
    Accepted:202
  },
  Redirection:{
    MovePermanently:301,
    TemporaryRedirect:307,
    PermanentRedirect:308
  },
  ClientError:{
    BadRequest:400,
    Unauthorized:401,
    PaymentRequired:402,
    Forbidden:403,
    NotFound:404,
    MethodNotAllow:405,
    TooManyRequests:429
  }
}