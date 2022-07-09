<template>
  <div>
    <b-form v-on:submit="formSubmit">
      <b-form-group label="Unit Cost">
        <b-form-input v-model="stats.uc" type="number"></b-form-input>
      </b-form-group>
      <b-form-group label="Activation Cost">
        <b-form-input v-model="stats.ac" type="number"></b-form-input>
      </b-form-group>
      <b-form-group label="Shoot Damage">
        <b-form-input v-model="stats.shoot" type="number"></b-form-input>
      </b-form-group>
      <b-form-group label="Melee Damage">
        <b-form-input v-model="stats.melee" type="number"></b-form-input>
      </b-form-group>
      <b-form-group label="HP">
        <b-form-input v-model="stats.hp" type="number"></b-form-input>
      </b-form-group>
      <input type="submit" />
    </b-form>
  </div>
</template>

<script lang="ts">
import { Host } from "@/data/host"
import { defineComponent } from "vue"
import { Stats } from '../data/stats'

export default defineComponent({
  data() {
    return {
      stats: {
        uc: 0,
        ac: 0,
        shoot: 0,
        melee: 0,
        hp: 0
      } as Stats
    }
  },
  methods: {
    formSubmit: function () {
      if (this.$route.params.startType == Host.HOST) {
        console.log()
      } else if (this.$route.params.startType == Host.PARTICIPANT) {
        console.log()
      }
    }
  }
})
</script>