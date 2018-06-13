<template>
  <div class="home-post-pics">
    <div class="pic-content">
      <div class="activity-info-box">
        <div class="info-label">Activity</div>
        <div class="info-title">户外踏青交友联谊</div>
        <div class="info-item">
          <p>活动时间: 2017-09-09 14:00 ~ 2017-09-09 17:00</p>
        </div>
        <div class="info-item">
          <p>活动地点: 成都市青羊区蜀辉路黄苑街563九德会</p>
        </div>
        <div class="info-item" style="margin-bottom: 20px">
          <p>
          活动感想: 世纪佳缘遇见爱，线下活动等你来。这一天又有会员成功牵手了，幸福就是一部的距离，勇敢伸出你的手，或许她(他)会给你一只手！
          </p>
        </div>
        <div class="info-detail-btn">查看更多</div>
      </div>
      <div class="activity-pic-box">
        <img src="https://dummyimage.com/418x246/333/3ff.jpg&text=pic"
             class="img-style">
      </div>
    </div>
 </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
.home-post-pics {
  margin: 30px 0;
  box-sizing: border-box;
  width: 100%;
  height: 300px;
  padding: 20px 180px;
  background-image: url("https://dummyimage.com/1200x300/eee/3ff.jpg&text=pic");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  .pic-content {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    padding: 5px 0;
    .activity-info-box {
      width: 50%;
      height: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 10px 0;
      .info-label {
        font-size: 20px;
        color: grey;
      }
      .info-title {
        font-size: 20px;
        color: #D3016F;
        font-weight: bold;
        margin-bottom: 20px;
      }
      .info-item {
        padding-right: 20px;
        width: 100%;
        box-sizing: border-box;
        font-size: 14px;
        margin-bottom: 3px;
        text-align: left;
      }
      .info-detail-btn {
        width: 110px;
        height: 30px;
        border: 1px solid black;
        box-sizing: border-box;
        background-color:rgba(0,0,0,0.01);
        color: black;
        line-height: 30px;
        cursor: pointer;
      }
    }
    .activity-pic-box {
      width: 50%;
      height: 100%;
      box-sizing: border-box;
      overflow: hidden;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .img-style {
        min-width: 100%;
        min-height: 100%;
      }
    }
  }
}

</style>
