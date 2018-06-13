<template>
  <section class="container">
    <div class="home-header-nav">
      <index-header></index-header>
      <index-navbar></index-navbar>
    </div>
    <home-pic></home-pic>
    <home-login></home-login>
    <home-adwords>
      <div slot="post-title">如果有爱，为什么错过</div>
      <div slot="post-words">立即加入会员，缘分就在眼前</div>
    </home-adwords>
    <home-member-cards></home-member-cards>
    <home-adpics></home-adpics>
    <home-adwords>
      <div slot="post-title">就在你身边，他们相爱啦</div>
      <div slot="post-words">立即加入会员，缘分就在眼前</div>
    </home-adwords>
    <home-love-pics></home-love-pics>
    <home-service></home-service>
    <div class="news-info-container">
      <home-news-info></home-news-info>
      <home-new-member></home-new-member>
    </div>
    <index-company-info></index-company-info>
    <index-bottom></index-bottom>
    <div class="online-service-container">
      <index-online-service></index-online-service>
    </div>
    <!-- <div>
      <div class="links">
        <div class="button--green"
          @click="$router.push('/demo')">demo</div>
      </div>
    </div> -->
  </section>
</template>

<script>
const IndexHeader = r => require.ensure([], () => r(require('@/components/IndexHeader')), 'home')
const IndexNavbar = r => require.ensure([], () => r(require('@/components/IndexNavbar')), 'home')
const HomePic = r => require.ensure([], () => r(require('./components/HomePic')), 'home')
const HomeLogin = r => require.ensure([], () => r(require('./components/HomeLogin')), 'home')
const HomeAdwords = r => require.ensure([], () => r(require('./components/HomeAdwords')), 'home')
const HomeAdpics = r => require.ensure([], () => r(require('./components/HomeAdpics')), 'home')
const HomeMemberCards = r => require.ensure([], () => r(require('./components/HomeMemberCards')), 'home')
const HomeLovePics = r => require.ensure([], () => r(require('./components/HomeLovePics')), 'home')
const HomeService = r => require.ensure([], () => r(require('./components/HomeService')), 'home')
const HomeNewsInfo = r => require.ensure([], () => r(require('./components/HomeNewsInfo')), 'home')
const HomeNewMember = r => require.ensure([], () => r(require('./components/HomeNewMember')), 'home')
const IndexCompanyInfo = r => require.ensure([], () => r(require('@/components/IndexCompanyInfo')), 'home')
const IndexOnlineService = r => require.ensure([], () => r(require('@/components/IndexOnlineService')), 'home')
const IndexBottom = r => require.ensure([], () => r(require('@/components/IndexBottom')), 'home')

export default {
  components: {
    IndexHeader, IndexNavbar, HomePic, HomeLogin,
    HomeAdwords, HomeAdpics, HomeMemberCards,
    HomeLovePics, HomeService, HomeNewsInfo, HomeNewMember,
    IndexCompanyInfo, IndexOnlineService, IndexBottom
  },
  data () {
    return {
    }
  },
  methods: {

  },
  mounted: function () {
  }
}
</script>

<style lang="less">
.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  padding: 0 0 10px 0;
  .home-header-nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 1px;
  }
  .news-info-container {
    margin: 30px 0;
    width: 90%;
    box-sizing: border-box;
    padding: 5px;
    display: flex;
    flex-direction: row;
  }
  .online-service-container {
    z-index: 1;
    position: absolute;
    top: 540px;
    right: 0;
  }
}
</style>
