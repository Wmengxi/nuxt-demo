<template>
  <div class="_box-container">
    <div class="_box-title">
      <span class="icon-radio_button_unchecked icon-style"></span>
      <span>生活方式</span>
    </div>
    <div class="_box-content">
      <div class="_content-item-row">
        <div class="_item-column">
          <span>吸&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;烟&nbsp;:&nbsp;</span>
          <span>不吸，但反感</span>
        </div>
        <div class="_item-column">
          <span>饮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;酒&nbsp;:&nbsp;</span>
          <span>有兴致时喝</span>
        </div>
      </div>
      <div class="_content-item-row">
        <div class="_item-column">
          <span>锻炼习惯&nbsp;:&nbsp;</span>
          <span>集中时间锻炼</span>
        </div>
        <div class="_item-column">
          <span>饮食习惯&nbsp;:&nbsp;</span>
          <span>---</span>
        </div>
      </div>
      <div class="_content-item-row">
        <div class="_item-column">
          <span>逛街购物&nbsp;:&nbsp;</span>
          <span>---</span>
        </div>
        <div class="_item-column">
          <span>宗教信仰&nbsp;:&nbsp;</span>
          <span>无宗教信仰</span>
        </div>
      </div>
      <div class="_content-item-row">
        <div class="_item-column">
          <span>作息时间&nbsp;:&nbsp;</span>
          <span>偶尔懒散一下</span>
        </div>
        <div class="_item-column">
          <span>交际圈子&nbsp;:&nbsp;</span>
          <span>---</span>
        </div>
      </div>
      <div class="_content-item-row">
        <div class="_item-column">
          <span>最大消费&nbsp;:&nbsp;</span>
          <span>购置服装</span>
        </div>
        <div class="_item-column">
          <span>家&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;务&nbsp;:&nbsp;</span>
          <span>会一些</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
._box-title {
  width: 150px;
  height: 30px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  .icon-style {
    color: #F1356F;
    font-weight: bold;
    margin-right: 10px;
  }
}
._box-container {
  width: 100%;
  border: 1px solid lightgrey;
  box-sizing: border-box;
  margin-bottom: 20px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  ._marriage-item-label {
    width: 100%;
    height: 25px;
    background-color: lightgrey;
    box-sizing: border-box;
    color: #F1356F;
    padding: 0 0 0 25px;
    line-height: 25px;
    text-align: left;
    font-size: 14px;
    font-weight: bold;
    margin: 10px 0;
  }
  ._box-content {
    width: 100%;
    box-sizing: border-box;
    font-size: 14px;
    padding: 5px 5px 5px 25px;
    text-align: left;
    ._content-item-row {
      width: 100%;
      height: 20px;
      box-sizing: border-box;
      font-size: 14px;
      margin-bottom: 5px;
      display: flex;
      ._item-column {
        display: flex;
        align-items: center;
        width: 50%;
      }
    }
  }
}
</style>
