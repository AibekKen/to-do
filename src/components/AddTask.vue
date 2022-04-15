<template>
  <form class="add-task__form" action="#" @submit.prevent="addNewTask">
    <input
      v-model="this.task.taskName"
      type="text"
      class="add-task__input"
      placeholder="Введите задачу"
    />
    <a href="#" class="add-task__submit" @click.prevent="addNewTask"
      ><img src="@/assets/icons/add-icon.svg" alt="icon" />
    </a>
  </form>
</template>
<script>
export default {
  data() {
    return {
      task: {
        taskName: "",
        isTaskTitleEdit: false,
        checked: false,
        display: true,
      },
    };
  },
  methods: {
    addNewTask() {
      if (this.task.taskName) {
        this.task.id = Date.now();
        this.$emit("addNewTask", this.task);
        this.task = {
          taskName: "",
          isTaskTitleEdit: false,
          checked: false,
          display: true,
        };
      }
    },
  },
};
</script>
<style lang='scss'>
.add-task {
  &__form {
    display: flex;
    align-items: center;
    margin: 0 0 30px 0;
  }

  &__input {
    display: inline-block;
    width: 320px;
    height: 40px;
    border: 1px solid rgba(0, 0, 0, 0.544);
    margin: 0 15px 0 0;
    padding: 10px;
    font-size: 14px;
    line-height: 40px;
  }

  &__submit {
    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>