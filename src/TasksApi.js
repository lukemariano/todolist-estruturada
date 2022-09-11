import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000';

export default {
  async getTasks() {
    const req = await axios.get('/tasks');
    console.log(req.data);
    return req.data;
  },
  async createTask(tarefa) {
    await axios.post('/tasks', tarefa);
  },
  async deleteTask(id) {
    const req = await axios.delete('/tasks/' + id);
    console.log('deletado', req);
  },
  async editTask(tarefaEditada) {
    await axios.patch('/tasks/' + tarefaEditada.id, tarefaEditada);
  },
};
