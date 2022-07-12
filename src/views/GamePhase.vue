<template>
    <h3>{{ phase }}</h3>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data() {
        return {
            "phase": "Initiative"
        }
    }
})
</script>
