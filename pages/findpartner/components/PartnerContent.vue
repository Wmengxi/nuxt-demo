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
          <search-box></search-box>
          <tag-box></tag-box>
          <member-info></member-info>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const NewNews = r => require.ensure([], () => r(require('@/frame/sidebar/NewNews')), 'partner')
const ContactUs = r => require.ensure([], () => r(require('@/frame/sidebar/ContactUs')), 'partner')
const ContentNav = r => require.ensure([], () => r(require('@/frame/contentnav/ContentNav')), 'partner')
const SearchBox = r => require.ensure([], () => r(require('./modules/SearchBox')), 'partner')
const TagBox = r => require.ensure([], () => r(require('./modules/TagBox')), 'partner')
const MemberInfo = r => require.ensure([], () => r(require('./modules/MemberInfo')), 'partner')

export default {
  components: {  NewNews, ContactUs, ContentNav, SearchBox, TagBox, MemberInfo }

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
        flex-direction: column;
        padding: 5px;

      }
    }
  }
}

</style>
