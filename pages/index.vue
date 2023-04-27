<template>
<div>
<MainCover></MainCover>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import MainCover from '~/components/index/MainCover.vue'

export default Vue.extend({
    name: "IndexPage",
    components: { MainCover }
})
</script>
