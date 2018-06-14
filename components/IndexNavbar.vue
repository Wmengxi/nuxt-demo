<template>
  <div class="nav-box">
    <div :class="['nav-item', isCurrent('home') ? 'selected' : '']" @click="navTo('home')">网站首页</div>
    <div :class="['nav-item', isCurrent('aboutus') ? 'selected' : '']" @click="navTo('aboutus')">关于我们</div>
    <div :class="['nav-item', isCurrent('news') ? 'selected' : '']" @click="navTo('news')">新闻资讯</div>
    <div class="nav-item">服务介绍</div>
    <div class="nav-item">晒幸福</div>
    <div class="nav-item">寻找对象</div>
    <div class="nav-item">我要相亲</div>
    <div class="nav-item">定制服务</div>
    <div class="nav-item">活动互动</div>
    <div class="nav-item">
      <span class="icon-person person-icon"></span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    navTo (destName) {
      this.$router.push({name: destName})
    },
    isCurrent(pageName) {
      let currentPage = this.$route.name
      return currentPage === pageName ? true : false
    }
  }

}
</script>

<style lang="less">
.nav-box{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  background-color: #F1356F;
  width: 100%;
  height: 40px;
  padding: 0;
  .nav-item {
    width: 80px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    font-size: 14px;
    color: white;
    margin-right: 1px;
    cursor: pointer;
    .person-icon {
      font-size: 18px;
      color: white;
      box-sizing: border-box;
    }
  }
  .nav-item:active {
    background-color: #c20450;
  }
  .nav-item:hover {
    background-color: #c20450;
  }
  .selected {
    background-color: #c20450;
  }
}

</style>
