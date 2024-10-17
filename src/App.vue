<script lang="ts" setup>
import NavbarComponent, { isNavbarOpen } from './components/NavbarComponent.vue'
</script>

<template>
  <NavbarComponent />
  <div :class="{ hidden: isNavbarOpen, '': !isNavbarOpen }">
    <RouterView />
  </div>
</template>
