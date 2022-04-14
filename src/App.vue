<template>
  <div>
    <project-title />
    <add-task @addNewTask="addTask" />
    <to-do-list
      :taskList="taskList"
      @doTaskEdit="doTaskEdit"
      @doneTaskEdit="doneTaskEdit"
      @watchChange="watchChange"
      @remove="removeTask"
    />
  </div>
</template>

<script>
import ToDoList from "./components/ToDoList.vue";
import ProjectTitle from "./components/ProjectTitle.vue";
import AddTask from "./components/AddTask.vue";
export default {
  components: {
    ToDoList,
    ProjectTitle,
    AddTask,
  },
  name: "App",
  data() {
    return {
      taskList: [],
    };
  },
  mounted() {
    if (localStorage.taskList) {
      this.taskList = JSON.parse(localStorage.taskList);
    }
  },
  methods: {
    addTask(task) {
      this.taskList.push(task);
      localStorage.taskList = JSON.stringify(this.taskList);
    },
    removeTask(task) {
      this.taskList = this.taskList.filter((t) => t.id !== task.id);
      localStorage.taskList = JSON.stringify(this.taskList);
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

<style lang='scss'>
$fontfamily: "Georgia";
$minwidth: 320px;
@import "./sass/nullstyle";

#app {
  max-width: 650px;
  margin: 0 auto;
  padding: 15px;
}
</style>
