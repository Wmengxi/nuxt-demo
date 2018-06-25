<template>
  <div class="_box-container">
    <div class="_box-title">
      <span class="icon-radio_button_unchecked icon-style"></span>
      <span>择偶要求</span>
    </div>
    <div class="_box-content">
      <div class="_content-item-row">
        <div class="_item-column">
          <span>所在地区&nbsp;:&nbsp;</span>
          <span>浙江宁波</span>
        </div>
        <div class="_item-column">
          <span>身高范围&nbsp;:&nbsp;</span>
          <span>158厘米~164厘米</span>
        </div>
      </div>
      <div class="_content-item-row">
        <div class="_item-column">
          <span>婚&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;史&nbsp;:&nbsp;</span>
          <span>不限</span>
        </div>
        <div class="_item-column">
          <span>民&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;族&nbsp;:&nbsp;</span>
          <span>不限</span>
        </div>
      </div>
      <div class="_content-item-row">
        <div class="_item-column">
          <span>学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;历&nbsp;:&nbsp;</span>
          <span>不限</span>
        </div>
        <div class="_item-column">
          <span>有无照片&nbsp;:&nbsp;</span>
          <span>有</span>
        </div>
      </div>
      <div class="_content-item-row">
        <div class="_item-column">
          <span>年龄范围&nbsp;:&nbsp;</span>
          <span>26岁~32岁</span>
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
