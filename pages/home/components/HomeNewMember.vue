<template>
 <div class="home-new-member">
   <div class="member-label">
     最新会员
   </div>
   <div class="member-info">
     <div class="info-item" v-for="(member, index) in newMemberList"
          :key="index">
       <span class="icon-keyboard_arrow_right item-icon"></span>
       <div class="item-date">{{member.date}}</div>
       <div class="item-content">{{member.content}}</div>
     </div>
   </div>
 </div>

</template>

<script>
export default {
  data () {
    return {
      newMemberList: [{
        date: '2018-05-22',
        content: '恭喜135****5478某某某某某先生成为了我们尊贵的会员!'
      }, {
        date: '2018-05-22',
        content: '恭喜135****5478某某某先生成为了我们尊贵的会员!'
      }, {
        date: '2018-05-22',
        content: '恭喜135****5478某某某先生成为了我们尊贵的会员!'
      }, {
        date: '2018-05-22',
        content: '恭喜135****5478某某某先生成为了我们尊贵的会员!'
      }, {
        date: '2018-05-22',
        content: '恭喜135****5478某某某先生成为了我们尊贵的会员!'
      }, {
        date: '2018-05-22',
        content: '恭喜135****5478某某某先生成为了我们尊贵的会员!'
      }, {
        date: '2018-05-22',
        content: '恭喜135****5478某某某先生成为了我们尊贵的会员!'
      }, {
        date: '2018-05-22',
        content: '恭喜135****5478某某某先生成为了我们尊贵的会员!'
      }, {
        date: '2018-05-22',
        content: '恭喜135****5478某某某先生成为了我们尊贵的会员!'
      }, {
        date: '2018-05-22',
        content: '恭喜135****5478某某某先生成为了我们尊贵的会员!'
      }]
    }
  }

}
</script>

<style lang="less">
.home-new-member {
  flex: 1;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 5px;
  .member-label {
    padding: 5px 0;
    border-bottom: 1px solid #FF1493;
    font-size: 18px;
    font-weight: bold;
    box-sizing: border-box;
    height: 36px;
  }
  .member-info {
    box-sizing: border-box;
    padding: 25px 0 5px 0;
    width: 100%;
    height: 386px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-top: 1px solid lightgrey;
    .info-item {
      display: flex;
      width: 100%;
      height: 24px;
      align-items: center;
      .item-icon {
        font-size: 24px;
        color: #FF1493;
      }
      .item-date {
        width: 72px;
        font-size: 14px;
        color: grey;
        margin-right: 30px;
      }
      .item-content {
        box-sizing: border-box;
        width: 325px;
        height: 24px;
        text-align: left;
        font-size: 14px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}

</style>
