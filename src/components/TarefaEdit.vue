<template>
  <div>
    <h2>Editar Tarefa:</h2>
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
    <button @click="salvarEdit">Edit Task</button>
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
  },
};
</script>
