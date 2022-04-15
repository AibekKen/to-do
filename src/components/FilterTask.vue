<template>
  <form class="filter__block">
    <input
      v-model="filterName"
      type="text"
      class="filter__byname"
      placeholder="поиск по имени"
      @keyup="doFilter"
    />
    <select
      v-model="filterChecked"
      @change="doFilter"
      class="filter__bychecked"
    >
      <option value="all">все</option>
      <option value="yes">выполненные</option>
      <option value="no">не выполненные</option>
    </select>
  </form>
</template>
<script>
export default {
  data() {
    return {
      filterName: "",
      filterChecked: "",
    };
  },
  mounted() {
    if (localStorage.filterName) {
      this.filterName = localStorage.filterName;
    }
    if (localStorage.filterChecked) {
      this.filterChecked = localStorage.filterChecked;
    }
  },
  methods: {
    doFilter() {
      this.$emit("filter", this.filterName, this.filterChecked);
      localStorage.filterName = this.filterName;
      localStorage.filterChecked = this.filterChecked;
    },
    updated() {
      this.doFilter();
    },
  },
};
</script>
<style lang='scss'>
.filter {
  &__block {
    margin: 0 0 10px;
  }

  &__byname {
    widows: 200px;
    height: 20px;
    border: 1px solid black;
    margin: 0 5px 0 0;
    padding: 2px;
  }

  &__bychecked {
    background: rgba(26, 75, 212, 0.092);
  }
}
</style>