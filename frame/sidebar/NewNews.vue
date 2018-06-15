<template>
  <div class="link-item-box">
    <div class="item-title">
      <span class="icon-language item-icon"></span>
      <span style="margin-left: 10px;">最新资讯</span>
      <span style="font-size: 16px;">&nbsp;/NEWS</span>
    </div>
    <div class="item-list-box">
      <div class="news-item" v-for="(news, index) in newsList"
            :key="index">
        <span class="icon-stop item-icon"></span>
        <span>{{news.content}}</span></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newsList: [{
        content: '教您几点在法国的常用礼仪...'
        }, {
        content: '一个星期不适用聊天软件，我的生活...'
        }, {
        content: '国外的婚礼习俗...'
        }, {
        content: '如何用英语说出最美的情话？...'
        }, {
        content: '嫁给老外是种怎样的体验？4个女人...'
        }]
    }
  }
}
</script>

<style lang="less">
.link-item-box {
  padding: 0 5px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 20px;
  .item-title {
    width: 100%;
    height: 40px;
    border-bottom: 1px solid #D76083;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    color: #D76083;
    font-size: 18px;
    margin-bottom: 8px;
    .item-icon {
      color: #D22F60;
      font-size: 20px;
    }
  }
  .item-list-box {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    .news-item {
      padding: 5px 0;
      width: 100%;
      height: 20%;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      font-size: 14px;
      cursor: pointer;
      .item-icon {
        color: #D76083;
        margin-right: 10px;
      }
    }
  }
}

</style>
