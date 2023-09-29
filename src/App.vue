<template>
  <div>
    <AppHeader />
    <LandingPage/>
    <SliderDiv/>
    <ContentPage/>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import LandingPage from './components/LandingPage.vue'
import ContentPage from './components/ContentPage.vue'
import SliderDiv from './components/SliderDiv.vue'
export default {
  name: 'App',
  components: {
    AppHeader,
    LandingPage,
    ContentPage,
    SliderDiv
  }
}
</script>

<style>

</style>
