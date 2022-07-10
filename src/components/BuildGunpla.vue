<template>
  <b-form>
    <b-form-group label="Unit Cost">
      <b-form-input v-model="$props.stats.uc" type="number"></b-form-input>
    </b-form-group>
    <b-form-group label="Activation Cost">
      <b-form-input v-model="$props.stats.ac" type="number"></b-form-input>
    </b-form-group>
    <b-form-group label="Shoot Damage">
      <b-form-input v-model="$props.stats.shoot" type="number"></b-form-input>
    </b-form-group>
    <b-form-group label="Melee Damage">
      <b-form-input v-model="$props.stats.melee" type="number"></b-form-input>
    </b-form-group>
    <b-form-group label="HP">
      <b-form-input v-model="$props.stats.hp" type="number"></b-form-input>
    </b-form-group>
  </b-form>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  props:[
    'stats'
  ],
  name: "build-gunpla"
})
</script>