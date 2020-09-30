<template>
  <div class="about">
    <h1>This is an about page</h1>
    <van-button type="primary">{{ message }}</van-button>
  </div>
</template>

<script>
import { Button } from "vant";
export default {
  components: {
    [Button.name]: Button,
  },
  data() {
    return {
      message: "Hello in world",
    };
  },
  beforeCreate() {
    console.log(this.$router);
    this.$toast("test");
  },
  methods: {},
};
</script>