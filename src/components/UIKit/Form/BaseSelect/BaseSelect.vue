<template>
  <div>
    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{label}}</label>
    <select
      :value="value"
      @input="$emit('input', $event.target.value)"
      class="bg-gray-50 rounded-lg border border-gray-300 p-3 text-sm shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50">
      <option
        v-for="(option, key) in options"
        :selected="option.value === value"
        :value="option.value"
        :key="key">
        {{option.label}}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface Option {
  label: string
  value: string
}

export default Vue.extend({
  name: 'BaseSelect',
  props: {
    label: {
      type: String,
      required: true
    },
    options: {
      type: Array as () => Option[],
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
