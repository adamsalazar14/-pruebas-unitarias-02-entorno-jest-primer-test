import express, { Request, Response } from 'express';

const app = express();
app.use(express.json());

const tareas = [
  { id: 1, titulo: 'Aprender Jest', completada: false },
  { id: 2, titulo: 'Configurar TypeScript', completada: true }
];

app.get('/tareas', (req: Request, res: Response) => {
  res.status(200).json(tareas);
});

export default app;