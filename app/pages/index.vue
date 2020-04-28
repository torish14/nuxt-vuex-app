<template>
  <div>
    <p>りんごの値段は、ひとつ{{ appleIncludesTax }}円(税込)です。</p>
    <p>あなたはりんごを{{ total }}つ、カゴに入れました。</p>
    <p>りんごの合計の値段は、{{ totalAppleIncludesTax }}円（税込）です。</p>
    <button v-if="stock" @click="addApple">りんごをカゴに入れる。</button>
    <p v-else>りんごは売り切れました。。。</p>
  </div>
</template>

<script>
// import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    total() {
      return this.$store.state.total
    },
    // soldout() {},
    stock() {
      return this.$store.state.stock
    },
    appleIncludesTax() {
      return this.$store.getters.appleIncludesTax
    },
    totalAppleIncludesTax() {
      return this.$store.getters.totalAppleIncludesTax
    }
    // mapGetters([
    //   'appleIncludesTax',
    // 'totalAppleIncludestax'
    // ])
  },
  mounted() {
    this.checkStock()
  },
  methods: {
    addApple() {
      this.$store.commit('incrementApple')
    },
    checkStock() {
      this.$store.dispatch('checkStock')
    }
  }
}
</script>

<style></style>
