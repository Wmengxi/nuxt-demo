<template>
  <div class="home-login">
    <div class="login-left-box">
      <div class="left-content">
        <div class="left-header">
          <div class="header-item">
            <div class="header-word">
              【4周年特别策划】单身男神女神云集 万元奖品...
            </div>
            <div class="header-arrow"></div>
          </div>
          <div class="header-item" style="background: white;border-right: 1px solid lightgrey">
            <div class="header-word" style="color: black;">
              【4周年特别策划】单身男神女神云集 万元奖品...
            </div>
            <div class="header-arrow" style="display: none;"></div>
          </div>
          <div class="header-item" style="background: white;">
            <div class="header-word" style="color: black;">
              【4周年特别策划】单身男神女神云集 万元奖品...
            </div>
            <div class="header-arrow" style="display: none;"></div>
          </div>
        </div>
        <div class="left-body">
          <img src="https://dummyimage.com/540x300/eee/3ff.jpg&text=logo"
             style="width: 100%; height: 100%">
        </div>
      </div>
    </div>
    <div class="login-right-box">
      <div class="right-content">
        <div class="right-header">
          <div class="header-item" style="border-top: 3px solid #FF1493;">
            <div class="header-word" style="border-right: 1px solid lightgray">快捷登录</div>
          </div>
          <div class="header-item">会员注册</div>
        </div>
        <div class="right-body">
          <div class="title-word">专业红娘为您牵线搭桥</div>
          <div class="tel">
            <input type="text" class="tel-input" placeholder="手机号" v-model="tel">
            <div class="tel-vecode">发送验证码</div>
          </div>
          <div class="vecode">
            <input type="text" class="vecode-input" placeholder="验证码" v-model="vecode">
          </div>
          <div class="login-set">
            <div class="freedom">
              <span class="icon-check_box_outline_blank icon-size" v-if="!isFreedom"
                    @click="isFreedom = !isFreedom"></span>
              <span class="icon-check_box icon-size" v-else
                    @click="isFreedom = !isFreedom"></span>
              <span style="font-size: 14px;">一个月内免登</span>
            </div>
            <div class="other-login">
              <div class="qq">
                <span class="icon-qq qq-icon"></span>
                <span style="font-size: 14px;">QQ</span>
              </div>
              <div class="wechat">
                <span class="icon-wechat wechat-icon"></span>
                <span style="font-size: 14px;">微信</span>
              </div>
            </div>
          </div>
          <div class="login-btn-box">
            <div class="login-btn">立即登录</div>
          </div>
          <div class="registered-num">
            最新登记注册会员<span style="color: #FF1493">220145</span>人
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
      tel: '',
      vecode: '',
      isFreedom: false
    }
  }

}
</script>

<style lang="less">
.home-login {
  margin-top: -60px;
  margin-bottom: 10px;
  width: 840px;
  height: 360px;
  display: flex;
  .login-left-box {
    box-sizing: border-box;
    width: 540px;
    height: 100%;
    padding-top: 8px;
    .left-content {
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      .left-header {
        width: 540px;
        height: 60px;
        box-sizing: border-box;
        display: flex;
        .header-item {
          width: 180px;
          height: 100%;
          box-sizing: border-box;
          background-color: #FF1493;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          color: white;
          padding: 0 3px;
          .header-word {
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
          }
          .header-arrow {
            position: relative;
            z-index: 1;
            margin: auto;
            top: 8px;
            width:0;
            height:0;
            border-left:8px solid transparent;
            border-right:8px solid transparent;
            border-top:8px solid #FF1493;
          }
        }
      }
      .left-body {
        width: 540px;
        height: 300px;
        box-sizing: border-box;
      }
    }
  }
  .login-right-box {
    border-left: 1px solid lightgray;
    border-right: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    background-color: white;
    box-sizing: border-box;
    width: 300px;
    height: 100%;
    .right-content {
      display: flex;
      flex-direction: column;
      .right-header {
        box-sizing: border-box;
        width: 100%;
        height: 60px;
        display: flex;
        .header-item {
          width: 50%;
          height: 100%;
          box-sizing: border-box;
          padding: 10px 0;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          .header-word {
            display: flex;
            align-items: center;
            justify-content: center;
            box-sizing: border-box;
            width: 100%;
            height: 100%;
          }
        }
      }
      .right-body {
        box-sizing: border-box;
        width: 100%;
        height: 300px;
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        .title-word {
          font-size: 14px;
          margin-bottom: 15px;
        }
        .tel {
          width: 100%;
          height: 40px;
          box-sizing: border-box;
          display: flex;
          margin-bottom: 10px;
          .tel-input {
            width: 70%;
            height: 100%;
            padding: 5px;
          }
          .tel-vecode {
            width: 30%;
            height: 100%;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            background-color: #ff9999;
            color: #ff0099;
            cursor: pointer;
          }
        }
        .vecode {
          width: 100%;
          height: 40px;
          margin-bottom: 10px;
          .vecode-input {
            width: 100%;
            height: 100%;
            padding: 5px;
          }
        }
        .login-set {
          width: 100%;
          height: 40px;
          box-sizing: border-box;
          display: flex;
          margin-bottom: 10px;
          .icon-size {
            font-size: 22px;
            cursor: pointer;
          }
          .freedom {
            padding: 0 3px;
            box-sizing: border-box;
            width: 50%;
            height: 100%;
            display: flex;
            align-items: center;
          }
          .other-login {
            box-sizing: border-box;
            width: 50%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            .qq {
              cursor: pointer;
              margin-right: 10px;
              .qq-icon {
                color: rgb(132, 218, 240);
                font-size: 20px;
                margin-right: 3px;
              }
            }
            .wechat {
              cursor: pointer;
              margin-right: 5px;
              .wechat-icon {
                color: rgb(114, 247, 114);
                font-size: 20px;
                margin-right: 3px;
              }
            }
          }
        }
        .login-btn-box {
          width: 100%;
          height: 40px;
          cursor: pointer;
          margin-bottom: 10px;
          .login-btn {
            width: 100%;
            height: 100%;
            background-color: #FF1493;
            color: white;
            line-height: 40px;
          }
        }
        .registered-num {
          width: 100%;
          height: 40px;
          line-height: 40px;
          color: gray;
          font-size: 14px;
        }
      }
    }
  }
}

</style>
