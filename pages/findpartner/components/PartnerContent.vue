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
          <div class="self-info-box">
            <div class="self-big-pic"></div>
            <div class="self-content-box">
              <div class="self-name-row">
                <div class="self-name">老爷</div>
                <div class="focus-btn-box">
                  <div class="btn">关 注</div>
                </div>
              </div>
              <div class="self-age-row">
                <span>31岁 ,</span>
                <span>男 ,</span>
                <span>宁波杭州湾</span>
              </div>
              <div class="self-detail-info">
                <div class="detail-item"></div>
                <div class="detail-item"></div>
                <div class="detail-item"></div>
                <div class="detail-item"></div>
                <div class="detail-item"></div>
              </div>
              <div class="self-slide-pic"></div>
            </div>
          </div>
          <div class="inner-monologue-box">内心独白</div>
          <div class="mate-requirements-box">择偶要求</div>
          <div class="lifestyle-box">生活方式</div>
          <div class="economic-strength-box">经济实力</div>
          <div class="work-study-box">工作学习</div>
          <div class="marriage-concept-box">婚姻观念</div>
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
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        padding: 20px 5px;
        .self-info-box {
          width: 100%;
          box-sizing: border-box;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          .self-big-pic {
            width: 200px;
            height: 370px;
            border: 1px solid black;
            box-sizing: border-box;
            align-self: flex-end;
            margin-right: 10px;
            margin-bottom: 5px;
          }
          .self-content-box {
            padding: 5px;
            width: 360px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            .self-name-row {
              width: 100%;
              height: 30px;
              box-sizing: border-box;
              display: flex;
              align-items: center;
              margin-bottom: 5px;
              .self-name {
                width: 90px;
                font-weight: bold;
                text-align: left;
              }
              .focus-btn-box {
                flex: 1;
                box-sizing: border-box;
                display: flex;
                justify-content: flex-end;
                .btn {
                  width: 80px;
                  height: 30px;
                  background-color: #F1356F;
                  box-sizing: border-box;
                  border-radius: 3px;
                  color: white;
                  line-height: 30px;
                  cursor: pointer;
                }
              }
            }
            .self-age-row {
              width: 100%;
              height: 30px;
              box-sizing: border-box;
              display: flex;
              align-items: center;
              margin-bottom: 10px;
            }
            .self-detail-info {
              width: 100%;
              box-sizing: border-box;
              margin-bottom: 10px;
              .detail-item {
                width: 100%;
                height: 30px;
                border: 1px solid red;
                box-sizing: border-box;
                font-size: 14px;
                margin-bottom: 5px;
                display: flex;
              }
            }
            .self-slide-pic {
              width: 100%;
              height: 120px;
              border: 1px solid black;
              box-sizing: border-box;
            }
          }
        }
        .inner-monologue-box {
          width: 100%;
          height: 120px;
          border: 1px solid lightgrey;
          box-sizing: border-box;
          margin-bottom: 20px;
        }
        .mate-requirements-box {
          width: 100%;
          height: 180px;
          border: 1px solid lightgrey;
          box-sizing: border-box;
          margin-bottom: 20px;
        }
        .lifestyle-box {
          width: 100%;
          height: 180px;
          border: 1px solid lightgrey;
          box-sizing: border-box;
          margin-bottom: 20px;
        }
        .economic-strength-box {
          width: 100%;
          height: 160px;
          border: 1px solid lightgrey;
          box-sizing: border-box;
          margin-bottom: 20px;
        }
        .work-study-box {
          width: 100%;
          height: 170px;
          border: 1px solid lightgrey;
          box-sizing: border-box;
          margin-bottom: 20px;
        }
        .marriage-concept-box {
          width: 100%;
          height: 320px;
          border: 1px solid lightgrey;
          box-sizing: border-box;
          margin-bottom: 20px;
        }
      }
    }
  }
}

</style>
