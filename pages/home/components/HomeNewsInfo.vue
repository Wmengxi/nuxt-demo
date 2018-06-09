<template>
 <div class="home-news-info">
   <div class="news-info-header">
     <div class="news-info-label">新闻资讯</div>
     <div class="news-info-tab">
      <div class="company-news">公司新闻</div>
      <div class="trade-info">行业资讯</div>
     </div>
   </div>
   <div class="news-info-content"></div>
 </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
.home-news-info {
  width: 55%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-right: 20px;
  .news-info-header {
    margin-top: 6px;
    width: 100%;
    display: flex;
    align-items: flex-end;
    .news-info-label {
      padding: 5px 0;
      border-bottom: 1px solid #FF1493;
      font-size: 18px;
      font-weight: bold;
      box-sizing: border-box;
      margin-right: 80px;
    }
    .news-info-tab {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      .company-news {
        padding: 5px 0;
        font-size: 16px;
        border-bottom: 1px solid #FF1493;
        color: #FF1493;
        margin-right: 50px;
        cursor: pointer;
      }
      .trade-info {
        padding: 5px 0;
        font-size: 16px;
        cursor: pointer;
      }
    }
  }
  .news-info-content {
    padding: 15px 0 5px 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid lightgrey;
  }
}

</style>
