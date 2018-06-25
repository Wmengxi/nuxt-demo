<template>
  <div class="about-content-box">
    <div class="content-link-box">
      <about-us></about-us>
      <new-news></new-news>
      <contact-us></contact-us>
    </div>
    <div class="content-info-box">
      <div class="inner-item-box">
        <content-nav>
          <span slot="rightTitle">公司介绍</span>
          <span slot="leftFirstTitle">首页></span>
          <span slot="leftSecondTitle">关于我们></span>
          <span slot="leftThirdTitle">公司介绍</span>
        </content-nav>
        <div class="inner-item-content">
          {{contentInfo}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>

const AboutUs = r => require.ensure([], () => r(require('@/frame/sidebar/AboutUs')), 'aboutus')
const NewNews = r => require.ensure([], () => r(require('@/frame/sidebar/NewNews')), 'aboutus')
const ContactUs = r => require.ensure([], () => r(require('@/frame/sidebar/ContactUs')), 'aboutus')
const ContentNav = r => require.ensure([], () => r(require('@/frame/contentnav/ContentNav')), 'aboutus')

export default {
  components: { AboutUs, NewNews, ContactUs, ContentNav },
  data () {
    return {
      contentInfo: '相亲相爱网是一个严肃认真的婚恋相亲网站，为具有中华人民共和国国籍的单身成年人士提供婚恋服务'
    }
  }

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
    padding: 10px 0 0 0;
  }
  .content-info-box {
    width: 650px;
    height: 100%;
    box-sizing: border-box;
    padding: 5px;
    .inner-item-box {
      padding: 5px;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      .inner-item-nav {
        width: 100%;
        height: 40px;
        border-bottom: 1px solid #D76083;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        font-size: 18px;
        margin-bottom: 8px;
        .item-label {
          display: flex;
          align-items: center;
          font-weight: bold;
          .item-icon {
            color: #D76083;
            font-size: 24px;
          }
        }
        .item-nav {
          flex: 1;
          display: flex;
          justify-content: flex-end;
          font-size: 14px;
        }
      }
      .inner-item-content {
        width: 100%;
        height: 580px;
        box-sizing: border-box;
        padding: 40px 5px 10px 5px;
        text-align: left;
        font-size: 14px;
      }
    }
  }
}

</style>
