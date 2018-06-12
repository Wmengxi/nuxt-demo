<template>
  <div class="home-love-pics">
    <div class="first-row">
      <div class="first-row-pic"
           style="background-image: url('https://dummyimage.com/408x200/333/3ff.jpg&text=pic')">
        <div class="first-pic-logo">
          <div class="first-logo-words">晒幸福</div>
        </div>
      </div>
      <div class="first-row-pic"
           style="background-image: url('https://dummyimage.com/408x200/333/3ff.jpg&text=pic')">
        <div class="first-pic-logo">
          <div class="first-logo-words">晒幸福</div>
        </div>
      </div>
    </div>
    <div class="second-row">
      <div class="second-row-pic"
           style="background-image: url('https://dummyimage.com/200x150/333/3ff.jpg&text=pic')">
        <div class="second-pic-logo">
          <div class="second-logo-words">晒幸福</div>
        </div>
      </div>
      <div class="second-row-pic"
           style="background-image: url('https://dummyimage.com/200x150/333/3ff.jpg&text=pic')">
        <div class="second-pic-logo">
          <div class="second-logo-words">晒幸福</div>
        </div>
      </div>
      <div class="second-row-pic"
           style="background-image: url('https://dummyimage.com/200x150/333/3ff.jpg&text=pic')">
        <div class="second-pic-logo">
          <div class="second-logo-words">晒幸福</div>
        </div>
      </div>
      <div class="second-row-pic"
           style="background-image: url('https://dummyimage.com/200x150/333/3ff.jpg&text=pic')">
        <div class="second-pic-logo">
          <div class="second-logo-words">晒幸福</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
.home-love-pics {
  margin: 10px 0 30px 0;
  box-sizing: border-box;
  width: 840px;
  display: flex;
  flex-direction: column;
  .first-row {
    width: 100%;
    height: 200px;
    box-sizing: border-box;
    margin-bottom: 5px;
    display: flex;
    justify-content: space-around;
    .first-row-pic {
      width: 408px;
      height: 100%;
      box-sizing: border-box;
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      .first-pic-logo {
        border-bottom: 30px solid #FF1493;
        border-left: 30px solid transparent;
        width: 120px;
        cursor: pointer;
        .first-logo-words {
          position: relative;
          top: 25px;
          color: white;
        }
      }
    }
  }
  .second-row {
    width: 100%;
    height: 150px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    .second-row-pic {
      width: 200px;
      height: 100%;
      box-sizing: border-box;
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      .second-pic-logo {
        border-bottom: 25px solid #FF1493;
        border-left: 25px solid transparent;
        width: 90px;
        cursor: pointer;
        .second-logo-words {
          position: relative;
          top: 22px;
          color: white;
        }
      }
    }
  }
}

</style>
