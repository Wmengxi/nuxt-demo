<template>
 <div class="home-company-info">
   <div class="company-info-box">
     <div class="contact-info-box">
       <div class="info-label">联系方式</div>
       <div class="contact-info">
         <div class="contact-item">
           <div class="contact-label">热线 :</div>
           <div class="contact-content">4006-0000-0000</div></div>
         <div class="contact-item">
           <div class="contact-label">Q Q :</div>
           <div class="contact-content">945195459</div></div>
         <div class="contact-item">
           <div class="contact-label">邮箱 :</div>
           <div class="contact-content">945195459@qq.com</div></div>
         <div class="contact-item">
           <div class="contact-label">地址 :</div>
           <div class="contact-content">浙江省宁波市慈溪市古塘街道科技路18号</div></div>
       </div>
     </div>
     <div class="about-us-box">
       <div class="info-label">关于我们</div>
       <div class="about-us">
         <div class="about-item">公司介绍</div>
         <div class="about-item">办公环境</div>
         <div class="about-item">联系方式</div>
       </div>
     </div>
     <div class="attention-us-box">
       <div class="info-label">关注我们</div>
       <div class="attention-us">
         <div class="attention-item">
           <div class="item-qrcode">
             <img src="https://dummyimage.com/100x100/333/3ff.jpg&text=pic"
                  class="img-style">
           </div>
           <div class="item-label">微信公众号</div>
         </div>
         <div class="attention-item">
           <div class="item-qrcode">
             <img src="https://dummyimage.com/100x100/333/3ff.jpg&text=pic"
                  class="img-style">
           </div>
           <div class="item-label">官方微博</div>
         </div>
         <div class="attention-item">
           <div class="item-qrcode">
             <img src="https://dummyimage.com/100x100/333/3ff.jpg&text=pic"
                  class="img-style">
           </div>
           <div class="item-label">官网手机版</div>
         </div>
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
.home-company-info {
  width: 100%;
  height: 220px;
  border-top: 2px solid #FF1493;
  box-sizing: border-box;
  padding: 10px 0 0 5px;
  background-color: #F5F5F5;
  .company-info-box {
    padding: 20px 0 0 0;
    margin: auto;
    width: 90%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    .info-label {
      text-align: left;
      border-left: 2px solid #FF1493;
      box-sizing: border-box;
      margin-bottom: 20px;
      padding: 0 0 0 5px;
    }
    .contact-info-box {
      box-sizing: border-box;
      width: 340px;
      height: 100%;
      display: flex;
      flex-direction: column;
      .contact-info {
        padding: 0 0 0 5px;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        .contact-item {
          font-size: 14px;
          margin-bottom: 5px;
          display: flex;
          .contact-label {
            margin-right: 8px;
            width: 40px;
            text-align: right;
          }
          .contact-content {
            width: 280px;
            text-align: left;
          }
        }
      }
    }
    .about-us-box {
      box-sizing: border-box;
      width: 100px;
      height: 100%;
      display: flex;
      flex-direction: column;
      .about-us {
        padding: 0 0 0 5px;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        .about-item {
          font-size: 14px;
          margin-bottom: 10px;
          cursor: pointer;
        }
      }
    }
    .attention-us-box {
      box-sizing: border-box;
      width: 400px;
      height: 100%;
      display: flex;
      flex-direction: column;
      .attention-us {
        padding: 0 0 0 5px;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .attention-item {
          box-sizing: border-box;
          width: 100px;
          height: 100%;
          display: flex;
          flex-direction: column;
          .item-qrcode {
            width: 100px;
            height: 100px;
            box-sizing: border-box;
            margin-bottom: 5px;
            overflow: hidden;
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            .img-style {
              max-width: 100%;
              max-height: 100%;
            }
          }
          .item-label {
            width: 100%;
            height: 20px;
            box-sizing: border-box;
            font-size: 14px;
          }
        }
      }
    }
  }
}

</style>
