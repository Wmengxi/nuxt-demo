<template>
  <div class="link-item-box">
    <div class="item-title">
      <span class="icon-phone item-icon"></span>
      <span style="margin-left: 10px;">联系我们</span>
      <span style="font-size: 16px;">&nbsp;/CONTACT US</span>
    </div>
    <div class="item-list-box">
      <div class="contact-item" v-for="(contact, index) in contactList"
            :key="index">
        <span class="item-label">{{contact.way}} :</span>
        <span>&nbsp;{{contact.content}}</span>
      </div>
      <div class="contact-item" style="margin-left: 8px">
        {{companyAddr.label}} : {{companyAddr.address}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      contactList: [{
        way: '电话',
        content: '010-87771071 / 4006-010-050'
        }, {
        way: 'Q Q',
        content: '1183776681'
        }, {
        way: '邮箱',
        content: '2850772582@qq.com'
        }, {
        way: '网址',
        content: 'www.iucupid.com'
        }],
      companyAddr: {
        label: '公司地址',
        address: '北京市朝阳区广渠路36号院首城国际B座915室 100022'
       }
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
      .item-label {
        width: 40px;
        box-sizing: border-box;
        text-align: right;
      }
    }
  }
}

</style>
