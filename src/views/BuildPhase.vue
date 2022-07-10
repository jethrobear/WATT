<template>
  <div>
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
import { defineComponent } from 'vue'
import { Stats } from '../data/stats'

export default defineComponent({
  data() {
    return {
      gunplas: new Array<Stats>()
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
      const websock = new WebSocket("ws://localhost")
      websock.send(JSON.stringify(this.gunplas))
    }
  }
})
</script>