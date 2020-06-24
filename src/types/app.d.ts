import { IncomingHttpHeaders } from "http";

interface ParamsDictionary {
  [key: string]: string;
}

interface IAppRequest {
  body: any;
  headers: IncomingHttpHeaders;
  hostname: string;
  method: string;
  params: ParamsDictionary;
  path: string;
  ip: string;
}

interface IAppControllerRes {
  status: number;
  payload: any;
}

type TAppController = (request: IAppRequest) => Promise<IAppControllerRes>;
