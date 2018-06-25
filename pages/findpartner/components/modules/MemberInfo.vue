<template>
  <div>
    <div class="sorting-header-box">
      <div class="sorting-item" style="color: red">综合排序</div>
      <div class="sorting-item" style="width: 100px">登录时间
        <span class="icon-arrow-down icon-style"></span>
      </div>
    </div>
    <div class="sorting-pic-box">
      <div class="single-card" v-for="(member, index) in memberCardsList"
      :key="index">
        <div class="card-pic">
          <img :src=member.img
              class="img-style">
        </div>
        <div class="card-info">
          <div class="member-info-item" style="color: #F02D73;font-size: 16px;">
            {{member.name}}
          </div>
          <div class="member-info-item">年龄: {{member.age}}</div>
          <div class="member-info-item">身高: {{member.height}}</div>
          <div class="member-info-item">学历: {{member.education}}</div>
          <div class="member-info-item">收入: {{member.income}}</div>
          <div class="member-detail-btn">
            <div class="btn" @click="getInfo(index)">查看详情</div>
          </div>
        </div>
      </div>
    </div>
    <div class="pagination-box">
      <page-pagination></page-pagination>
    </div>
  </div>
</template>

<script>
const PagePagination = r => require.ensure([], () => r(require('@/components/PagePagination')), 'partner')

export default {
  components: { PagePagination },
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
      }, {
        img: 'https://dummyimage.com/100x155/333/3ff.jpg&text=pic',
        name: '雅萱',
        age: '34岁',
        height: '176',
        education: '海龟硕士',
        income: '150000'
      }]
    }
  },
  methods: {
    getInfo (index) {
      this.$router.push({name: 'findpartner-partnerinfo', params: {'id': index}})
    }
  }
}
</script>

<style lang="less">
.sorting-header-box {
  width: 100%;
  height: 35px;
  box-sizing: border-box;
  background-color: #F2F2F2;
  border: 1px solid lightgrey;
  display: flex;
  margin-bottom: 15px;
  .sorting-item {
    width: 80px;
    border-right: 1px solid lightgrey;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    cursor: pointer;
    .icon-style {
      font-size: 10px;
      position: relative;
      top: 1px;
      margin-left: 5px;
    }
  }
}
.sorting-pic-box {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 30px;
  .single-card {
    margin: 10px 0;
    display: flex;
    box-sizing: border-box;
    width: 200px;
    .card-pic {
      margin-right: 3px;
      width: 100px;
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
          background-color: #FD6F9F;
          color: white;
          line-height: 30px;
          font-size: 14px;
          cursor: pointer;
        }
      }
    }
  }
}
.pagination-box {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
}
</style>
