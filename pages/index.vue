<template>
  <section class="container">
    <index-header></index-header>
    <div>
      <div class="links">
        <div class="button--green"
          @click="$router.push('/demo')">demo</div>
      </div>
    </div>
  </section>
</template>

<script>
import IndexHeader from './home/components/IndexHeader'

export default {
  components: {
    IndexHeader
  },
  data () {
    return {
      message: 'hello world'
    }
  },
  methods: {

  },
  mounted: function () {
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
