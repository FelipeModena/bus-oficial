<template>
  <div v-if="loading" class="loading-page">
<b-spinner variant="success" style="width: 3rem; height: 3rem;" label="Large Spinner"></b-spinner>  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'LoadingBar',
    data: () => ({
    loading: false,
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    },
  },
})
</script>


</script>

<style scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding-top: 200px;
  font-size: 30px;
  font-family: sans-serif;
}
</style>
