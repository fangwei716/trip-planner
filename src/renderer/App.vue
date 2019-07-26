<template>
  <div id="app">
    <tripList></tripList>
    <router-view></router-view>
  </div>
</template>

<script>
  import tripList from '@/components/TripList.vue'
  export default {
    name: 'trip-planner',
    components: { tripList }
  }
</script>

<style>
  /* CSS */
  html {
    height: 100%;
    font-size: 14px;
    line-height: 1.5;
    overflow: hidden;
    background-color: #fff;
  }
  body{
    margin: 0;
  }
  body, #app{
    height: 100%;
  }
</style>