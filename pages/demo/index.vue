<template>
  <section class="container">
    <div>demo page</div>
    <div>get: {{message}}</div>
    <div><input type="text" v-model="temp"></div>
    <div class="button--green"
      @click="sendTemp">send</div>
    <div class="button--green"
      @click="$router.push('/')">home</div>
  </section>
</template>

<script>
import api from '~/service/api'

export default {
  data () {
    return {
      message: 'asdf',
      temp: ''
    }
  },
  methods: {
    async sendTemp () {
      try {
        let res = await api.post('/api/testaaa/test', {
          'success': true,
          'message': this.temp
        })
        this.message = res.message
      } catch (error) {
        console.log(error)
      }
    }
  },
  mounted: async function () {
  }

}
</script>

<style lang="less">
.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
}
</style>
