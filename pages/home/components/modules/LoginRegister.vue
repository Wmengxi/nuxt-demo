<template>
  <div class="login-register-box">
    <div class="login-register-content">
      <div class="login-register-header">
        <div class="header-item" @click="getType('login')"
              :style="{ border: type === 'login' ? '' : unShow}">
          <div :class="[ 'header-word', type === 'login' ? 'word-style' : '']">快捷登录</div>
        </div>
        <div class="header-item" @click="getType('register')"
              :style="{ border: type === 'register' ? '' : unShow}">
          <div :class="[ 'header-word', type === 'register' ? 'word-style' : '']">会员注册</div>
        </div>
      </div>
      <div class="login-body" v-if="type === 'login'">
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
            <span style="font-size: 14px;">一个月免登</span>
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
          最新登记注册会员<span style="color: #FD6F9F">220145</span>人
        </div>
      </div>
      <div class="register-body" v-else>

      </div>
    </div>
  </div>
</template>

<script>
export default {
   data () {
    return {
      unShow: 'none',
      type: 'login',
      tel: '',
      vecode: '',
      isFreedom: false
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
.login-register-box {
  border-left: 1px solid lightgray;
  border-right: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  background-color: white;
  box-sizing: border-box;
  width: 300px;
  height: 100%;
  .login-register-content {
    display: flex;
    flex-direction: column;
    .login-register-header {
      box-sizing: border-box;
      width: 100%;
      height: 60px;
      display: flex;
      .header-item {
        border-top: 3px solid #FD6F9F;
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
          border-right: 1px solid lightgray;
          font-size: 16px;
          color: grey;
        }
        .word-style {
          color: black;
          font-weight: bold;
        }
      }
    }
    .login-body {
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
          background-color: #FEBDD3;
          color: #FE75A3;
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
          background-color: #FD6F9F;
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
    .register-body {
      box-sizing: border-box;
      width: 100%;
      height: 300px;
      padding: 10px;
      border: 1px solid black;
    }
  }
}

</style>
