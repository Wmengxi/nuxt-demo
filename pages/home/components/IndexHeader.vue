<template>
  <div class="index-header">
    <div class="info-box">
      <div class="logo">logo</div>
      <div class="info">info</div>
      <div class="tel">400-0000-0000</div>
    </div>
    <div class="nav-box">
      <div class="nav-item">首页</div>
      <div class="nav-item">首页</div>
      <div class="nav-item">首页</div>
      <div class="nav-item">首页</div>
      <div class="nav-item">首页</div>
      <div class="nav-item">首页</div>
      <div class="nav-item">首页</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
@import '../../../layouts/config.less';

.index-header{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  .info-box{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: @MaxWidth;
  }
  .nav-box{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: @MaxWidth;
  }
}
</style>
