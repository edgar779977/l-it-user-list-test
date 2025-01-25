<template>
  <div class="home">
    <div class="p-4">
      <div class="flex gap-5 flex-wrap mb-8">
        <BaseSelect
          v-model="email"
          label="Filter By Email"
          :options="allEmailListSelect"
        />
        <BaseInput
          v-model="username"
          type="text"
          label="Search by Username" />
      </div>

      <DataTable
        title="Users"
        :action="true"
        :tableHeaders=" ['Id', 'Name', 'Username', 'Email', 'City']"
        :tableData="allUsers">
        <template #action="{ row }">
          <ActionButton :userData="getUserById(row.id)" />
        </template>
      </DataTable>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import _ from 'lodash'
import { mapActions, mapGetters } from 'vuex'
const BaseSelect = () => import('@/components/UIKit/Form/BaseSelect/BaseSelect.vue')
const BaseInput = () => import('@/components/UIKit/Form/BaseInput/BaseInput.vue')
const DataTable = () => import('@/components/UIKit/DataTable/DataTable.vue')
const ActionButton = () => import('@/components/UserList/Actions/ActionButton.vue')

export default Vue.extend({
  name: 'UsersList',
  components: { BaseSelect, DataTable, BaseInput, ActionButton },
  data () {
    return {
      username: this.$route.query.username || '',
      email: this.$route.query.email || ''
    }
  },
  computed: {
    ...mapGetters('users', ['allUsers', 'allEmailListSelect', 'getUserById'])
  },
  watch: {
    username: _.debounce(function (this: any, newVal: string) {
      this.updateQueryParams({ username: newVal, email: this.email })
      this.fetchUsers({ username: newVal, email: this.email })
    }, 300),
    email: {
      handler (newVal: string) {
        this.updateQueryParams({ username: this.username, email: newVal })
        this.fetchUsers({ username: this.username, email: newVal })
      },
      immediate: false
    }
  },
  methods: {
    ...mapActions('users', [
      'fetchUsers',
      'fetchUsersEmail'
    ]),
    updateQueryParams (params: { username: string | any; email: string }) {
      this.$router.push({
        query: {
          username: params.username,
          email: params.email
        }
      })
    }
  },
  created () {
    this.fetchUsers({ username: this.username, email: this.email })
    this.fetchUsersEmail()
  }
})
</script>
