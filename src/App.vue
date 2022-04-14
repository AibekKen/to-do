<template>
  <div>
   <project-title/>
    <to-do-list />
  </div>
</template>

<script>
import ToDoList from "./components/ToDoList.vue";
import ProjectTitle from "./components/ProjectTitle.vue";
export default {
  components: {
    ToDoList,
    ProjectTitle,
  },
  name: "App",
};
</script>

<style lang='scss'>
$fontfamily: "Georgia";
$minwidth: 320px;
@import "./sass/nullstyle";

#app {
  max-width: 1230px;
  margin: 0 auto;
  padding: 15px;
}
</style>
