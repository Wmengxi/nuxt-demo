<template>
  <div class="about-content-box">
    <div class="content-link-box">
      <sidebar-link></sidebar-link>
    </div>
    <div class="content-info-box">
      <div class="inner-item-box">
        <div class="inner-item-nav">
          <div class="item-label">
            <span class="icon-navigate_next item-icon"></span>
            <span>公司介绍</span>
          </div>
          <div class="item-nav">
            <span>首页</span>>
            <span>关于我们</span>>
            <span>公司介绍</span></div>
        </div>
        <div class="inner-item-content">
          {{contentInfo}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarLink from '@/components/SideBarLink'
export default {
  components: { SidebarLink },
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
