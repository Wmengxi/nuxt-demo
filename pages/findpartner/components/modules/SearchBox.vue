<template>
  <div class="search-box">
    <div class="search-input-box">
      <input type="text" class="search-style" v-model="searchText">
      <div class="search-btn" @click="search">搜&nbsp;&nbsp;索</div>
    </div>
    <div class="search-word-box">
      <div class="word-label">热门搜索词&nbsp;&nbsp;: </div>
      <span class="word-style">苗条</span>
      <span class="word-style">幽默</span>
      <span class="word-style">清纯</span>
      <span class="word-style">可爱</span>
      <span class="word-style">时尚</span>
      <span class="word-style">睿智</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchText: ''
    }
  },
  methods: {
    search () {

    }
  }

}
</script>

<style lang="less">
.search-box {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  box-sizing: border-box;
  padding: 5px 40px;
  .search-input-box {
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    .search-style {
      width: 380px;
      height: 30px;
      border: 3px solid #F1356F;
      box-sizing: border-box;
      padding: 0 10px;
      outline: none;
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
    }
    .search-btn {
      width: 90px;
      height: 30px;
      background-color: #F1356F;
      color: white;
      line-height: 30px;
      cursor: pointer;
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
    }
  }
  .search-word-box {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-content: center;
    padding: 0 40px;
    .word-label {
      font-size: 14px;
      font-weight: bold;
    }
    .word-style {
      font-size: 14px;
      margin: 0 5px;
    }
  }
}
</style>
