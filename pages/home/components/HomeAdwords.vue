<template>
  <div class="home-ad-words">
    <div class="ad-words-box">
      <div class="ad-title">
        <slot name="ad-title"></slot>
      </div>
      <div class="ad-words">
        <slot name="ad-words"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
.home-ad-words {
  margin: 30px 0;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  .ad-words-box {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    .ad-title {
      font-size: 28px;
    }
    .ad-words {
      font-size: 14px;
    }
  }
}

</style>
