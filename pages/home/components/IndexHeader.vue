<template>
  <div class="index-header">
    <div class="info-box">
      <div class="logo">
        <img src="https://dummyimage.com/200x70/333/3ff.jpg&text=logo"
             style="width: 100%; height: 100%">
      </div>
      <div class="info">
        <div class="info-row1">
          向会员提供，高品质，高效率
        </div>
        <div class="info-row2">
          高端相亲交友服务平台
        </div>
      </div>
      <div class="tel">
        <span class="icon-phone tel-icon"></span>
        <span class="tel-number">400-0000-0000</span>
        </div>
    </div>
    <div class="nav-box">
      <div class="nav-item">网站首页</div>
      <div class="nav-item">关于我们</div>
      <div class="nav-item">新闻咨询</div>
      <div class="nav-item">服务介绍</div>
      <div class="nav-item">晒幸福</div>
      <div class="nav-item">寻找对象</div>
      <div class="nav-item">我要相亲</div>
      <div class="nav-item">定制服务</div>
      <div class="nav-item">活动互动</div>
      <div class="nav-item">
        <span class="icon-person person-icon"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
@import '../../../layouts/config.less';

.index-header{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 1px;
  .info-box{
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 5px 0;
    margin-bottom: 5px;
    .logo {
      box-sizing: border-box;
      min-width: 200px;
      min-height: 70px;
      margin-right: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .info {
      border-left: 1px solid lightgray;
      box-sizing: border-box;
      min-width: 200px;
      min-height: 50px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-right: 100px;
      .info-row1 {
        font-size: 14px;
        color: gray;
        margin-bottom: 3px;
      }
      .info-row2 {
        color: #FF1493;
        font-size: 18px;
        font-weight: bold;
      }
    }
    .tel {
      min-width: 200px;
      min-height: 70px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 5px;
      .tel-icon {
        font-size: 20px;
        background-color: #FF1493;
        margin-right: 10px;
      }
      .tel-number {
        font-size: 18px;
        color: #FF1493;
      }
    }
  }
  .nav-box{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    background-color: #ff0066;
    width: 100%;
    height: 40px;
    padding: 0;
    .nav-item {
      width: 80px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      font-size: 14px;
      color: white;
      margin-right: 1px;
      cursor: pointer;
      .person-icon {
        font-size: 18px;
        color: white;
        box-sizing: border-box;
      }
    }
    .nav-item:active {
      background: black;
      opacity: 0.3;
    }
  }
}
</style>
