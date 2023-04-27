<template>
  <b-container class="text-center mt-5">
    <div class="text-danger">
      <h1><b-icon-x-circle /> Ops! <b-icon-x-circle /></h1>
    </div>
    <b-img
      src="imgs/error/error-zeca-urubu.jpg"
      fluid
      alt=""
      width="200px"
      sizes="2"
    />
    <h2>
      Você esta tendando conteudo que nem eu sei. <br />
      Perdão mas ou não temos ou nunca teremos esse conteudo.
    </h2>
    <h4><nuxt-link to="/">Voltar a início</nuxt-link></h4>
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'ErrorPage',
})
</script>
