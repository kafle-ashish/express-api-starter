import { Request, Response, json, urlencoded } from "express";
import { createConnection } from "mongoose";
import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";

import buildApps from "./apps/apps";

const PORT = process.env.PORT || 3000;
const app = express();

/* Connect to database */
const conn = createConnection(process.env.APP_DB_URI || "", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

/* JSON middleware for REST apis. */
app.use(morgan("tiny"));
app.use(helmet());
app.use(cors());
app.use(json({ limit: "50mb" }));
app.use(
  urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 1000000,
  })
);

buildApps(app);

/* Error Handlers */
app.use((_: Request, res: Response) => {
  return res.status(400).json({
    error: "Not found!",
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});
