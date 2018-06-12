<template>
  <section class="container">
    <index-header></index-header>
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
    <home-company-info></home-company-info>
    <index-bottom></index-bottom>
    <div class="online-service-container">
      <home-online-service></home-online-service>
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
import IndexHeader from './home/components/IndexHeader'
import HomePic from './home/components/HomePic'
import HomeLogin from './home/components/HomeLogin'
import HomeAdwords from './home/components/HomeAdwords'
import HomeAdpics from './home/components/HomeAdpics'
import HomeMemberCards from './home/components/HomeMemberCards'
import HomeLovePics from './home/components/HomeLovePics'
import HomeService from './home/components/HomeService'
import HomeNewsInfo from './home/components/HomeNewsInfo'
import HomeNewMember from './home/components/HomeNewMember'
import HomeCompanyInfo from './home/components/HomeCompanyInfo'
import HomeOnlineService from './home/components/HomeOnlineService'
import IndexBottom from './home/components/IndexBottom'

export default {
  components: {
    IndexHeader, HomePic, HomeLogin, HomeAdwords,
    HomeAdpics, HomeMemberCards, HomeLovePics,
    HomeService, HomeNewsInfo, HomeNewMember,
    HomeCompanyInfo, HomeOnlineService, IndexBottom
  },
  data () {
    return {
      message: 'hello world'
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
