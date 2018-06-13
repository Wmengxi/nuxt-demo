<template>
 <div class="home-news-info">
   <div class="news-info-header">
     <div class="news-info-label">新闻资讯</div>
     <div class="news-info-tab">
       <div class="tab-item" @click="getType('companyNews')"
            :style="{ border: type === 'companyNews' ? arrowShow: 'none'}">
          <div class="tab-company-news"
            :style="{ color: type === 'companyNews' ? activeColor : ''}">公司新闻</div>
          <div class="tab-arrow" :style="{ display: type === 'companyNews' ? arrowShow : 'none'}"></div>
       </div>
       <div class="tab-item" @click="getType('tradeInfo')"
            :style="{ border: type === 'tradeInfo' ? arrowShow : 'none'}">
        <div class="tab-trade-info"
            :style="{ color: type === 'tradeInfo' ? activeColor : ''}">行业资讯</div>
        <div class="tab-arrow" :style="{ display: type === 'tradeInfo' ? arrowShow : 'none'}"></div>
       </div>
     </div>
   </div>
   <div class="news-info-box">
     <div class="news-info-content">
       <div class="info-item" v-for="(info, index) in infoList"
            :key="index">
         <div class="info-pic">
           <img :src=info.img
                class="img-style">
         </div>
         <div class="info-words">
           <div class="info-title">
            {{info.title}}
           </div>
           <div class="info-content">
             {{info.content}}
           </div>
         </div>
       </div>
     </div>
   </div>
 </div>
</template>

<script>
export default {
  data () {
    return {
      arrowShow: '',
      activeColor: '#FF1493',
      type: 'companyNews',
      infoList: [{
        img: 'https://dummyimage.com/150x90/eee/3ff.jpg&text=pic',
        title: '今年最流行婚礼，看完好想结婚！',
        content: '每个女生对婚礼的憧憬，大概都是从拥有第一个洋娃娃开始的。忽闪的长睫毛、精致的妆容、长长的蕾丝裙、blingbling的蝴蝶结高跟鞋......简直就是婚礼现场'
      }, {
        img: 'https://dummyimage.com/150x90/eee/3ff.jpg&text=pic',
        title: '今年最流行婚礼，看完好想结婚！',
        content: '每个女生对婚礼的憧憬，大概都是从拥有第一个洋娃娃开始的。忽闪的长睫毛、精致的妆容、长长的蕾丝裙、blingbling的蝴蝶结高跟鞋......简直就是婚礼现场'
      }, {
        img: 'https://dummyimage.com/150x90/eee/3ff.jpg&text=pic',
        title: '今年最流行婚礼，看完好想结婚！',
        content: '每个女生对婚礼的憧憬，大概都是从拥有第一个洋娃娃开始的。忽闪的长睫毛、精致的妆容、长长的蕾丝裙、blingbling的蝴蝶结高跟鞋......简直就是婚礼现场'
      }]
    }
  },
  methods: {
    getType (type) {
      this.type = type
    }
  }

}
</script>

<style lang="less">
.home-news-info {
  width: 55%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-right: 20px;
  .news-info-header {
    margin-top: 6px;
    width: 100%;
    display: flex;
    align-items: flex-end;
    .news-info-label {
      padding: 5px 0;
      border-bottom: 1px solid #FF70A2;
      font-size: 18px;
      font-weight: bold;
      box-sizing: border-box;
      margin-right: 80px;
    }
    .news-info-tab {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      .tab-item {
        border-bottom: 1px solid #FF70A2;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-right: 50px;
        height: 36px;
        .tab-company-news {
          padding: 5px 0;
          font-size: 16px;
          color: black;
          cursor: pointer;
        }
        .tab-trade-info {
          font-size: 16px;
          cursor: pointer;
          padding: 5px 0;
        }
        .tab-arrow {
          position: relative;
          z-index: 1;
          margin: auto;
          width:0;
          height:0;
          border-left:4px solid transparent;
          border-right:4px solid transparent;
          border-bottom:4px solid #FF70A2;
        }
      }
    }
  }
  .news-info-box {
    padding: 20px 0 5px 0;
    width: 100%;
    border-top: 1px solid lightgrey;
    .news-info-content {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-content: space-around;
      box-sizing: border-box;
      .info-item {
        width: 100%;
        height: 120px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        cursor: pointer;
        border-bottom: 1px solid lightgrey;
        padding: 5px 0;
        .info-pic {
          width: 150px;
          height: 100px;
          box-sizing: border-box;
          margin-right: 10px;
          overflow: hidden;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          .img-style {
            min-width: 100%;
            min-height: 100%;
          }
        }
        .info-words {
          box-sizing: border-box;
          flex: 1;
          height: 100px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-around;
          .info-title {
            font-size: 16px;
          }
          .info-content {
            font-size: 14px;
            text-align: left;
            color: grey;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
    }
  }
}

</style>
