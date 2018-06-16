<template>
  <div class="partner-content-box">
    <div class="content-link-box">
      <new-news></new-news>
      <contact-us></contact-us>
    </div>
    <div class="content-info-box">
      <div class="inner-item-box">
        <content-nav>
          <span slot="rightTitle">寻找对象</span>
          <span slot="leftFirstTitle">首页></span>
          <span slot="leftSecondTitle">寻找对象></span>
        </content-nav>
        <div class="inner-item-content">
          <div class="search-box">
            <div class="search-input-box">
              <input type="text" class="search-style">
              <div class="search-btn">搜&nbsp;&nbsp;索</div>
            </div>
            <div class="search-word-box">
              <div class="word-label">热门搜索词&nbsp;&nbsp;: </div>
              <span class="word-style">苗条</span>
              <span class="word-style">幽默</span>
              <span class="word-style">清纯</span>
              <span class="word-style">可爱</span>
              <span class="word-style">时尚</span>
              <span class="word-style">睿智</span>
            </div>
          </div>
          <div class="tag-box">
            <div class="hot-tag-box">
              <div class="row-item">
                <div class="row-label">热门标签&nbsp;:</div>
                <div class="row-tags">
                  <div class="tag-item">高级白领</div>
                  <div class="tag-item">教师</div>
                  <div class="tag-item">医务工作者</div>
                  <div class="tag-item">高级白领</div>
                  <div class="tag-item">教师</div>
                  <div class="tag-item">医务工作者</div>
                </div>
              </div>
              <div class="row-item">
                <div class="row-label">您已选择&nbsp;:</div>
                <div class="row-tags">
                  <el-tag v-for="(tag, index) in chosenTagList"
                          :key="index"
                          closable
                          @close="handleClose(tag)">
                    {{tag}}
                  </el-tag>
                </div>
              </div>
            </div>
            <div class="more-tags"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const NewNews = r => require.ensure([], () => r(require('@/frame/sidebar/NewNews')), 'partner')
const ContactUs = r => require.ensure([], () => r(require('@/frame/sidebar/ContactUs')), 'partner')
const ContentNav = r => require.ensure([], () => r(require('@/frame/contentnav/ContentNav')), 'partner')
const PagePagination = r => require.ensure([], () => r(require('@/components/PagePagination')), 'partner')

export default {
  components: {  NewNews, ContactUs, ContentNav, PagePagination },
  data () {
    return {
      chosenTagList: ['女', '杭州湾', '20-28岁', '有照片']
    }
  },
  methods: {
    handleClose (tag) {
      this.chosenTagList.splice(this.chosenTagList.indexOf(tag), 1)
    }
  }
}
</script>

<style lang="less">
.partner-content-box {
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
      .inner-item-content {
        width: 100%;
        height: 500px;
        border: 1px solid black;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        padding: 5px;
        .search-box {
          width: 100%;
          display: flex;
          flex-direction: column;
          margin-bottom: 20px;
          box-sizing: border-box;
          padding: 5px 40px;
          .search-input-box {
            width: 100%;
            height: 40px;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: center;
            .search-style {
              width: 380px;
              height: 30px;
              border: 3px solid #F1356F;
              box-sizing: border-box;
              padding: 0 10px;
              outline: none;
              border-top-left-radius: 3px;
              border-bottom-left-radius: 3px;
            }
            .search-btn {
              width: 90px;
              height: 30px;
              background-color: #F1356F;
              color: white;
              line-height: 30px;
              cursor: pointer;
              border-top-right-radius: 3px;
              border-bottom-right-radius: 3px;
            }
          }
          .search-word-box {
            width: 100%;
            box-sizing: border-box;
            display: flex;
            align-content: center;
            padding: 0 10px;
            .word-label {
              font-size: 14px;
              font-weight: bold;
            }
            .word-style {
              font-size: 14px;
              margin: 0 5px;
            }
          }
        }
        .tag-box {
          width: 100%;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          border: 1px solid lightgrey;
          border-top: none;
          .hot-tag-box {
            width: 100%;
            border-top: 3px solid #F33973;
            background-color: #F2F2F2;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            padding: 5px;
            .row-item {
              width: 100%;
              box-sizing: border-box;
              display: flex;
              align-items: center;
              .row-label {
                width: 70px;
                font-size: 14px;
                font-weight: bold;
              }
              .row-tags {
                display: flex;
                width: 500px;
                box-sizing: border-box;
                flex-wrap: wrap;
                .tag-item {
                  border: 1px solid #F33973;
                  border-radius: 10px;
                  font-size: 14px;
                  margin: 5px;
                  padding: 3px;
                  color: #F33973;
                  background-color: white;
                }
                .el-tag {
                  height: 30px;
                  margin: 5px;
                }
              }

            }
          }
          .more-tags {
            width: 100%;
            height: 120px;
            border-top: 1px solid lightgrey;
            box-sizing: border-box;
          }
        }
      }
    }
  }
}

</style>
