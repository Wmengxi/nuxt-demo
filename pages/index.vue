<template>
  <section class="container">
    <index-header></index-header>
    <home-pic></home-pic>
    <home-login></home-login>
    <home-adwords>
      <div slot="ad-title">如果有爱，为什么错过</div>
      <div slot="ad-words">立即加入会员，缘分就在眼前</div>
    </home-adwords>
    <home-member-cards></home-member-cards>
    <home-adpics></home-adpics>
    <home-adwords>
      <div slot="ad-title">就在你身边，他们相爱啦</div>
      <div slot="ad-words">立即加入会员，缘分就在眼前</div>
    </home-adwords>
    <home-love-pics></home-love-pics>
    <home-service></home-service>
    <div class="news-info-container">
      <home-news-info></home-news-info>
      <home-new-member></home-new-member>
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

export default {
  components: {
    IndexHeader, HomePic, HomeLogin, HomeAdwords,
    HomeAdpics, HomeMemberCards, HomeLovePics,
    HomeService, HomeNewsInfo, HomeNewMember
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
    height: 360px;
    box-sizing: border-box;
    padding: 5px;
    display: flex;
    flex-direction: row;
  }
}
</style>
