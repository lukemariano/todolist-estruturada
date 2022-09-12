<template>
  <div id="app">
    <nav class="orange darken-2 nav-align">
      <img alt="Vue logo" src="../assets/logo.png" width="50" />
    </nav>
    <!-- titulo -->
    <div v-show="exibir.lista" class="hello main-title">
      <h1>Welcome to your Vuejs APP</h1>
      <!-- btn adicionar -->
      <div style="padding: 20px">
        <button
          @click="mostrarCadastro"
          class="btn-floating btn-large waves-effect waves-light btn-add orange darken-2"
        >
          <i class="material-icons">add</i>
        </button>
      </div>
    </div>
    <!-- lista -->
    <div v-show="exibir.lista">
      <TarefaList
        :tasks="listaTarefas"
        @salveiDelete="recebiDelete"
        @salveiEdit="recebiEdit"
      />
    </div>

    <!-- form -->
    <div v-show="exibir.form">
      <TarefaForm
        @salvarClick="recebiSalvar"
        @comeBack="recebiBack"
        :projectsTask="projetosItens"
      />
    </div>

    <!-- form edit -->
    <div v-if="exibir.editar">
      <TarefaEdit
        :editarCampos="camposEdit"
        @salvarEdition="apiEdit"
        @voltarEdit="recebiVoltarEdit"
      />
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
      projetosItens: null,
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
    async recebiBack() {
      this.exibir.form = false;
      this.exibir.lista = true;
    },
    async recebiVoltarEdit() {
      this.exibir.editar = false;
      this.exibir.lista = true;
    },
    async obterProjects() {
      let resultado = await TasksApi.getProjects();
      this.projetosItens = resultado;
      console.log(this.projetosItens);
    },
  },
  created() {
    this.obterTarefas();
    this.obterProjects();
  },
};
</script>

<style scoped>
.main-title {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.btn-add {
  border: none;
}

.nav-align {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
