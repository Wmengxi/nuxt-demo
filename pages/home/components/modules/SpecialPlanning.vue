<template>
  <div class="special-planning-box">
      <div class="special-planning-content">
        <div class="special-planning-header">
          <div class="header-item" @click="getActiveTab('first')"
               :style="{background: activeTab === 'first' ? activeBg : '' }">
            <div class="header-word"
               :style="{ color: activeTab === 'first' ? activeColor : '' }">
               {{planningList[0].title}}
            </div>
            <div class="header-arrow" :style="{ display: activeTab === 'first' ? arrowShow : 'none'}"></div>
          </div>
          <div class="header-item" @click="getActiveTab('second')"
               :style="{background: activeTab === 'second' ? activeBg : '' }">
            <div class="header-word"
               :style="{ color: activeTab === 'second' ? activeColor : '' }">
               {{planningList[1].title}}
            </div>
            <div class="header-arrow" :style="{ display: activeTab === 'second' ? arrowShow : 'none'}"></div>
          </div>
          <div class="header-item" @click="getActiveTab('third')"
               :style="{background: activeTab === 'third' ? activeBg : '' }">
            <div class="header-word"
               :style="{ color: activeTab === 'third' ? activeColor : '' }">
               {{planningList[2].title}}
            </div>
            <div class="header-arrow" :style="{ display: activeTab === 'third' ? arrowShow : 'none'}"></div>
          </div>
        </div>
        <div class="special-planning-body">
          <img src="https://dummyimage.com/540x300/eee/3ff.jpg&text=logo"
             style="width: 100%;height: 100%">
        </div>
      </div>
    </div>

</template>

<script>
export default {
  data () {
    return {
      activeTab: 'first',
      activeBg: '#FF1493',
      activeColor: 'black',
      arrowShow: '',
      planningList: [{
        title: '【4周年特别策划】单身男神女神云集 万元奖品等你来拿'
      }, {
        title: '【4周年特别策划】单身男神女神云集 万元奖品等你来拿'
      }, {
        title: '【4周年特别策划】单身男神女神云集 万元奖品等你来拿'
      }]
    }
  },
  methods: {
    getActiveTab (tabItem) {
      this.activeTab = tabItem
    }
  }

}
</script>

<style lang="less">
.special-planning-box {
  box-sizing: border-box;
  width: 540px;
  height: 100%;
  padding-top: 8px;
  .special-planning-content {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .special-planning-header {
      width: 540px;
      height: 60px;
      box-sizing: border-box;
      display: flex;
      .header-item {
        width: 180px;
        height: 100%;
        box-sizing: border-box;
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        padding: 3px;
        .header-word {
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          color: black;
          text-align: left;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .header-arrow {
          position: absolute;
          z-index: 1;
          margin: auto;
          margin-top: 30px;
          width:0;
          height:0;
          border-left:8px solid transparent;
          border-right:8px solid transparent;
          border-top:8px solid #FF1493;
        }
      }
    }
    .special-planning-body {
      width: 540px;
      height: 300px;
      box-sizing: border-box;
    }
  }
}

</style>
