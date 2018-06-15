<template>
  <div class="inner-item-nav">
    <div class="item-label">
      <span class="icon-navigate_next item-icon"></span>
      <slot name="rightTitle"></slot>
    </div>
    <div class="item-nav">
      <slot name="leftFirstTitle"></slot>
      <slot name="leftSecondTitle"></slot>
      <slot name="leftThirdTitle"></slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
.inner-item-nav {
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #D76083;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  font-size: 18px;
  margin-bottom: 8px;
  .item-label {
    display: flex;
    align-items: center;
    font-weight: bold;
    .item-icon {
      color: #D76083;
      font-size: 24px;
    }
  }
  .item-nav {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    font-size: 14px;
  }
}

</style>
