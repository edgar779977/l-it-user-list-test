<template>
  <div>
    <ButtonModal
      title="User Info"
      buttonName="Show">
      <template #modalContent>
        <DeepObjectView :value="userData" />
      </template>
    </ButtonModal>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
const ButtonModal = () => import('@/components/UIKit/Modal/ButtonModal/ButtonModal.vue')
const DeepObjectView = () => import('@/components/UIKit/Utils/DeepObjectView.vue')
export default Vue.extend({
  name: 'ActionButton',
  props: {
    userData: {
      required: true,
      type: Object
    }
  },
  components: { ButtonModal, DeepObjectView },
  data () {
    return {
      showModal: false
    }
  }
})
</script>
