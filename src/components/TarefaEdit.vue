<template>
  <div class="main-container">
    <div class="main-conteudo">
      <h2 style="text-align: center; font-weight: bold">Editar Tarefa:</h2>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Entre com a tarefa"
        v-model="form.titulo"
      />
      <input
        type="text"
        name="description"
        id="description"
        placeholder="Digite a descrição da tarefa"
        v-model="form.descricao"
      />
      <input type="date" name="date" id="date" v-model="form.date" />
      <button @click="salvarEdit" class="btn-style black">Edit Task</button>
      <button @click="voltarLista" class="btn-style black">Back</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TarefaEdit',
  props: {
    editarCampos: null,
  },
  data() {
    return {
      form: {
        titulo: this.editarCampos.title,
        descricao: this.editarCampos.description,
        data: this.editarCampos.date,
      },
    };
  },
  methods: {
    salvarEdit() {
      const tarefaEditada = {
        title: this.form.titulo,
        description: this.form.descricao,
        date: this.form.data,
        id: this.editarCampos.id,
      };

      this.$emit('salvarEdition', tarefaEditada);

      this.form.titulo = null;
      this.form.descricao = null;
      this.form.data = null;
    },
    voltarLista() {
      this.$emit('voltarEdit');
    },
  },
};
</script>

<style scoped>
.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-conteudo {
  width: 50%;
  margin-top: 35px;
}

.btn-style {
  border: none;
  text-decoration: none;
  padding: 1px;
  height: 30px;
  width: 110px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  color: white;
  margin-right: 20px;
}
</style>
