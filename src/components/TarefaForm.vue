<template>
  <div class="main-container">
    <div class="main-conteudo">
      <h2 style="text-align: center; font-weight: bold">Cadastrar tarefa:</h2>
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
      <button @click="salvarTarefa" class="btn-style black">Save</button>
      <button @click="voltarLista" class="btn-style black">Back</button>
    </div>
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
    voltarLista() {
      this.$emit('comeBack');
      this.form.title = null;
      this.form.description = null;
      this.form.date = null;
    },
  },
};
</script>
<style scoped>
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

.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-conteudo {
  width: 50%;
  margin-top: 35px;
}
</style>
