<template>
  <div class="hello">
    <div
      class="card horizontal card-content"
      style="width: 70%; margin: 0 auto"
    >
      <ul class="collection" style="width: 100%">
        <li v-for="task in tasks" :key="task.id" class="collection-item">
          <h5 class="header">
            {{ task.title }}
            <span class="task-badge right-align">{{ task.project }}</span>
          </h5>
          <p>{{ task.description }}</p>
          <button
            class="btn-style black darken-2"
            @click="deletarTarefa(task.id)"
          >
            <div class="flex-display">
              Delete <i class="material-icons margin-left">delete</i>
            </div>
          </button>
          <button
            class="btn-style black darken-2"
            @click="obterTarefaEdit(task.id)"
          >
            <div class="flex-display">
              Edit <i class="material-icons margin-left">edit</i>
            </div>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TarefaList',
  props: {
    msg: String,
    tasks: null,
  },
  data() {
    return {
      taskEdit: null,
    };
  },
  methods: {
    deletarTarefa(id) {
      this.$emit('salveiDelete', id);
    },
    obterTarefaEdit(id) {
      this.taskEdit = this.tasks.find((tarefa) => tarefa.id === id);
      const editarTarefa = this.taskEdit;

      this.$emit('salveiEdit', editarTarefa);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.task-badge {
  background-color: #929292;
  color: white;
  padding: 6px;
  border-radius: 6px;
  font-size: 0.8rem;
  vertical-align: middle;
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

.flex-display {
  display: flex;
  justify-content: center;
  align-items: center;
}

.margin-left {
  margin-left: 5px;
}
</style>
