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
import { Host } from '../data/host'

export default defineComponent({
  data() {
    return {
      gameId: null,
    }
  },
  methods: {
    startGame: () => {
      console.log('Start')
      // TODO: No need for startType, the API calls will generate user codes for you
      router.push({ name: "buildPhase", params: { startType: Host.HOST } })
    },
    joinGame: function () {
      if (this.gameId) {
        console.log('Join')
        router.push({ name: "buildPhase", params: { startType: Host.PARTICIPANT } })
      }
    },
  }
})
</script>