<template>
  <b-container class="text-center pt-4">
    <b-row class="mt-5 pt-5">
      <b-col>
        <b-img
          src="imgs/index/pica-pau.jpg"
          fluid
          alt=""
          width="200px"
          sizes="2"
        />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h2>Busão da opinião</h2>
        <nuxt-link to="calcula-trajeto">
          <b-button> Escolha seu trajeto </b-button>
        </nuxt-link>
        <nuxt-link to="ajuda">
          <b-button>
            Ajuda
            <b-icon-question-circle />
          </b-button>
        </nuxt-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'IndexPage',
  layout: 'none ',
})
</script>
