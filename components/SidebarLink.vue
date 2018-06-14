<template>
<div>
  <div class="link-item-box" v-if="currentPage === 'aboutus'">
    <div class="item-title">
      <span class="icon-insert_drive_file item-icon"></span>
      <span style="margin-left: 10px;">关于我们</span>
      <span style="font-size: 16px;">&nbsp;/ABOUT US</span>
    </div>
    <div class="item-list-box" style="height: 130px">
      <div :class="['about-us-item', currentLink === 'companyInfo' ? 'selected' : '']" @click="postLink('companyInfo')">公司介绍</div>
      <div class="about-us-divided-line"></div>
      <div :class="['about-us-item', currentLink === 'officeEnvironment' ? 'selected' : '']" @click="postLink('officeEnvironment')">办公环境</div>
      <div class="about-us-divided-line"></div>
      <div :class="['about-us-item', currentLink === 'contactWay' ? 'selected' : '']" @click="postLink('contactWay')">联系方式</div>
      <div class="about-us-divided-line"></div>
    </div>
  </div>
  <div class="link-item-box" v-else-if="currentPage === 'news' || currentPage === 'newsInfo'">
    <div class="item-title">
      <span class="icon-insert_drive_file item-icon"></span>
      <span style="margin-left: 10px;">新闻资讯</span>
      <span style="font-size: 16px;">&nbsp;/NEWS</span>
    </div>
    <div class="item-list-box" style="height: 130px">
      <div :class="['about-us-item', currentLink === 'announcement' ? 'selected' : '']" @click="postLink('announcement')">通知公告</div>
      <div class="about-us-divided-line"></div>
      <div :class="['about-us-item', currentLink === 'companyNews' ? 'selected' : '']" @click="postLink('companyNews')">公司新闻</div>
      <div class="about-us-divided-line"></div>
      <div :class="['about-us-item', currentLink === 'tradeInfo' ? 'selected' : '']" @click="postLink('tradeInfo')">行业资讯</div>
      <div class="about-us-divided-line"></div>
    </div>
  </div>
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
</div>
</template>

<script>
export default {
  data () {
    return {
      currentPage: '',
      currentLink: '',
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
        }],
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
  },
  methods: {
    postLink (linkName) {
      this.currentLink = linkName
    }
  },
  mounted:
    function getPage() {
      this.currentPage = this.$route.name
      if (this.currentPage === 'aboutus') {
        this.currentLink = 'companyInfo'
      } else {
        this.currentLink = 'announcement'
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
    .selected {
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
      .item-icon {
        color: #D76083;
        margin-right: 10px;
      }
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
      .item-label {
        width: 40px;
        box-sizing: border-box;
        text-align: right;
      }
    }
  }
}

</style>
