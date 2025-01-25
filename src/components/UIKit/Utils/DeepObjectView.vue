<template>
  <div v-if="value && typeof value === 'object'" class="ml-4">
    <div v-for="(nestedValue, nestedKey) in value" :key="nestedKey" class="mb-2 flex">
      <div class="font-semibold text-gray-600">
        {{ formatKey(nestedKey) }}:
      </div>
      <DeepObjectView :value="nestedValue" />
    </div>
  </div>
  <div v-else class="ml-4">
    <p class="text-gray-800">{{ value }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'DeepObjectView',
  props: {
    value: {
      type: [Object, Array, String, Number, Boolean],
      required: true
    },
    keyIndex: {
      type: String,
      required: false
    }
  },
  methods: {
    formatKey (key: string) {
      return key ? key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1') : ''
    }
  }
})
</script>
