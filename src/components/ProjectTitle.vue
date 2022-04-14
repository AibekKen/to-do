<template>
  <div class="title-section">
    <div v-if="!IsEditTitle" class="title-block">
      <h1 class="title showed-title">
        {{ title }}
      </h1>
      <a class="edit" @click="doEdit">
        <img src="@/assets/icons/edit_icon.svg" alt="" />
      </a>
    </div>
    <form
      v-else
      class="title-block title-block__edit"
      action="#"
      @submit.prevent="submitTitle"
    >
      <input
        v-model="title"
        class="title title-input input"
        type="text"
        autofocus
      />
      <a class="done" @click="doneEdit">
        <img src="@/assets/icons/done_icon.svg" alt="" />
      </a>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "Название проекта",
      IsEditTitle: false,
    };
  },
  methods: {
    doEdit() {
      this.IsEditTitle = true;
    },
    doneEdit() {
      this.IsEditTitle = false;
    },
  },
  mounted() {
    if (localStorage.title) {
      this.title = localStorage.title;
    }
  },
  watch: {
    title(newTitle) {
      localStorage.title = newTitle;
    },
  },
};
</script>
<style lang='scss'>
.title-section {
  margin: 0 0 60px 0;
}
.title {
  padding: 10px 0 0 0;
  font-size: 40px;
  width: 400px;
}
.edit,
.done {
  display: block;
  width: 25px;
  height: 25px;
  margin: 0 0 4px 0;
  img {
    padding: 1px;
    width: 100%;
    height: 100%;
  }
}

.input {
  display: inline-block;
}
.showed-title {
  padding: 13px 0 0 0px;
}
.title-block {
  display: flex;
  align-items: center;
  align-items: flex-end;
}
a {
  display: inline-block;
  cursor: pointer;
}
.title-section {
  height: 80px;
}
</style>