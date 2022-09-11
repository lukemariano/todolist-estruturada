<template>
  <div id="app">
    <nav class="orange darken-2">
      <div class="nav-weapper">
        <img alt="Vue logo" src="../assets/logo.png" width="32" />
      </div>
    </nav>

    <div style="padding: 20px">
      <button @click="mostrarCadastro">Adicionar</button>
    </div>

    <!-- lista -->
    <div v-show="exibir.lista">
      <TarefaList
        msg="Welcome to Your Vue.js App"
        :tasks="listaTarefas"
        @salveiDelete="recebiDelete"
        @salveiEdit="recebiEdit"
      />
    </div>

    <!-- form -->
    <div v-show="exibir.form">
      <TarefaForm @salvarClick="recebiSalvar" />
    </div>

    <!-- form edit -->
    <div v-if="exibir.editar">
      <TarefaEdit :editarCampos="camposEdit" @salvarEdition="apiEdit" />
    </div>
  </div>
</template>

<script>
import TasksApi from '../TasksApi.js';
import TarefaList from '../components/TarefaList.vue';
import TarefaForm from '@/components/TarefaForm.vue';
import TarefaEdit from '@/components/TarefaEdit.vue';

export default {
  name: 'PageHome',
  components: {
    TarefaList,
    TarefaForm,
    TarefaEdit,
  },
  data() {
    return {
      listaTarefas: null,
      camposEdit: null,
      exibir: {
        lista: true,
        form: false,
        editar: false,
      },
    };
  },
  methods: {
    async obterTarefas() {
      let resultado = await TasksApi.getTasks();
      this.listaTarefas = resultado;
    },
    async mostrarCadastro() {
      this.exibir.form = true;
      this.exibir.lista = false;
    },
    async recebiSalvar(novaTarefa) {
      await TasksApi.createTask(novaTarefa);

      this.obterTarefas();

      this.exibir.form = false;
      this.exibir.lista = true;
    },
    async recebiDelete(id) {
      await TasksApi.deleteTask(id);

      this.obterTarefas();
    },
    async recebiEdit(editarTarefa) {
      this.camposEdit = editarTarefa;

      this.exibir.editar = true;
      this.exibir.lista = false;
      console.log(editarTarefa.title);
    },
    async apiEdit(tarefaEditada) {
      await TasksApi.editTask(tarefaEditada);

      this.exibir.editar = false;
      this.exibir.lista = true;

      this.obterTarefas();
    },
  },
  created() {
    this.obterTarefas();
  },
};
</script>

<style></style>
