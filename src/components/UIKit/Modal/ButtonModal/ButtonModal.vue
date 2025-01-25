<template>
  <div>
    <div v-if="showModal" class="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
      <div class="bg-white rounded-lg shadow-lg max-w-xl w-full p-6">
        <h2 class="text-2xl font-bold mb-4">{{title}}</h2>
        <slot name="modalContent"></slot>
        <div class="flex justify-end">
          <button @click="showModal = false" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Close
          </button>
        </div>
      </div>
    </div>

    <button @click="showModal = true" class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
      {{buttonName}}
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ButtonModal',
  props: {
    buttonName: {
      required: true,
      type: String
    },
    title: {
      required: true,
      type: String
    }
  },
  data () {
    return {
      showModal: false
    }
  }
})
</script>
