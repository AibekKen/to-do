<template>
  <div>
    <div class="task-list" v-for="(task, index) in taskList" :key="task.id">
      <div v-if="task.display" class="task-list__item">
        <form class="task-list__form" action="" @submit.prevent>
          <input
            v-model="task.checked"
            type="checkbox"
            class="task-list__checkbox"
            :checked="task.checked"
            @change="watchChange"
          />
        </form>

        <div v-if="!task.isTaskTitleEdit" class="task-list__title-block">
          <h2 class="task-list__title">{{ task.taskName }}</h2>
          <a
            class="task-list__edit"
            href="#"
            @click.prevent="doTaskEdit(index, e)"
            >редактировать
          </a>
        </div>

        <form
          v-else
          class="task-list__title-block task__title-block_edit"
          action="#"
          @submit.prevent="submitTitle"
        >
          <input
            v-model="task.taskName"
            class="task-list__title tasktitle-input input"
            type="text"
            autofocus
          />
          <a
            class="task-list__edit"
            href="#"
            @click.prevent="doneTaskEdit(index)"
            >сохранить</a
          >
        </form>

        <a
          href="#"
          class="task-list__delete"
          @click.prevent="$emit('remove', task)"
        >
          <img src="@/assets/icons/minus.svg" alt="" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    taskList: {
      type: Array,
      required: true,
    },
  },

  methods: {
    doTaskEdit(index) {
      this.$emit("doTaskEdit", index);
    },
    doneTaskEdit(index) {
      this.$emit("doneTaskEdit", index);
    },
    watchChange() {
      this.$emit("watchChange");
    },
  },
};
</script>

<style lang="scss">
* {
  transition: all 0.3s ease;
}

.task-list {
  &__item {
    display: flex;
    align-items: center;
    width: 100%;
    height: 80px;
    padding: 15px;
    background: rgba(188, 245, 204, 0.25);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    margin: 0 0 30px 0;
  }
  &__form {
    margin: 0 10px 0 0px;
  }

  &__title {
    font-size: 24px;
    min-width: 250px;
    max-width: 400px;
    overflow: hidden;
    padding: 0 5px 0 0;
    line-height: 30px;
    height: 30px;
  }
  &__title-block {
    display: flex;
    align-items: center;
    margin: 0 auto 0 0;

    &_edit {
    }
  }

  &__edit {
    margin: 0 40px 0 0;
    font-size: 15px;
    color: #225359;
  }
  &__delete {
    display: flex;
    &:hover {
      transform: scale(1.1);
    }
  }

  .tasktitle-input {
    background: transparent;
    min-width: 250px;
    max-width: 400px;
  }
}
</style>