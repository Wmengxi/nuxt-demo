<template>
  <div class="story-content-box">
    <div class="content-link-box">
      <new-news></new-news>
      <contact-us></contact-us>
    </div>
    <div class="content-info-box">
      <div class="inner-item-box">
        <content-nav>
          <span slot="rightTitle">晒幸福</span>
          <span slot="leftFirstTitle">首页></span>
          <span slot="leftSecondTitle">晒幸福></span>
        </content-nav>
        <div class="inner-item-content">
          <div class="vertical-container">
            <div class="long-card-box" v-for="(story, index) in storyList[0].item"
                  :key="index">
              <div class="card-pic">
                <img :src=story.pic class="img-style">
              </div>
              <div class="card-story-title">{{story.title}}</div>
              <div class="long-story-content">{{story.content}}</div>
            </div>
          </div>
          <div class="vertical-container">
            <div class="short-card-box" v-for="(story, index) in storyList[1].item"
                  :key="index">
              <div class="card-pic">
                <img :src=story.pic class="img-style">
              </div>
              <div class="card-story-title">{{story.title}}</div>
              <div class="short-story-content">{{story.content}}</div>
            </div>
          </div>
          <div class="vertical-container">
            <div class="long-card-box" v-for="(story, index) in storyList[2].item"
                  :key="index">
              <div class="card-pic">
                <img :src=story.pic class="img-style">
              </div>
              <div class="card-story-title">{{story.title}}</div>
              <div class="long-story-content">{{story.content}}</div>
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
const NewNews = r => require.ensure([], () => r(require('@/frame/sidebar/NewNews')), 'story')
const ContactUs = r => require.ensure([], () => r(require('@/frame/sidebar/ContactUs')), 'story')
const ContentNav = r => require.ensure([], () => r(require('@/frame/contentnav/ContentNav')), 'story')
const PagePagination = r => require.ensure([], () => r(require('@/components/PagePagination')), 'story')

export default {
  components: {  NewNews, ContactUs, ContentNav, PagePagination },
  data () {
    return {
      storyList: [
        {
          item: [{
            pic: 'https://dummyimage.com/160x140/eee/3ff.jpg&text=pic',
            title: '长跑爱情',
            content: '在我眼里，她是个小女孩；在中国男人眼里，她是个剩女。在我眼里，她是个小女孩；在中国男人眼里，她是个剩女。在我眼里，她是个小女孩；在中国男人眼里，她是个剩女。在我眼里，她是个小女孩；在中国男人眼里，她是个剩女。'
            }, {
            pic: 'https://dummyimage.com/160x140/eee/3ff.jpg&text=pic',
            title: '长跑爱情',
            content: '在我眼里，她是个小女孩；在中国男人眼里，她是个剩女。在我眼里，她是个小女孩；在中国男人眼里，她是个剩女。在我眼里，她是个小女孩；在中国男人眼里，她是个剩女。在我眼里，她是个小女孩；在中国男人眼里，她是个剩女。'
            }, {
            pic: 'https://dummyimage.com/160x140/eee/3ff.jpg&text=pic',
            title: '长跑爱情',
            content: '在我眼里，她是个小女孩；在中国男人眼里，她是个剩女。在我眼里，她是个小女孩；在中国男人眼里，她是个剩女。在我眼里，她是个小女孩；在中国男人眼里，她是个剩女。在我眼里，她是个小女孩；在中国男人眼里，她是个剩女。'
            }]
        }, {
          item: [{
            pic: 'https://dummyimage.com/160x140/eee/3ff.jpg&text=pic',
            title: '长跑爱情',
            content: '在我眼里，她是个小女孩；在中国男人眼里，她是个剩女。在我眼里，她是个小女孩；在中国男人眼里，她是个剩女。在我眼里，她是个小女孩；在中国男人眼里，她是个剩女。在我眼里，她是个小女孩；在中国男人眼里，她是个剩女。'
            }, {
            pic: 'https://dummyimage.com/160x140/eee/3ff.jpg&text=pic',
            title: '长跑爱情',
            content: '在我眼里，她是个小女孩；在中国男人眼里，她是个剩女。在我眼里，她是个小女孩；在中国男人眼里，她是个剩女。在我眼里，她是个小女孩；在中国男人眼里，她是个剩女。在我眼里，她是个小女孩；在中国男人眼里，她是个剩女。'
            }, {
            pic: 'https://dummyimage.com/160x140/eee/3ff.jpg&text=pic',
            title: '长跑爱情',
            content: '在我眼里，她是个小女孩；在中国男人眼里，她是个剩女。在我眼里，她是个小女孩；在中国男人眼里，她是个剩女。在我眼里，她是个小女孩；在中国男人眼里，她是个剩女。在我眼里，她是个小女孩；在中国男人眼里，她是个剩女。'
            }]
        },{
          item: [{
            pic: 'https://dummyimage.com/160x140/eee/3ff.jpg&text=pic',
            title: '长跑爱情',
            content: '在我眼里，她是个小女孩；在中国男人眼里，她是个剩女。在我眼里，她是个小女孩；在中国男人眼里，她是个剩女。在我眼里，她是个小女孩；在中国男人眼里，她是个剩女。在我眼里，她是个小女孩；在中国男人眼里，她是个剩女。'
            }, {
            pic: 'https://dummyimage.com/160x140/eee/3ff.jpg&text=pic',
            title: '长跑爱情',
            content: '在我眼里，她是个小女孩；在中国男人眼里，她是个剩女。在我眼里，她是个小女孩；在中国男人眼里，她是个剩女。在我眼里，她是个小女孩；在中国男人眼里，她是个剩女。在我眼里，她是个小女孩；在中国男人眼里，她是个剩女。'
            }, {
            pic: 'https://dummyimage.com/160x140/eee/3ff.jpg&text=pic',
            title: '长跑爱情',
            content: '在我眼里，她是个小女孩；在中国男人眼里，她是个剩女。在我眼里，她是个小女孩；在中国男人眼里，她是个剩女。在我眼里，她是个小女孩；在中国男人眼里，她是个剩女。在我眼里，她是个小女孩；在中国男人眼里，她是个剩女。'
            }]
        }]
    }
  }
}
</script>

<style lang="less">
.story-content-box {
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
      .inner-item-content {
        width: 100%;
        box-sizing: border-box;
        display: flex;
        justify-content: space-around;
        padding: 20px 0;
        .vertical-container {
          width: 190px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 20px;
          .long-card-box {
            width: 180px;
            border: 1px solid lightgrey;
            box-sizing: border-box;
            margin-bottom: 10px;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 10px;
            .long-story-content {
              padding: 5px 0;
              width: 100%;
              height: 160px;
              box-sizing: border-box;
              text-align: left;
              font-size: 14px;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 8;
              -webkit-box-orient: vertical;
            }
          }
          .short-card-box {
            width: 180px;
            border: 1px solid lightgrey;
            box-sizing: border-box;
            margin-bottom: 10px;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 10px;
            .short-story-content {
              padding: 5px 0;
              width: 100%;
              height: 120px;
              box-sizing: border-box;
              text-align: left;
              font-size: 14px;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 6;
              -webkit-box-orient: vertical;
            }
          }
          .card-pic {
            width: 160px;
            height: 140px;
            box-sizing: border-box;
            margin-bottom: 10px;
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
          .card-story-title {
            width: 100%;
            height: 30px;
            box-sizing: border-box;
            color: #D76083;
            line-height: 30px;
            text-align: left;
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
