<template>
  <div>
    <project-title />
    <add-task @addNewTask="addTask" />
    <filter-task @filter="doFilter" />

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
import FilterTask from "./components/FilterTask.vue";

export default {
  components: {
    ToDoList,
    ProjectTitle,
    AddTask,
    FilterTask,
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
    doFilter(filterName, filterChecked) {
      console.log(filterName, filterChecked);
      this.taskList.forEach((task) => {
        if (filterName && filterChecked) {
          if (
            task.taskName.toUpperCase().includes(filterName.toUpperCase()) &&
            filterChecked === "yes"
          ) {
            task.checked ? (task.display = true) : (task.display = false);
          } else if (
            task.taskName.toUpperCase().includes(filterName.toUpperCase()) &&
            filterChecked === "no"
          ) {
            task.checked ? (task.display = false) : (task.display = true);
          } else if (filterChecked) {
            task.taskName.toUpperCase().includes(filterName.toUpperCase())
              ? (task.display = true)
              : (task.display = false);
          } else {
            task.display = true;
          }
        } else if (filterChecked) {
          if (filterChecked == "no") {
            task.checked ? (task.display = false) : (task.display = true);
          }
          if (filterChecked === "yes") {
            task.checked ? (task.display = true) : (task.display = false);
          }
          if (filterChecked === "all") {
            task.display = true;
          }
        } else if (filterName) {
          task.taskName.toUpperCase().includes(filterName.toUpperCase())
            ? (task.display = true)
            : (task.display = false);
        } else task.display = true;
      });
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
