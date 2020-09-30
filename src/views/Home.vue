<template>
  <div class="about">
    <h1>This is an about page</h1>
    <van-button type="primary" v-on:click="onGotoPage">{{
      message
    }}</van-button>
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
      message: "Hello in Home",
    };
  },
  methods: {
    onGotoPage() {
      console.log("将要进行页面跳转");
      this.$toast("test");
      let momentId = "123";
      this.$router.push(`./About?momentId=${momentId}`,
      );
    },
  },
};
</script>