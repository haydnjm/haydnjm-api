import { Express } from "express";

export default function (app: Express) {
  app.get("/", (_, res) => {
    res.send("Hello World!");
  });
}
