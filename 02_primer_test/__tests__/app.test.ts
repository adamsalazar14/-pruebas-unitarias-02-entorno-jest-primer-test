import request from 'supertest';
import app from '../src/app';

describe('Pruebas sobre el endpoint de tareas', () => {
  
  it('Debería retornar una lista de tareas en GET /tareas', async () => {
    const response = await request(app).get('/tareas');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBeTruthy();
  });

  it('Debería crear una nueva tarea con datos válidos (Caso Feliz)', async () => {
    const response = await request(app)
      .post('/tareas')
      .send({ titulo: 'Hacer el entregable de Jest' });

    expect(response.status).toBe(201); 
    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('titulo', 'Hacer el entregable de Jest');
    expect(response.body).toHaveProperty('completada', false);
  });

  it('Debería fallar al intentar crear una tarea sin título (Caso de Error)', async () => {
    const response = await request(app)
      .post('/tareas')
      .send({ titulo: '' }); 

    expect(response.status).toBe(400); 
    expect(response.body).toHaveProperty('error');
  });

});