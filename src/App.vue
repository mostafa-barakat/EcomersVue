<template>
  <Header />
  <router-view />
  <Newsletter v-if="$route.path != '/contact'" />
  <Footer />
</template>

<script>
import Header from "@/components/Header";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
export default {
  name:"app",
  components: {
    Header,
    Newsletter,
    Footer,
  },
}
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 0

</style>
