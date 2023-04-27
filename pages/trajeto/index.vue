<template>
  <b-container class="py-4">
    <b-row>
      <b-col>
        <h4>Vamos nessa!</h4>
        <p>
          Você está esperando a linha
          <strong> {{ lineData?.name }}</strong>
        </p>
        <p>
          Seu ponto atual é o <strong>{{ selectedBusStop?.name }}</strong>
        </p>
        <p></p>
        <strong>Previsão de chegada: </strong
        ><span>{{ timeExpectedForBusArrival() }} </span>
        <span v-if="userSelectBusLate" class="text-danger"
          >(Foi sinalizado atraso)</span
        >
        <div>
          <b-card class="text-center">
            <b-button
              id="button-success-bus-arrival"
              variant="success"
              class="mr-5"
            >
              Chegou! </b-button
            ><b-popover
              target="button-success-bus-arrival"
              variant="success"
              triggers="focus"
              placement="bottom"
            >
              <template #title>Uhull!</template>
              Boa viajem!
            </b-popover>
            <b-button
              id="button-bus-late"
              variant="danger"
              @click="userSelectBusLate = true"
              >Atraso!
            </b-button>
            <b-popover
              target="button-bus-late"
              variant="danger"
              triggers="focus"
              placement="bottom"
            >
              <template #title>Sentimos muito pelo atraso</template>
              Vamos avisar os proximos passageiros de proximos pontos que houve
              um atraso. Obrigado por ajudar a não perder o tempo.
            </b-popover>
          </b-card>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <div class="container-timeline">
          <div class="wrapper">
            <h1>Acompanhe aqui como está a situação 😅</h1>
            <ul class="sessions">
              <li v-for="(date, index) in lineByDateToday" :key="index">
                <div :class="actualBusStop(index)">
                  <div class="time"> 
                    <h4>Publico: {{date.estimatedTime}}</h4>
                  </div>
                  <div class="time">Oficial: {{  date.standardTime }}</div>
                  <p
                    v-if="Number($route.query.selectedBusStop) > index"
                    class="text-danger"
                  >
                    Foi registrado um atraso no ônibus.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue'
import * as busStopsJson from '~/static/data/busStops.json'
export default Vue.extend({
  name: 'TrajetoPage',
  data() {
    return {
      userSelectBusLate: false,
      lineData: busStopsJson.find(
        (busStop) => busStop.id === this.$route.query.selectedLine
      ),
    }
  },
  computed: {
    lineByDateToday(): any {
      const date = new Date()
      const day = date.getUTCDay()
      let lineTimeForToday: any = this.lineData?.standardTime

      if (day > 0 && day < 6) {
        lineTimeForToday = this.lineData?.standardTime?.weekday
      } else {
        lineTimeForToday = this.lineData?.standardTime?.weekend
      }

      this.timeExpectedForBusArrival()
      const linesWithLateTime = this.lineData?.stops?.map((stop: any) => {
        return {
          ...stop,
        }
      })
      return linesWithLateTime
    },
    selectedBusStop(): any {
      const alog = this.lineData?.stops?.at(
        parseInt(this.$route.query.selectedBusStop.toString())
      )
      return alog
    },
  },
  methods: {
    timeExpectedForBusArrival() {
      const date = new Date()
      const day = date.getDay()

      let lineTimeForToday: any = this.lineData?.standardTime
      let timeExpectedForBusArrival = ''
      if (day > 0 && day < 6) {
        lineTimeForToday = this.lineData?.standardTime?.weekday
      } else {
        lineTimeForToday = this.lineData?.standardTime?.weekend
      }

      timeExpectedForBusArrival =
        lineTimeForToday[this.$route.query.selectedBusStop.toString()]
      return timeExpectedForBusArrival
    },
    splitLateTime(time: string) {
      const hour = time.split(':')[0]
      const minute =
        parseInt(time.split(':')[1]) + Math.floor(Math.random() * 20)

      if (minute > 59) {
        const newHour = parseInt(hour) + 1
        return `${newHour}:${minute - 60}`
      } else {
        return `${hour}:${minute}`
      }
    },
    actualBusStop(index: any) {
      return this.$route.query.selectedBusStop === index.toString()
        ? 'bg-your-bus-stop p-2'
        : ''
    },
  },
})
</script>

<style scoped>
.bg-your-bus-stop {
  background-color: #8ed67f;
}

ul,
li {
  list-style: none;
  padding: 0;
}
.container-timeline {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  padding: 3rem 0;
}
.wrapper {
  background: #b8cfe0;
  padding: 2rem;
  border-radius: 15px;
}
h1 {
  font-size: 1.1rem;
  font-family: sans-serif;
}
.sessions {
  margin-top: 2rem;
  border-radius: 12px;
  position: relative;
}
li {
  padding-bottom: 1.5rem;
  border-left: 1px solid #abaaed;
  position: relative;
  padding-left: 20px;
  margin-left: 10px;
}
li:last-child {
  border: 0px;
  padding-bottom: 0;
}
li:before {
  content: '';
  width: 15px;
  height: 15px;
  background: white;
  border: 1px solid #4e5ed3;
  box-shadow: 3px 3px 0px #bab5f8;
  box-shadow: 3px 3px 0px #bab5f8;
  border-radius: 50%;
  position: absolute;
  left: -10px;
  top: 0px;
}
.time {
  color: #2a2839;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
}
@media screen and (min-width: 601px) {
  .time {
    font-size: 0.9rem;
  }
}
@media screen and (max-width: 600px) {
  .time {
    margin-bottom: 0.3rem;
    font-size: 0.85rem;
  }
}
p {
  color: #4f4f4f;
  font-family: sans-serif;
  line-height: 1.5;
  margin-top: 0.4rem;
}
@media screen and (max-width: 600px) {
  p {
    font-size: 0.9rem;
  }
}
</style>
