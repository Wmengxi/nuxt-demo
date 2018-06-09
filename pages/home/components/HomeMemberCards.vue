<template>
  <div class="home-member-cards">
    <el-carousel indicator-position="outside" :autoplay="false">
      <el-carousel-item v-for="page in 3" :key="page">
        <div class="page-cards">
          <div class="single-card" v-for="(member, index) in memberCardsList"
           :key="index">
            <div class="card-pic">
              <img :src=member.img
                style="width: 100%; height: 100%">
            </div>
            <div class="card-info">
              <div class="member-info-item" style="color: #FF1493;font-size: 16px;">
                {{member.name}}
              </div>
              <div class="member-info-item">年龄: {{member.age}}</div>
              <div class="member-info-item">身高: {{member.height}}</div>
              <div class="member-info-item">学历: {{member.education}}</div>
              <div class="member-info-item">收入: {{member.income}}</div>
              <div class="member-detail-btn">
                <div class="btn">查看详情</div>
              </div>
            </div>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>

</template>

<script>
export default {
  data () {
    return {
      memberCardsList: [{
        img: 'https://dummyimage.com/100x155/333/3ff.jpg&text=pic',
        name: '雅萱',
        age: '34岁',
        height: '176',
        education: '海龟硕士',
        income: '150000'
      },{
        img: 'https://dummyimage.com/100x155/333/3ff.jpg&text=pic',
        name: '雅萱',
        age: '34岁',
        height: '176',
        education: '海龟硕士',
        income: '150000'
      }, {
        img: 'https://dummyimage.com/100x155/333/3ff.jpg&text=pic',
        name: '雅萱',
        age: '34岁',
        height: '176',
        education: '海龟硕士',
        income: '150000'
      }, {
        img: 'https://dummyimage.com/100x155/333/3ff.jpg&text=pic',
        name: '雅萱',
        age: '34岁',
        height: '176',
        education: '海龟硕士',
        income: '150000'
      }, {
        img: 'https://dummyimage.com/100x155/333/3ff.jpg&text=pic',
        name: '雅萱',
        age: '34岁',
        height: '176',
        education: '海龟硕士',
        income: '150000'
      }, {
        img: 'https://dummyimage.com/100x155/333/3ff.jpg&text=pic',
        name: '雅萱',
        age: '34岁',
        height: '176',
        education: '海龟硕士',
        income: '150000'
      }, {
        img: 'https://dummyimage.com/100x155/333/3ff.jpg&text=pic',
        name: '雅萱',
        age: '34岁',
        height: '176',
        education: '海龟硕士',
        income: '150000'
      }, {
        img: 'https://dummyimage.com/100x155/333/3ff.jpg&text=pic',
        name: '雅萱',
        age: '34岁',
        height: '176',
        education: '海龟硕士',
        income: '150000'
      }]
    }
  }

}
</script>

<style lang="less">
.home-member-cards {
  margin: 10px 0 20px 0;
  box-sizing: border-box;
  width: 840px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .el-carousel {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    .el-carousel__container {
      height: 330px;
      .page-cards {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        .single-card {
          margin: 5px 0;
          display: flex;
          box-sizing: border-box;
          width: 205px;
          height: 155px;
          .card-pic {
            margin-right: 3px;
            width: 100px;
            height: 100%;
            box-sizing: border-box;
          }
          .card-info {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            width: 95px;
            height: 100%;
            box-sizing: border-box;
            .member-info-item {
              font-size: 14px;
              margin-bottom: 2px;
            }
            .member-detail-btn {
              width: 100%;
              height: 30px;
              margin-top: 15px;
              .btn {
                background-color: #FF1493;
                color: white;
                line-height: 30px;
                font-size: 14px;
                cursor: pointer;
              }
            }
          }
        }
      }
    }
    .el-carousel__indicator {
      .el-carousel__button {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #FF1493;
      }
    }
  }

}

</style>
