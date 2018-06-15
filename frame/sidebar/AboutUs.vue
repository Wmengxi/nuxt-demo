<template>
  <div class="link-item-box">
    <div class="item-title">
      <span class="icon-insert_drive_file item-icon"></span>
      <span style="margin-left: 10px;">关于我们</span>
      <span style="font-size: 16px;">&nbsp;/ABOUT US</span>
    </div>
    <div class="item-list-box" style="height: 130px">
      <div :class="['about-us-item', currentLink === 'companyInfo' ? 'selected' : '']" @click="postLink('companyInfo')">公司介绍</div>
      <div class="about-us-divided-line"></div>
      <div :class="['about-us-item', currentLink === 'officeEnvironment' ? 'selected' : '']" @click="postLink('officeEnvironment')">办公环境</div>
      <div class="about-us-divided-line"></div>
      <div :class="['about-us-item', currentLink === 'contactWay' ? 'selected' : '']" @click="postLink('contactWay')">联系方式</div>
      <div class="about-us-divided-line"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentLink: 'companyInfo'
    }
  },
  methods: {
    postLink (linkName) {
      this.currentLink = linkName
    }
  }
}
</script>

<style lang="less">
.link-item-box {
  padding: 0 5px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 20px;
  .item-title {
    width: 100%;
    height: 40px;
    border-bottom: 1px solid #D76083;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    color: #D76083;
    font-size: 18px;
    margin-bottom: 8px;
    .item-icon {
      color: #D22F60;
      font-size: 20px;
    }
  }
  .item-list-box {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    .about-us-item {
      padding: 5px 0 5px 30px;
      width: 100%;
      height: 30%;
      border-radius: 3px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      cursor: pointer;
    }
    .selected {
      background-color: #F1356F;
    }
    .about-us-divided-line {
      width: 100%;
      border: 0.5px solid lightgrey
    }
  }
}

</style>
