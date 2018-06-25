<template>
  <div class="tag-box">
  <div class="hot-tag-box">
    <div class="row-item">
      <div class="row-label">热门标签&nbsp;:</div>
      <div class="row-tags">
        <div class="tag-item">高级白领</div>
        <div class="tag-item">教师</div>
        <div class="tag-item">医务工作者</div>
        <div class="tag-item">高级白领</div>
        <div class="tag-item">教师</div>
        <div class="tag-item">医务工作者</div>
      </div>
    </div>
    <div class="row-item">
      <div class="row-label">您已选择&nbsp;:</div>
      <div class="row-tags">
        <el-tag v-for="(tag, index) in chosenTagList"
                :key="index"
                closable
                @close="handleClose(tag)"
                style="margin: 5px">
          {{tag}}
          <span class="icon-expand_more icon-style"></span>
        </el-tag>
      </div>
    </div>
  </div>
  <div class="more-tags">
    <div class="row-item">
      <div class="row-label">更多标签&nbsp;:</div>
      <div class="row-tags">
        <div class="single-tag" v-for="(tag, index) in moreTagList"
              :key="index" @click="pushTag(tag)">
          <el-tag type="info">
            {{tag}}
            <span class="icon-expand_more icon-style"></span>
          </el-tag>
        </div>
      </div>
    </div>
    <div class="collapse-btn" @click="collapseTag">收起
      <span class="icon-expand_less"></span>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      chosenTagList: ['女', '杭州湾', '20-28岁', '有照片'],
      moreTagList: ['身高', '婚史', '学历', '住房', '购车', '职业', '星座', '宗教信仰', '身高', '婚史', '学历', '住房', '购车', '职业', '星座', '宗教信仰']
    }
  },
  methods: {
    handleClose (tag) {
      this.chosenTagList.splice(this.chosenTagList.indexOf(tag), 1)
      this.moreTagList.push(tag)
    },
    pushTag (tag) {
      this.chosenTagList.push(tag)
      this.moreTagList.splice(this.moreTagList.indexOf(tag), 1)
    },
    collapseTag () {

    }
  }
}
</script>

<style lang="less">
.tag-box {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  border: 1px solid lightgrey;
  border-top: none;
  margin-bottom: 20px;
  .row-item {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    .row-label {
      align-self: flex-start;
      margin-top: 10px;
      width: 70px;
      font-size: 14px;
      font-weight: bold;
    }
    .row-tags {
      display: flex;
      width: 500px;
      box-sizing: border-box;
      flex-wrap: wrap;
      .icon-style {
        font-size: 20px;
        position: relative;
        top: 4px;
      }
      .el-tag {
        height: 30px;
        color: black;
      }
    }
  }
  .hot-tag-box {
    width: 100%;
    border-top: 3px solid #F33973;
    background-color: #F2F2F2;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 5px;
    .tag-item {
      border: 1px solid #F33973;
      border-radius: 10px;
      font-size: 14px;
      margin: 5px;
      padding: 3px;
      color: #F33973;
      background-color: white;
    }
  }
  .more-tags {
    width: 100%;
    border-top: 1px solid lightgrey;
    box-sizing: border-box;
    padding: 10px 5px;
    .single-tag {
      cursor: pointer;
      margin: 5px;
    }
    .collapse-btn {
      color: blue;
      cursor: pointer;
      font-size: 14px;
      float: right;
    }
  }
}
</style>
