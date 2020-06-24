import { Application } from "express";
import user from "./user/user.routes";

export default function buildApps(app: Application) {
  app.use("/user", user);
}
