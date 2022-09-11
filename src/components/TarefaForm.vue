<template>
  <div>
    <h2>Cadastrar tarefa:</h2>
    <input
      type="text"
      name="title"
      id="title"
      placeholder="Entre com a tarefa"
      v-model="form.title"
    />
    <input
      type="text"
      name="description"
      id="description"
      placeholder="Digite a descrição da tarefa"
      v-model="form.description"
    />
    <input type="date" name="date" id="date" v-model="form.date" />
    <button @click="salvarTarefa">Salvar</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        title: null,
        description: null,
        date: null,
      },
    };
  },
  methods: {
    salvarTarefa() {
      const novaTarefa = {
        title: this.form.title,
        description: this.form.description,
        date: this.form.date,
      };

      this.$emit('salvarClick', novaTarefa);

      this.form.title = null;
      this.form.description = null;
      this.form.date = null;
    },
  },
};
</script>

<style scoped></style>
