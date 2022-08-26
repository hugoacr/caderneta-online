import express, {Request, Response, NextFunction } from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  if (err.status) {
    return res.status(err.status).json({ error: err.message })
  }
  return res.status(500).json({ error: err.message})
});

export default app;