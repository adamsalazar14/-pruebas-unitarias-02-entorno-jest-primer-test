import request from 'supertest';
import app from '../src/app';

describe('Pruebas sobre el endpoint de tareas', () => {
  it('Debería retornar una lista de tareas en GET /tareas', async () => {
    const response = await request(app).get('/tareas');

    // Verificamos el código de estado
    expect(response.status).toBe(200);

    // Verificamos que sea un arreglo
    expect(Array.isArray(response.body)).toBeTruthy();

    // Verificamos que tenga los datos esperados en memoria
    expect(response.body.length).toBe(2);
    expect(response.body[0]).toHaveProperty('id');
    expect(response.body[0]).toHaveProperty('titulo', 'Aprender Jest');
  });
});