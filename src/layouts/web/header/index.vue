<template>
  <div id="page-header">
    <a-row type="flex" align="middle" justify="start">
      <a-col :span="4">
        <Left />
      </a-col>
      <a-col :span="20">
        <Right />
      </a-col>
    </a-row>
  </div>
</template>

<script>
import Left from "./left/index.vue";
import Right from "./right/index.vue";
export default {
  components: {
    Left,
    Right,
  },
};
</script>