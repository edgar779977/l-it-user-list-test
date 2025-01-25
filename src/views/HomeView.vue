<template>
  <div class="home">
    <UsersList />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
const UsersList = () => import('@/components/UserList/UserList.vue')

export default Vue.extend({
  name: 'HomeView',
  components: { UsersList }
})
</script>
