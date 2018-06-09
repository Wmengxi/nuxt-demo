<template>
  <div class="home-service">
    <div class="service-content">
      <div class="content-words">
        <div class="big-words">定制服务，为爱保驾护航</div>
        <div class="small-words">专业红娘团，优质一对一服务</div>
      </div>
      <div class="content-chart">
        <div class="chart-item">
          <div class="icon-bg">
            <span class="icon-mode_edit icon-style"></span>
          </div>
          <div class="icon-label">在线免费注册</div>
        </div>
        <div class="chart-item">
          <span class="icon-forward icon-arrow-style"></span>
        </div>
        <div class="chart-item">
          <div class="icon-bg">
            <span class="icon-assignment_ind icon-style"></span>
          </div>
          <div class="icon-label">线下实名签约</div>
        </div>
        <div class="chart-item">
          <span class="icon-forward icon-arrow-style"></span>
        </div>
        <div class="chart-item">
          <div class="icon-bg">
            <span class="icon-search icon-style"></span>
          </div>
          <div class="icon-label">人工匹配筛选</div>
        </div>
        <div class="chart-item">
          <span class="icon-forward icon-arrow-style"></span>
        </div>
        <div class="chart-item">
          <div class="icon-bg">
            <span class="icon-my_location icon-style"></span>
          </div>
          <div class="icon-label">全程跟踪服务</div>
        </div>
        <div class="chart-item">
          <span class="icon-forward icon-arrow-style"></span>
        </div>
        <div class="chart-item">
          <div class="icon-bg">
            <span class="icon-people icon-style"></span>
          </div>
          <div class="icon-label">会员一对一约见</div>
        </div>
        <div class="chart-item">
          <span class="icon-forward icon-arrow-style"></span>
        </div>
        <div class="chart-item">
          <div class="icon-bg">
            <span class="icon-wc icon-style"></span>
          </div>
          <div class="icon-label">会员喜结佳缘</div>
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
.home-service {
  margin: 30px 0;
  width: 100%;
  height: 320px;
  box-sizing: border-box;
  background: url("https://dummyimage.com/1200x320/eee/3ff.jpg&text=pic");
  padding: 20px 180px;
  .service-content {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 10px;
    .content-words {
      box-sizing: border-box;
      width: 100%;
      display: flex;
      flex-direction: column;
      padding: 8px;
      margin-bottom: 10px;
      .big-words {
        font-size: 24px;
        margin-bottom: 5px;
      }
      .small-words {
        font-size: 14px;
      }
    }
    .content-chart {
      width: 100%;
      box-sizing: border-box;
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-around;
      .chart-item {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0 5px;
        .icon-bg {
          width: 55px;
          height: 55px;
          border-radius: 50%;
          background-color: #FF1493;
          margin-bottom: 10px;
          .icon-style {
            font-size: 28px;
            color: white;
            line-height: 55px;
          }
        }
        .icon-label {
          font-size: 12px;
        }
        .icon-arrow-style {
          font-size: 40px;
          color: red;
        }
      }
    }
  }
}

</style>
