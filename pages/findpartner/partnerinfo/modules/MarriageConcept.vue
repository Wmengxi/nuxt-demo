<template>
  <div class="_box-container">
    <div class="_box-title">
      <span class="icon-radio_button_unchecked icon-style"></span>
      <span>婚姻观念</span>
    </div>
    <div class="_marriage-item-label">关于自己</div>
    <div class="_box-content">
      <div class="_content-item-row">
        <div class="_item-column">
          <span>籍&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;贯&nbsp;:&nbsp;</span>
          <span>湖北武汉</span>
        </div>
        <div class="_item-column">
          <span>户&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;口&nbsp;:&nbsp;</span>
          <span>湖北武汉</span>
        </div>
      </div>
      <div class="_content-item-row">
        <div class="_item-column">
          <span>国&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;籍&nbsp;:&nbsp;</span>
          <span>中国大陆</span>
        </div>
        <div class="_item-column">
          <span>个性特征&nbsp;:&nbsp;</span>
          <span>---</span>
        </div>
      </div>
      <div class="_content-item-row">
        <div class="_item-column">
          <span>幽&nbsp;&nbsp;默&nbsp;感&nbsp;:&nbsp;</span>
          <span>---</span>
        </div>
        <div class="_item-column">
          <span>脾&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;气&nbsp;:&nbsp;</span>
          <span>---</span>
        </div>
      </div>
      <div class="_content-item-row">
        <div class="_item-column">
          <span>对待感情&nbsp;:&nbsp;</span>
          <span>---</span>
        </div>
        <div class="_item-column">
          <span>是否要小孩&nbsp;:&nbsp;</span>
          <span>想要小孩</span>
        </div>
      </div>
      <div class="_content-item-row">
        <div class="_item-column">
          <span>何时结婚&nbsp;:&nbsp;</span>
          <span>---</span>
        </div>
        <div class="_item-column">
          <span>是否能接受异地恋&nbsp;:&nbsp;</span>
          <span>---</span>
        </div>
      </div>
      <div class="_content-item-row">
        <div class="_item-column">
          <span>理想婚姻&nbsp;:&nbsp;</span>
          <span>---</span>
        </div>
      </div>
    </div>
    <div class="_marriage-item-label" style="margin-top: 20px">关于家庭</div>
    <div class="_box-content">
      <div class="_content-item-row">
        <div class="_item-column">
          <span>愿与对方父母同住&nbsp;:&nbsp;</span>
          <span>不愿意</span>
        </div>
        <div class="_item-column">
          <span>家中排行&nbsp;:&nbsp;</span>
          <span>老幺</span>
        </div>
      </div>
      <div class="_content-item-row">
        <div class="_item-column">
          <span>父母情况&nbsp;:&nbsp;</span>
          <span>---</span>
        </div>
        <div class="_item-column">
          <span>兄弟姐妹&nbsp;:&nbsp;</span>
          <span>---</span>
        </div>
      </div>
      <div class="_content-item-row">
        <div class="_item-column">
          <span>父母经济情况&nbsp;:&nbsp;</span>
          <span>---</span>
        </div>
        <div class="_item-column">
          <span>父母医保情况&nbsp;:&nbsp;</span>
          <span>---</span>
        </div>
      </div>
      <div class="_content-item-row">
        <div class="_item-column">
          <span>父母的工作&nbsp;:&nbsp;</span>
          <span>---</span>
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
