import { log } from "console";
import express, { Application, Request, Response } from "express";
import path from "path";
import cors from "cors";

const app: Application = express();
const port: number = 3010;

// Use the cors middleware to allow all origins
app.use(cors());

// Set the 'gifs' directory as the static folder
app.use(express.static(path.join(__dirname, 'gifs')));

app.get("/todo", (req: Request, res: Response) => {
  res.json({ message: "todo" });
});

// Define a route to display images
app.get('/images/:imageName', (req: Request, res: Response) => {
  const imageName = req.params.imageName;
  res.sendFile(path.join(__dirname, 'gifs', imageName));
});

const server = app.listen(port);

export default server;
