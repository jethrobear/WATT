<template>
    <div>
        <h3>Waiting for participants</h3>
        <b-button>Start</b-button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    created(){
        const sock = new WebSocket("ws://localhost:5000/api/lobby")
        sock.onmessage = function(e){
            console.log(e)
        }
        sock.onopen = function(e){
            sock.send(JSON.stringify({gameId: sessionStorage.getItem("gameId"), machineId: sessionStorage.getItem("machineId")}))
        }
    }
})
</script>
