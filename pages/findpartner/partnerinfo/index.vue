<template>
  <section class="container">
    <div class="partner-header-nav">
      <index-header></index-header>
      <index-navbar></index-navbar>
    </div>
    <page-pic></page-pic>
    <div class="partner-content-container">
      <info-content></info-content>
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
const IndexHeader = r => require.ensure([], () => r(require('@/components/IndexHeader')), 'partner')
const IndexNavbar = r => require.ensure([], () => r(require('@/components/IndexNavbar')), 'partner')
const PagePic = r => require.ensure([], () => r(require('@/components/PagePic')), 'partner')
const InfoContent = r => require.ensure([], () => r(require('./_InfoContent')), 'partner')

const IndexCompanyInfo = r => require.ensure([], () => r(require('@/components/IndexCompanyInfo')), 'partner')
const IndexOnlineService = r => require.ensure([], () => r(require('@/components/IndexOnlineService')), 'partner')
const IndexBottom = r => require.ensure([], () => r(require('@/components/IndexBottom')), 'aboutus')
export default {
  components: {
    IndexHeader, IndexNavbar, PagePic, InfoContent,
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
  .partner-header-nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 1px;
  }
  .partner-content-container {
    width: 100%;
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
