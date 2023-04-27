<template>
  <b-container>
    <h3>Guia de ajuda</h3>
    <p>
      Aqui você encontra todas as informações necessárias para o uso do
      aplicativo.
    </p>
    <p>
      Esse projeto foi feito como trabalho para a Unesp Bauru para facilitar a
      vida dos usarios da linha de onibus
    </p>
    <b-card no-body class="overflow-hidden">
      <b-row>
        <b-col>
          <b-card-body title="Passo 1">
            <b-card-text>
              A ferramenta funciona de forma simples, onde o usuario comeca sua
              jornada selecionando qual linha quer pegar, e em qual ponto esta
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-card-img
            src="imgs/ajuda/seletar-rota.png"
            alt="Image"
            fluid
            class="rounded-0"
          ></b-card-img>
        </b-col>
      </b-row>
    </b-card>

    <b-card no-body class="overflow-hidden">
      <b-row>
        <b-col>
          <b-card-body title="Passo 2">
            <b-card-text>
              Após isso, o usuario pode escolher qual ponto de saida deseja ir,
              e o aplicativo irá mostrar todos os pontos de saida disponiveis
              para o usuario
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-card-img
            src="imgs/ajuda/planejamento-onibus-modelo.png"
            alt="Image"
            fluid
            class="rounded-0"
          ></b-card-img>
        </b-col>
      </b-row>
      <b-card-body>
        <b-card-text>
          <p >
            Com isso, o usuario pode votar em qual a situacao do onibus
            atualmente, se ele esta dentro do horario, ou se o mesmo se encontra
            atrasado.
          </p>
          <p class="text-success"   >
            Caso ele esteja atrasado, os usuarios dos proximos pontos estaram
            cientes do atraso, e assim auxiliando o futuro passageiro a fazer
            uma decisao se prefere ou nao esperar o onibus com atraso
          </p>
        </b-card-text>
      </b-card-body>
    </b-card>
    <p>
      O aplicativo foi desenvolvido com o framework Vue.js e o componente
      Bootstrap 4.
    </p>
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'IndexPage',
  layout: 'none ',
})
</script>
