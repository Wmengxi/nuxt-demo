<template>
  <div class="news-content-box">
    <div class="content-link-box">
      <sidebar-link></sidebar-link>
    </div>
    <div class="content-info-box">
      <div class="inner-item-box">
        <div class="inner-item-nav">
          <div class="item-label">
            <span class="icon-navigate_next item-icon"></span>
            <span>通知公告</span>
          </div>
          <div class="item-nav">
            <span>首页</span>>
            <span>新闻资讯</span>>
            <span>通知公告</span></div>
        </div>
        <div class="inner-item-content">
          <div class="news-item-box" v-for="(newsItem, index) in newsList"
               :key="index">
            <div class="item-title-box">
              <div class="title-words">{{newsItem.newsTitle}}</div>
              <div class="title-date">{{newsItem.newsDate}}</div>
            </div>
            <div class="item-content-box">
              <div class="news-pic">
                <img :src=newsItem.newsPic
                     class="img-style">
              </div>
              <div class="news-words-box">
                <div class="news-words">{{newsItem.newsContent}}</div>
                <div class="news-more-btn">
                  <div class="more-btn">了解详情</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="pagination-box">
          <page-pagination></page-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarLink from '@/components/SideBarLink'
import PagePagination from '@/components/PagePagination'

export default {
  components: { SidebarLink, PagePagination },
  data () {
    return {
      newsList: [{
          newsTitle: '我们为什么要办海外婚礼？旅行结婚的奥妙',
          newsDate: '2018-06-14',
          newsPic: 'https://dummyimage.com/230x160/eee/3ff.jpg&text=pic',
          newsContent: '海外婚礼避免了繁冗的婚礼筹备，又开阔了异域视野，正成为年轻人喜结连理的一种新时尚。为什么越来越多的人选择海外婚礼？我们为什么要办海外婚礼？...'
        }, {
          newsTitle: '我们为什么要办海外婚礼？旅行结婚的奥妙',
          newsDate: '2018-06-14',
          newsPic: 'https://dummyimage.com/230x160/eee/3ff.jpg&text=pic',
          newsContent: '海外婚礼避免了繁冗的婚礼筹备，又开阔了异域视野，正成为年轻人喜结连理的一种新时尚。为什么越来越多的人选择海外婚礼？我们为什么要办海外婚礼？...'
        }, {
          newsTitle: '我们为什么要办海外婚礼？旅行结婚的奥妙',
          newsDate: '2018-06-14',
          newsPic: 'https://dummyimage.com/230x160/eee/3ff.jpg&text=pic',
          newsContent: '海外婚礼避免了繁冗的婚礼筹备，又开阔了异域视野，正成为年轻人喜结连理的一种新时尚。为什么越来越多的人选择海外婚礼？我们为什么要办海外婚礼？...'
        }, {
          newsTitle: '我们为什么要办海外婚礼？旅行结婚的奥妙',
          newsDate: '2018-06-14',
          newsPic: 'https://dummyimage.com/230x160/eee/3ff.jpg&text=pic',
          newsContent: '海外婚礼避免了繁冗的婚礼筹备，又开阔了异域视野，正成为年轻人喜结连理的一种新时尚。为什么越来越多的人选择海外婚礼？我们为什么要办海外婚礼？...'
        }, {
          newsTitle: '我们为什么要办海外婚礼？旅行结婚的奥妙',
          newsDate: '2018-06-14',
          newsPic: 'https://dummyimage.com/230x160/eee/3ff.jpg&text=pic',
          newsContent: '海外婚礼避免了繁冗的婚礼筹备，又开阔了异域视野，正成为年轻人喜结连理的一种新时尚。为什么越来越多的人选择海外婚礼？我们为什么要办海外婚礼？...'
        }]
    }
  }

}
</script>

<style lang="less">
.news-content-box {
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
    width: 600px;
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
        box-sizing: border-box;
        padding: 20px 0;
        text-align: left;
        font-size: 14px;
        display: flex;
        flex-direction: column;
        .news-item-box {
          width: 100%;
          height: 220px;
          border: 1px solid grey;
          box-sizing: border-box;
          margin-bottom: 20px;
          padding: 5px 20px;
          display: flex;
          flex-direction: column;
          .item-title-box {
            width: 100%;
            height: 30px;
            box-sizing: border-box;
            margin-bottom: 10px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            .title-words {
              font-weight: bold;
              font-size: 18px;
            }
            .title-date {
              flex: 1;
              text-align: right;
              font-size: 14px;
              color: grey;
            }
          }
          .item-content-box {
            width: 100%;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            .news-pic {
              width: 230px;
              height: 160px;
              box-sizing: border-box;
              margin-right: 5px;
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
            .news-words-box {
              font-size: 14px;
              width: 300px;
              height: 160px;
              box-sizing: border-box;
              display: flex;
              flex-direction: column;
              .news-words {
                width: 100%;
                height: 130px;
                box-sizing: border-box;
                font-size: 14px;
                padding: 5px;
                text-align: left;
              }
              .news-more-btn {
                width: 100%;
                height: 30px;
                box-sizing: border-box;
                display: flex;
                align-items: flex-end;
                justify-content: flex-end;
                .more-btn {
                  width: 80px;
                  height: 25px;
                  line-height: 22px;
                  border: 1px solid #D76083;
                  box-sizing: border-box;
                  text-align: center;
                  cursor: pointer;
                }
              }
            }
          }
        }

      }
      .pagination-box {
        width: 100%;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
      }
    }
  }
}

</style>
