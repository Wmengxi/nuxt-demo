<template>
  <div class="_partner-content-box">
    <div class="_content-link-box">
      <new-news></new-news>
      <contact-us></contact-us>
    </div>
    <div class="_content-info-box">
      <div class="_inner-item-box">
        <content-nav>
          <span slot="rightTitle">寻找对象</span>
          <span slot="leftFirstTitle">首页></span>
          <span slot="leftSecondTitle">寻找对象></span>
        </content-nav>
        <div class="_inner-item-content">
          <self-info></self-info>
          <inner-monologue></inner-monologue>
          <mate-requirements></mate-requirements>
          <live-style></live-style>
          <economic-strength></economic-strength>
          <work-study></work-study>
          <marriage-concept></marriage-concept>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const NewNews = r => require.ensure([], () => r(require('@/frame/sidebar/NewNews')), 'partner')
const ContactUs = r => require.ensure([], () => r(require('@/frame/sidebar/ContactUs')), 'partner')
const ContentNav = r => require.ensure([], () => r(require('@/frame/contentnav/ContentNav')), 'partner')
const SelfInfo = r => require.ensure([], () => r(require('./modules/SelfInfo')), 'partner')
const InnerMonologue = r => require.ensure([], () => r(require('./modules/InnerMonologue')), 'partner')
const MateRequirements = r => require.ensure([], () => r(require('./modules/MateRequirements')), 'partner')
const LiveStyle = r => require.ensure([], () => r(require('./modules/LiveStyle')), 'partner')
const EconomicStrength = r => require.ensure([], () => r(require('./modules/EconomicStrength')), 'partner')
const WorkStudy = r => require.ensure([], () => r(require('./modules/WorkStudy')), 'partner')
const MarriageConcept = r => require.ensure([], () => r(require('./modules/MarriageConcept')), 'partner')

export default {
  components: {  NewNews, ContactUs, ContentNav,
                 SelfInfo, InnerMonologue, MateRequirements,
                 LiveStyle, EconomicStrength, WorkStudy,
                 MarriageConcept }
}
</script>

<style lang="less">
._partner-content-box {
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
    width: 650px;
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
        width: 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        padding: 20px 5px;
      }
    }
  }
}

</style>
