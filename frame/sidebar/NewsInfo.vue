<template>
  <div class="link-item-box">
    <div class="item-title">
      <span class="icon-insert_drive_file item-icon"></span>
      <span style="margin-left: 10px;">新闻资讯</span>
      <span style="font-size: 16px;">&nbsp;/NEWS</span>
    </div>
    <div class="item-list-box" style="height: 130px">
      <div :class="['news-info-item', currentLink === 'announcement' ? 'selected' : '']" @click="postLink('announcement')">通知公告</div>
      <div class="news-info-divided-line"></div>
      <div :class="['news-info-item', currentLink === 'companyNews' ? 'selected' : '']" @click="postLink('companyNews')">公司新闻</div>
      <div class="news-info-divided-line"></div>
      <div :class="['news-info-item', currentLink === 'tradeInfo' ? 'selected' : '']" @click="postLink('tradeInfo')">行业资讯</div>
      <div class="news-info-divided-line"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentLink: 'announcement'
    }
  },
  methods: {
    postLink (linkName) {
      this.currentLink = linkName
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
    .news-info-item {
      padding: 5px 0 5px 30px;
      width: 100%;
      height: 30%;
      border-radius: 3px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      cursor: pointer;
    }
    .selected {
      background-color: #F1356F;
    }
    .news-info-divided-line {
      width: 100%;
      border: 0.5px solid lightgrey
    }
  }
}

</style>
