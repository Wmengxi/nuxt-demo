<template>
  <div class="about-content-box">
    <div class="content-link-box">
      <div class="link-item-box">
        <div class="item-title">
          <span class="icon-wechat"></span>
          <span style="margin-left: 10px;">关于我们</span>
          <span style="font-size: 16px;">&nbsp;/ABOUT US</span>
        </div>
        <div class="item-list-box" style="height: 140px">
          <div class="about-us-item">公司介绍</div>
          <div class="about-us-divided-line"></div>
          <div class="about-us-item">办公环境</div>
          <div class="about-us-divided-line"></div>
          <div class="about-us-item">联系方式</div>
          <div class="about-us-divided-line"></div>
        </div>
      </div>
      <div class="link-item-box">
        <div class="item-title">
          <span class="icon-wechat"></span>
          <span style="margin-left: 10px;">最新资讯</span>
          <span style="font-size: 16px;">&nbsp;/NEWS</span>
        </div>
        <div class="item-list-box" style="height: 160px">
          <div class="news-item">教您几点在法国的常用礼仪...</div>
          <div class="news-item">一个星期不适用聊天软件，我的生活...</div>
          <div class="news-item">国外的婚礼习俗...</div>
          <div class="news-item">如何用英语说出最美的情话？...</div>
          <div class="news-item">嫁给老外是种怎样的体验？4个女人...</div>
        </div>
      </div>
      <div class="link-item-box">
        <div class="item-title">
          <span class="icon-wechat"></span>
          <span style="margin-left: 10px;">联系我们</span>
          <span style="font-size: 16px;">&nbsp;/CONTACT US</span>
        </div>
        <div class="item-list-box" style="height: 180px">
          <div class="contact-item">
            电话: 010-87771071 / 4006-010-050
          </div>
          <div class="contact-item">
            QQ: 1183776681
          </div>
          <div class="contact-item">
            邮箱: 2850772582@qq.com
          </div>
          <div class="contact-item">
            网址: www.iucupid.com
          </div>
          <div class="contact-item" style="height: 40px">
            公司地址: 北京市朝阳区广渠路36号院首城国际B座915室 100022
          </div>
        </div>
      </div>
    </div>
    <div class="content-info-box"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
.about-content-box {
  width: 80%;
  height: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  padding: 10px;
  .content-link-box {
    width: 280px;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .link-item-box {
      padding: 0 5px;
      width: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .item-title {
        width: 100%;
        height: 40px;
        border-bottom: 1px solid #D76083;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        color: #D76083;
        font-size: 18px;
      }
      .item-list-box {
        width: 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        .about-us-item {
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
        .about-us-item:hover {
          background-color: #F1356F;
        }
        .about-us-divided-line {
          width: 100%;
          border: 0.5px solid lightgrey
        }
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
        }
        .contact-item {
          padding: 5px 0 5px 0;
          width: 100%;
          height: 20%;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          font-size: 14px;
          text-align: left;
        }
      }
    }
  }
  .content-info-box {
    width: 600px;
    height: 100%;
    border: 1px solid green;
    box-sizing: border-box;
  }
}

</style>
