<template>
  <div class="_self-info-box">
    <div class="_self-big-pic">
      <div class="_big-pic">
        <img src="https://dummyimage.com/168x288/333/3ff.jpg&text=pic"
              class="img-style">
      </div>
    </div>
    <div class="_self-content-box">
      <div class="_self-name-row">
        <div class="_self-name">老爷</div>
        <div class="_focus-btn-box">
          <div class="_btn">关 注</div>
        </div>
      </div>
      <div class="_self-age-row">
        <span>31岁&nbsp;,&nbsp;</span>
        <span>男&nbsp;,&nbsp;</span>
        <span>宁波杭州湾</span>
      </div>
      <div class="_self-detail-info">
        <div class="_detail-item-row">
          <div class="_item-column">
            <span>学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;历&nbsp;:&nbsp;</span>
            <span>大专</span>
          </div>
          <div class="_item-column">
            <span>身&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;高&nbsp;:&nbsp;</span>
            <span>172cm</span>
          </div>
        </div>
        <div class="_detail-item-row">
          <div class="_item-column">
            <span>购&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;车&nbsp;:&nbsp;</span>
            <span>---</span>
          </div>
          <div class="_item-column">
            <span>月&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;薪&nbsp;:&nbsp;</span>
            <span>5000-10000元</span>
          </div>
        </div>
        <div class="_detail-item-row">
          <div class="_item-column">
            <span>住&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;房&nbsp;:&nbsp;</span>
            <span>与父母同住</span>
          </div>
          <div class="_item-column">
            <span>体&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;重&nbsp;:&nbsp;</span>
            <span>53公斤</span>
          </div>
        </div>
        <div class="_detail-item-row">
          <div class="_item-column">
            <span>星&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;座&nbsp;:&nbsp;</span>
            <span>射手座</span>
          </div>
          <div class="_item-column">
            <span>民&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;族&nbsp;:&nbsp;</span>
            <span>汉族</span>
          </div>
        </div>
        <div class="_detail-item-row">
          <div class="_item-column">
            <span>属&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;相&nbsp;:&nbsp;</span>
            <span>马</span>
          </div>
          <div class="_item-column">
            <span>婚姻状况&nbsp;:&nbsp;</span>
            <span>离异</span>
          </div>
        </div>
      </div>
      <div class="_self-slide-pic">
        <div class="page-btn">
          <span class="icon-keyboard_arrow_left icon-style"></span>
        </div>
        <div class="pic-box" v-for="(pic, index) in  selfPicList"
              :key="index">
          <img :src=pic.img
                class="img-style">
        </div>
        <div class="page-btn">
          <span class="icon-keyboard_arrow_right icon-style"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selfPicList: [{
        img: 'https://dummyimage.com/76x110/333/3ff.jpg&text=pic'
      }, {
        img: 'https://dummyimage.com/76x110/333/3ff.jpg&text=pic'
      }, {
        img: 'https://dummyimage.com/76x110/333/3ff.jpg&text=pic'
      }, {
        img: 'https://dummyimage.com/76x110/333/3ff.jpg&text=pic'
      }]
    }
  }
}
</script>

<style lang="less">
._self-info-box {
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  ._self-big-pic {
    width: 200px;
    height: 320px;
    border: 1px solid lightgrey;
    box-sizing: border-box;
    align-self: flex-end;
    margin-right: 10px;
    margin-bottom: 5px;
    padding: 15px;
    ._big-pic {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      overflow: hidden;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .img-style {
        max-width: 100%;
        max-height: 100%;
      }
    }
  }
  ._self-content-box {
    padding: 5px;
    width: 410px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    ._self-name-row {
      width: 100%;
      height: 30px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      margin-bottom: 5px;
      ._self-name {
        width: 90px;
        font-weight: bold;
        text-align: left;
      }
      ._focus-btn-box {
        flex: 1;
        box-sizing: border-box;
        display: flex;
        justify-content: flex-end;
        ._btn {
          width: 80px;
          height: 30px;
          background-color: #F1356F;
          box-sizing: border-box;
          border-radius: 3px;
          color: white;
          line-height: 30px;
          cursor: pointer;
        }
      }
    }
    ._self-age-row {
      width: 100%;
      height: 30px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      margin-bottom: 10px;
    }
    ._self-detail-info {
      width: 100%;
      box-sizing: border-box;
      margin-bottom: 10px;
      ._detail-item-row {
        width: 100%;
        height: 20px;
        box-sizing: border-box;
        font-size: 14px;
        margin-bottom: 5px;
        display: flex;
        ._item-column {
          display: flex;
          align-items: center;
          width: 50%;
        }
      }
    }
    ._self-slide-pic {
      width: 100%;
      height: 120px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-around;
      .page-btn {
        width: 20px;
        height: 100%;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        .icon-style {
          font-size: 30px;
          color: grey;
        }
      }
      .pic-box {
        width: 86px;
        height: 100%;
        border: 1px solid lightgrey;
        box-sizing: border-box;
        padding: 5px;overflow: hidden;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .img-style {
          max-width: 100%;
          max-height: 100%;
        }
      }
    }
  }
}
</style>
