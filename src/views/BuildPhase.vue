<template>
  <div>
    <h3>{{ gameId }}</h3>
    <b-button v-on:click="addGunpla" class="primary">Add Gunpla</b-button>
    <b-button v-on:click="formSubmit" class="primary">Confirm</b-button>
    <div class="accordion" role="tablist" v-for="(stats, idx) in gunplas" :key="'gunpla-' + (idx + 1)">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle="'gunpla-' + (idx + 1)" variant="info" class="w-100">
            Gunpla {{ idx + 1 }}
          </b-button>
        </b-card-header>
        <b-collapse :id="'gunpla-' + (idx + 1)" :accordion="'gunpla-' + (idx + 1)" role="tabpanel">
          <BuildGunpla :stats="stats" />
          <b-button class="primary" v-on:click="$data.gunplas.splice($data.gunplas.indexOf(stats), 1)">Delete</b-button>
        </b-collapse>
      </b-card>
    </div>
  </div>
</template>

<script lang="ts">
import BuildGunpla from '../components/BuildGunpla.vue'
import axios, { AxiosResponse } from 'axios'
import { defineComponent } from 'vue'
import { Stats } from '../data/stats'
import router from '@/router'
import { Game } from '@/data/game'

function onSuccess(value: AxiosResponse) {
  sessionStorage.setItem("gunplas", JSON.stringify(value.data))
  router.push({ name: "lobbyPhase" })
}

function onFail(value: AxiosResponse) {
  alert(value)
}

export default defineComponent({
  data() {
    return {
      gunplas: new Array<Stats>(),
      gameId: ""
    }
  },
  components: {
    BuildGunpla
  },
  methods: {
    addGunpla: function () {
      this.gunplas.push({} as Stats)
    },
    formSubmit: function () {
      axios.post("http://localhost:5000/api/build_phase", this.gunplas).then(onSuccess, onFail)
    },
  },
  async mounted() {
    const data: Game = (await axios.get("http://localhost:5000/api/game_detail", { withCredentials: true })).data
    if (data.gameId) {
      this.gameId = data.gameId
    } else {
      router.push({ name: "home" })
    }
  }
})
</script>