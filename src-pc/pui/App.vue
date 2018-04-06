<template>
  <div id="app">
    <div class="g-header">
      <div class="con">
        <span class="logo">PUI</span>
      </div>
    </div>
    <div class="g-body">
      <transition name="fade" appear>
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<style scoped lang="scss">
.fade-enter-active {
  transition: opacity 0.3s;
}
.fade-enter {
  opacity: 0;
}
.g-header {
  height: 50px;
  background-color: #fff;
  .con {
    width: 960px;
    margin: 0 auto;
    height: 50px;
    line-height: 50px;
    .logo {
      font-size: 30px;
      font-weight: bold;
      color: #457ed8;
    }
  }
}
.g-body {
  width: 960px;
  margin: 0 auto;
  margin-top: 20px;
}
</style>

<script>
export default {
  data() {
    return {
      checked: true
    };
  }
};
</script>