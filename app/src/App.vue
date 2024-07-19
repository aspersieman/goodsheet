<script setup lang="ts">
import { RouterView } from 'vue-router'
import { onMounted, onBeforeUnmount } from 'vue'
import { initFlowbite } from 'flowbite'
import { getCurrentInstance } from 'vue'
import type { ComponentInternalInstance } from 'vue'

import NavBar from './components/NavBar.vue'
import FooterBar from './components/FooterBar.vue'

onMounted(() => {
  initFlowbite()
})
</script>

<template>
  <div class="flex flex-col h-screen justify-between">
    <NavBar />
    <RouterView v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
    <FooterBar />
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
