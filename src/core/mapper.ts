import { Request } from "express";
import { IAppRequest } from "../types/app";

export default function mapRequest(req: Request): IAppRequest {
  return {
    body: req.body,
    headers: req.headers,
    hostname: req.hostname,
    method: req.method,
    params: req.params,
    path: req.path,
    ip: req.ip,
  };
}
