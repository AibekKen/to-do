<template>
  <div>
    <form class="add-task__form" action="#" @submit.prevent="addTask">
      <input
        v-model="taskAdd"
        type="text"
        class="add-task__input"
        placeholder="Введите задачу"
      />
      <a href="#" class="add-task__submit" @click.prevent="addTask"
        ><img src="@/assets/icons/add-icon.svg" alt="icon" />
      </a>
    </form>
    <div class="task">
      <div
        class="task__task-list"
        v-for="(task, index) in taskList"
        :key="task.id"
      >
        <form class="task__form" action="" @submit.prevent>
          <input
            v-model="task.checked"
            type="checkbox"
            class="task__checkbox"
            @change="watchChange"
            :checked="task.checked"
          />
        </form>

        <div v-if="!task.isTaskTitleEdit" class="task__title-block">
          <h2 class="task__title">{{ task.taskName }}</h2>
          <a class="task__edit" href="#" @click.prevent="doTaskEdit(index, e)"
            >редактировать
          </a>
        </div>

        <form
          v-else
          class="task__title-block task__title-block_edit"
          action="#"
          @submit.prevent="submitTitle"
        >
          <input
            v-model="task.taskName"
            class="task__title tasktitle-input input"
            type="text"
            autofocus
          />
          <a class="task__edit" href="#" @click.prevent="doneTaskEdit(index)"
            >сохранить</a
          >
        </form>

        <a href="#" class="task__delete" @click.prevent="deleteTask">
          <img src="@/assets/icons/minus.svg" alt="" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      taskAdd: "",
      taskList: [],
    };
  },
  mounted() {
    if (localStorage.taskList) {
      this.taskList = JSON.parse(localStorage.taskList);
    }
  },
  methods: {
    addTask() {
      if (this.taskAdd) {
        const newTask = {
          id: Date.now(),
          taskName: this.taskAdd,
          isTaskTitleEdit: false,
          checked: false,
        };
        this.taskList.push(newTask);
        localStorage.taskList = JSON.stringify(this.taskList);
        this.taskAdd = "";
      }
    },
    doTaskEdit(index) {
      this.taskList[index].isTaskTitleEdit = true;
    },
    doneTaskEdit(index) {
      this.taskList[index].isTaskTitleEdit = false;
      localStorage.taskList = JSON.stringify(this.taskList);
    },
    watchChange() {
      localStorage.taskList = JSON.stringify(this.taskList);
    },
  },
};
</script>

<style lang="scss">
* {
  transition: all 0.3s ease;
}
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

.task {
  &__task-list {
    display: flex;
    align-items: center;
    max-width: 650px;
    height: 80px;
    padding: 15px;
    background: rgba(188, 245, 204, 0.25);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    margin: 0 0 30px 0;
  }
  &__form {
    margin: 0 10px 0 0px;
  }
  &__checkbox {
  }

  &__title {
    font-size: 24px;
    min-width: 250px;
    max-width: 400px;
    overflow: hidden;
    padding: 0 5px 0 0;
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