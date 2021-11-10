<template>
  <div class="bg-pony-primary text-white font font-roboto">
    <Header 
      :LoadingStateProps="loadingState ? true : false"
      @loading-state="loadingState = !loadingState"
    />

    <!-- Main Content -->
    <router-view :loadingState = loadingState></router-view>
    <!-- End Main Content -->

    <Footer />
  </div>

</template>

<script>
import Header from '@/components/myponyasia/pony/parts/Header.vue'
import Footer from '@/components/myponyasia/pony/parts/Footer.vue'

export default {
  components: {
        Header,
        Footer,
    },

  data() {
    return {
      loadingState: false
    }
  },
}
</script>