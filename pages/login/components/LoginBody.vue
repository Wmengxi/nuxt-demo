<template>
  <div class="login-container">
     <div class="login-box">
      <div class="login-content">
        <div class="login-header">
          <div class="header-item" @click="getType('quickLogin')"
                :style="{ border: type === 'quickLogin' ? '' : unShow}">
            <div :class="[ 'header-word', type === 'quickLogin' ? 'word-style' : '']">快捷登录</div>
          </div>
          <div class="header-item" @click="getType('passwordLogin')"
                :style="{ border: type === 'passwordLogin' ? '' : unShow}">
            <div :class="[ 'header-word', type === 'passwordLogin' ? 'word-style' : '']">密码登录</div>
          </div>
        </div>
        <div class="quick-login-body" v-if="type === 'quickLogin'">
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
            <div class="remark-words">还不是会员？立即注册</div>
          </div>
          <div class="login-btn-box">
            <div class="login-btn" @click="navTo('home')">立即登录</div>
          </div>
          <div class="other-login">
            <div class="divided-label">
              <div class="divided-line"></div>
              <div class="divided-words">其它帐号登录</div>
              <div class="divided-line"></div>
            </div>
            <div class="login-way">
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
        </div>
        <div class="password-login-body" v-else>
          <div class="tel">
            <input type="text" class="tel-input" placeholder="用户名/手机号" v-model="tel">
          </div>
          <div class="password">
            <input type="password" class="password-input" placeholder="密码" v-model="password">
          </div>
          <div class="login-set">
            <div class="freedom">
              <span class="icon-check_box_outline_blank icon-size" v-if="!isFreedom"
                    @click="isFreedom = !isFreedom"></span>
              <span class="icon-check_box icon-size" v-else
                    @click="isFreedom = !isFreedom"></span>
              <span style="font-size: 14px;">一个月免登</span>
            </div>
            <div class="remark-words">忘记密码</div>
          </div>
          <div class="login-btn-box">
            <div class="login-btn" @click="navTo('home')">立即登录</div>
            <div class="register-words">还不是会员？立即注册</div>
          </div>
          <div class="other-login">
            <div class="divided-label">
              <div class="divided-line"></div>
              <div class="divided-words">其它帐号登录</div>
              <div class="divided-line"></div>
            </div>
            <div class="login-way">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      unShow: 'none',
      type: 'quickLogin',
      tel: '',
      vecode: '',
      password: '',
      isFreedom: false
    }
  },
  methods: {
    getType (type) {
      this.type = type
      this.isFreedom = false
      this.tel = ''
      this.vecode = ''
      this.password = ''
    },
    navTo (destName) {
      this.$router.push({name: destName})
    }
  }
}
</script>

<style lang="less">
.login-container {
  width: 100%;
  height: 520px;
  border-top: 2px solid #F3487E;
  box-sizing: border-box;
  background-image: url("https://dummyimage.com/1200x520/eee/3ff.jpg&text=pic");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  .login-box {
    background-color: white;
    box-sizing: border-box;
    width: 320px;
    height: 406px;
    .login-content {
      display: flex;
      flex-direction: column;
      .login-header {
        box-sizing: border-box;
        width: 100%;
        height: 60px;
        display: flex;
        margin-bottom: 5px;
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
      .quick-login-body {
        box-sizing: border-box;
        width: 100%;
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
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
      }
      .password-login-body {
        box-sizing: border-box;
        width: 100%;
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        .tel {
          width: 100%;
          height: 40px;
          margin-bottom: 10px;
          .tel-input {
            width: 100%;
            height: 100%;
            padding: 5px;
          }
        }
        .password {
          width: 100%;
          height: 40px;
          margin-bottom: 10px;
          .password-input {
            width: 100%;
            height: 100%;
            padding: 5px;
          }
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
        .remark-words {
          box-sizing: border-box;
          width: 50%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          font-size: 14px;
          cursor: pointer;
        }
      }
      .login-btn-box {
        width: 100%;
        height: 70px;
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
        .login-btn {
          width: 100%;
          height: 40px;
          background-color: #FD6F9F;
          color: white;
          line-height: 40px;
          cursor: pointer;
          margin-bottom: 10px;
        }
        .register-words {
          font-size: 14px;
          cursor: pointer;
        }
      }
      .other-login {
        box-sizing: border-box;
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
        .divided-label {
          box-sizing: border-box;
          width: 100%;
          display: flex;
          justify-content: space-around;
          margin-bottom: 20px;
          .divided-line {
            margin-top: 10px;
            width: 30%;
            border-top: 1px solid #FEBDD3;
          }
          .divided-words {
            font-size: 14px;
          }
        }
        .login-way {
          box-sizing: border-box;
          width: 100%;
          display: flex;
          justify-content: center;
          .qq {
            cursor: pointer;
            margin-right: 20px;
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
    }
  }
}

</style>
