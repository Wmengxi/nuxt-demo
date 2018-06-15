<template>
  <div class="_news-content-box">
    <div class="_content-link-box">
      <news-info></news-info>
      <new-news></new-news>
      <contact-us></contact-us>
    </div>
    <div class="_content-info-box">
      <div class="_inner-item-box">
        <content-nav>
          <span slot="rightTitle">通知公告</span>
          <span slot="leftFirstTitle">首页></span>
          <span slot="leftSecondTitle">新闻资讯></span>
          <span slot="leftThirdTitle">通知公告</span>
        </content-nav>
        <div class="_inner-item-content">
          <div class="_inner-news-title-box">
            <div class="_news-title">
              我们为什么要办海外婚礼？旅行婚礼的奥妙
            </div>
            <div class="_news-date">
              发布时间 : 2018-06-14
            </div>
          </div>
          <div class="_inner-news-content-box">
            越来越多的人
          </div>
          <div class="_inner-news-prev-next">
            <div class="_news-prev">
              <div class="prev-link">上一篇 : </div>
              <div class="prev-label">今年最流行婚礼，看完好想结婚！</div>
            </div>
            <div class="_news-next">
              <div class="next-link">下一篇 : </div>
              <div class="next-label">婚嫁习俗--关于入赘</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const NewsInfo = r => require.ensure([], () => r(require('@/frame/sidebar/NewsInfo')), 'news')
const NewNews = r => require.ensure([], () => r(require('@/frame/sidebar/NewNews')), 'news')
const ContactUs = r => require.ensure([], () => r(require('@/frame/sidebar/ContactUs')), 'news')
const ContentNav = r => require.ensure([], () => r(require('@/frame/contentnav/ContentNav')), 'news')

export default {
  components: { NewsInfo, NewNews, ContactUs, ContentNav },
  data () {
    return {
      newsId: ''
    }
  },
  mounted:
  function getNewsId () {
    this.newsId = this.$route.params.id
  }

}
</script>

<style lang="less">
._news-content-box {
  width: 80%;
  height: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  padding: 10px;
  ._content-link-box {
    width: 280px;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 10px 0 0 0;
  }
  ._content-info-box {
    width: 600px;
    height: 100%;
    box-sizing: border-box;
    padding: 5px;
    ._inner-item-box {
      padding: 5px;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      ._inner-item-content {
        margin-top: 20px;
        width: 100%;
        border: 1px solid grey;
        box-sizing: border-box;
        padding: 10px 20px;
        ._inner-news-title-box {
          margin-bottom: 10px;
          width: 100%;
          border-bottom: 1px solid grey;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          padding: 0 0 10px 0;
          ._news-title {
            width: 100%;
            height: 50px;
            box-sizing: border-box;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            font-size: 18px;
            font-weight: bold;
          }
          ._news-date {
            width: 100%;
            height: 30px;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            color: grey;
          }
        }
        ._inner-news-content-box {
          width: 100%;
          height: 600px;
          border-bottom: 1px dotted grey;
          box-sizing: border-box;
          padding: 20px 10px;
          font-size: 14px;
          text-align: left;
          margin-bottom: 20px;
        }
        ._inner-news-prev-next {
          width: 100%;
          box-sizing: border-box;
          display: flex;
          justify-content: center;
          padding: 5px 0;
          margin-bottom: 10px;
          ._news-prev {
            width: 50%;
            height: 100%;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            .prev-link {
              font-size: 12px;
              color: grey;
              width: 45px;
              cursor: pointer;
              margin-right: 3px;
            }
            .prev-label {
              color: black;
              font-size: 12px;
              text-align: left;
            }
          }
          ._news-next {
            width: 50%;
            height: 100%;
            box-sizing: border-box;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            .next-link {
              font-size: 12px;
              color: grey;
              width: 45px;
              cursor: pointer;
              margin-right: 3px;
            }
            .next-label {
              color: black;
              font-size: 12px;
            }
          }
        }
      }
    }
  }
}

</style>
