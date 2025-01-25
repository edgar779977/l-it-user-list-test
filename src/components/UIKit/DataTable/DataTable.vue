<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">{{title}}</h1>
    <div class="overflow-x-auto">
      <table class="table-auto w-full border-collapse border border-gray-300">
        <thead>
        <tr class="bg-gray-200">
          <th v-for="(header, headerIndex) in tableHeaders" :key="headerIndex" class="px-4 py-2 border border-gray-300 text-left">{{header}}</th>
          <th v-if="action" class="px-4 py-2 border border-gray-300 text-left">Actions</th>
        </tr>
        </thead>
        <tbody>
        <tr
          v-for="(row, rowIndex) in tableData"
          :key="rowIndex"
          class="even:bg-gray-100 hover:bg-gray-50"
        >
          <td
            v-for="(item, itemIndex) in row"
            :key="itemIndex"
            class="px-4 py-2 border border-gray-300"
          >
            {{ item }}
          </td>
          <td v-if="action" class="px-4 py-2 border border-gray-300">
            <slot name="action" :row="row"></slot>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'DataTable',
  props: {
    title: {
      type: String,
      required: true
    },
    tableHeaders: {
      type: Array as () => string[],
      required: true
    },
    tableData: {
      type: Array as () => Record<string, any>[],
      required: true
    },
    action: {
      type: Boolean,
      default: false
    }
  }
})
</script>
