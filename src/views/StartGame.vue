<template>
  <div>
    <input type="text" v-model="gameId" />
    <button v-on:click="startGame">Start New Game</button>
    <button v-on:click="joinGame">Join Game</button>
  </div>
</template>

<script lang="ts">
import router from "@/router"
import { defineComponent } from "vue"
import { Game } from '../data/game'
import * as config from '../config'
import axios, { AxiosResponse } from 'axios'

function onSuccess(value: AxiosResponse) {
  router.push({ name: "buildPhase" })
}

function onFail(value: AxiosResponse) {
  alert(value)
}

function onGameDetailSuccess(value: AxiosResponse) {
  const data: Game = value.data
  if (data.gameId) {
    router.push({ name: "buildPhase" })
  }
}

function onGameDetailFail(value: AxiosResponse) {
  alert(value)
}

export default defineComponent({
  data() {
    return {
      gameId: null,
    }
  },
  methods: {
    startGame: () => {
      axios.get("http://" + config.WEBSOCKET_HOST + ":" + config.WEBSOCKET_POST + "/" + config.REST_STARTGAME_ENDPOINT, { withCredentials: true }).then(onSuccess, onFail)
    },
    joinGame: function () {
      axios.get("http://" + config.WEBSOCKET_HOST + ":" + config.WEBSOCKET_POST + "/" + config.REST_JOINGAME_ENDPOINT, {withCredentials: true, params:{gameId: this.gameId}}).then(onSuccess, onFail)
    }
  },
  created() {
    axios.get("http://localhost:5000/api/game_detail", { withCredentials: true }).then(onGameDetailSuccess, onGameDetailFail)
  }
})
</script>