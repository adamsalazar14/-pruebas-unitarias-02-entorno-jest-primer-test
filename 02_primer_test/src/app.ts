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

app.post('/tareas', (req: Request, res: Response): any => {
  const { titulo } = req.body;

  if (!titulo || titulo.trim() === '') {
    return res.status(400).json({ error: 'El título de la tarea es requerido' });
  }

  const nuevaTarea = {
    id: tareas.length > 0 ? tareas[tareas.length - 1].id + 1 : 1, // Generamos un ID autoincremental
    titulo: titulo.trim(),
    completada: false
  };

  tareas.push(nuevaTarea);
  return res.status(201).json(nuevaTarea);
});

export default app;