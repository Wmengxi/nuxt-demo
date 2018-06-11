<template>
  <div class="home-post-words">
    <div class="post-words-box">
      <div class="post-title">
        <slot name="post-title"></slot>
      </div>
      <div class="post-words">
        <slot name="post-words"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
.home-post-words {
  margin: 30px 0;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  .post-words-box {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    .post-title {
      font-size: 28px;
    }
    .post-words {
      font-size: 14px;
    }
  }
}

</style>
