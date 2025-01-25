<template>
  <div>
    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{label}}</label>
    <input
      :value="value"
      @input="$emit('input', $event.target.value)"
      :type="type"
      class="rounded-lg border border-gray-300 p-3 text-sm shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'BaseInput',
  props: {
    label: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: false,
      default: ''
    }
  }
})
</script>
