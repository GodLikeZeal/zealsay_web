<template>
  <v-row cols="12">
    <v-col class="justify-center">
      <img src="../assets/gif/NotFound.gif" alt="NotFound" />
      <div class="text-center">
        <h1>500</h1>
        <h2 class="my-3 headline ">
          抱歉, 服务器开小差了,稍后再试试哦!
        </h2>
        <div>
          <button
            type="button"
            class="v-btn theme--light primary"
            @click="goHome"
          >
            <div class="v-btn__content">返回首页</div>
          </button>
        </div>
      </div>
    </v-col>
  </v-row>
</template>
<script>
export default {
  props: {
    error: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  methods: {
    goHome() {
      this.$router.push({ path: "/" });
    },
    goLogin() {
      this.$router.push({ path: "/login" });
    }
  }
};
</script>
<style scoped lang="css">
h1 {
  font-size: 150px !important;
  line-height: 150px !important;
  font-weight: 700;
  color: #252932;
  text-shadow: rgba(61, 61, 61, 0.3) 1px 1px, rgba(61, 61, 61, 0.2) 2px 2px,
    rgba(61, 61, 61, 0.3) 3px 3px;
}

.application {
  background: none !important;
}
</style>
