<template>
    <div class="cont wrapper">
        <header class='header'>
            {{items}}
        </header>
    </div>
</template>
<script>
export default {
  asyncData({ store, route }) {
    // 触发 action 后，会返回 Promise
    return store.dispatch("fetchItem",1);
  },
  data() {
    return {
      items: this.$store.state.items
    }
    
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

