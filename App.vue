<template>
    <div>
      <router-view></router-view>
      <router-link to="/top">Top</router-link>
      <router-link to="/new">New</router-link>
      <router-link to="/show">Show</router-link>
      <router-link to="/ask">Ask</router-link>
      <router-link to="/job">Jobs</router-link>
      <div class="cont wrapper">
          <header class='header'>
              {{items}}
          </header>
          {{ssr}}
      </div>
    </div>
</template>
<script>
export default {
  asyncData({ store, route }) {
    // 触发 action 后，会返回 Promise
    console.log(123)
    return store.dispatch("fetchItem",1);
  },
  data() {
    return {
      items: this.$store.state.items,
      ssr:'success'
    }
    
  },
  mounted() {
    console.log('hello world')
  }
};
</script>

<style lang="scss">
.wrapper {
  width: 900px;
  margin: 0 auto;
}
.cont {
  .header {
    background: #fefefe;
    font-size: 20px;
  }
}
</style>

