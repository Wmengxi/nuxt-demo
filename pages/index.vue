<template>
  <section class="container">
    <div>
      <h1 class="title">
        nuxt-demo
      </h1>
      <h2 class="subtitle">
        Nuxt.js project
      </h2>
      <div class="links">
        <div class="button--green"
          @click="$router.push('/demo')">demo</div>
      </div>
    </div>
  </section>
</template>

<script>
const config = require('../myconfig.js')

export default {
  data () {
    return {
      message: 'hello world'
    }
  },
  methods: {

  },
  mounted: function () {
    console.log(config)
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
