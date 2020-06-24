import { Request, Response } from "express";
import mapRequest from "./mapper";
import { TAppController, IAppControllerRes, IAppRequest } from "../types/app";

export function RequestWrapper(wrappedFunction: TAppController) {
  return async (req: Request, res: Response) => {
    const mappedRequest: IAppRequest = mapRequest(req);
    const { status, payload }: IAppControllerRes = await wrappedFunction(
      mappedRequest
    );
    return res.status(status).json(payload);
  };
}
