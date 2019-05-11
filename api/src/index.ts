import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as helmet from "helmet";
import * as cors from "cors";

import { initializeDb } from "./utilities";
import { routes } from "./routes";

createConnection()
  .then(async connection => {
    const app = express();
    // Call midlewares
    app.use(cors());
    app.use(helmet());
    app.use(bodyParser.json());

    await initializeDb();

    app.use("/", routes);

    app.listen(3000, () => {
      console.log("Listening on 3000");
    });
  })
  .catch(error => console.log(error));
