<template>
  <b-container class="text-center">
    <b-row class="my-3">
      <b-col>
        <label>Linha de onibus</label>
        <b-form-select v-model="selectedLine" :options="busLineSelector">
          <template #first>
            <b-form-select-option :value="null" disabled
              >-- Selecione a linha que deseja viajar --</b-form-select-option
            >
          </template>
        </b-form-select>
      </b-col>
    </b-row>
    <b-row class="my-3">
      <b-col>
        <label>Qual ponto de entrada?</label>
        <b-form-select v-model="selectedBusStop" :options="busStopSelector">
          <template #first>
            <b-form-select-option v-if="busStopSelector" :value="null" disabled
              >-- Selecione aqui o ponto que deseja pegar
              --</b-form-select-option
            >
            <b-form-select-option v-else :value="null" disabled
              >-- Não há pontos disponíveis --</b-form-select-option
            >
          </template>
        </b-form-select>
      </b-col>
    </b-row>
    <b-row class="my-4">
      <b-col>
        <b-button
          :disabled="selectedBusStop?.length > 0 ? true : false"
          variant="primary"
          @click="routeToRoutePage()"
        >
          Bora planejar!
        </b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { BusLine } from '~/model/entity/busLine.entity'
import * as busStopsJson from '~/static/data/busStops.json'
export default Vue.extend({
  name: 'IndexPage',
  loading: true,
  data() {
    return {
      selectedLine: '',
      selectedBusStop: '',
    }
  },
  computed: {
    busStops(): BusLine[] {
      const busStops: any[] = busStopsJson.map((busStop) => busStop)
      return busStops
    },
    busLineSelector() {
      const busStops: BusLine[] = this.busStops as BusLine[]

      const busLineSelector = busStops.map((busStop) => {
        return { value: busStop.id, text: busStop.id + ' ' + busStop.name }
      })
      return busLineSelector
    },
    busStopSelector() {
      const busStops: BusLine[] = this.busStops as BusLine[]

      const busStopSelector = busStops.find((busStop) => {
        if (this.selectedLine.toString() === busStop.id?.toString()) {
          return busStop.stops
        } else return null
      })
      if (busStopSelector != null) {
        const busStops = busStopSelector.stops?.map((stop, index) => {
          return { value: index, text: stop.name }
        })
        return busStops
      } else return null
    },
  },
  methods: {
    routeToRoutePage() {
      this.$nextTick(() => {
        this.$nuxt.$loading.start()
        setTimeout(() => this.$nuxt.$loading.finish(), 1000)
      })
      this.$router.push({
        path: '/trajeto',
        query: {
          selectedLine: this.selectedLine,
          selectedBusStop: this.selectedBusStop,
        },
      })
    },
  },
})
</script>
