<template>
  <section class="container">
    <div class="us-header-nav">
      <index-header></index-header>
      <index-navbar></index-navbar>
    </div>
    <about-pic></about-pic>
    <div class="us-content-container">
      <about-content></about-content>
    </div>
    <index-company-info></index-company-info>
    <index-bottom></index-bottom>
    <div class="online-service-container">
      <index-online-service></index-online-service>
    </div>
    <div class="online-service-container"></div>
  </section>
</template>

<script>
const IndexHeader = r => require.ensure([], () => r(require('@/components/IndexHeader')), 'aboutus')
const IndexNavbar = r => require.ensure([], () => r(require('@/components/IndexNavbar')), 'aboutus')
const AboutPic = r => require.ensure([], () => r(require('./components/AboutPic')), 'aboutus')
const AboutContent = r => require.ensure([], () => r(require('./components/AboutContent')), 'aboutus')

const IndexCompanyInfo = r => require.ensure([], () => r(require('@/components/IndexCompanyInfo')), 'aboutus')
const IndexOnlineService = r => require.ensure([], () => r(require('@/components/IndexOnlineService')), 'aboutus')
const IndexBottom = r => require.ensure([], () => r(require('@/components/IndexBottom')), 'aboutus')
export default {
  components: {
    IndexHeader, IndexNavbar, AboutPic, AboutContent,
    IndexCompanyInfo, IndexOnlineService, IndexBottom
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
  .us-header-nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 1px;
  }
  .us-content-container {
    width: 100%;
    height: 680px;
    box-sizing: border-box;
  }
  .online-service-container {
    z-index: 1;
    position: absolute;
    top: 400px;
    right: 0;
  }
}

</style>
