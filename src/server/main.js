import express from "express";
import ViteExpress from "vite-express";

import { body, validationResult } from 'express-validator';
import bodyParser from "body-parser";
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const urlendcodedParser = bodyParser.urlencoded({ extended: false })


app.post('/', (req, res) => {
  console.log('from express', req.body);
});

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
