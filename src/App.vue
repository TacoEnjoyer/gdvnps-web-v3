<script lang="ts" setup>
import NavbarComponent, { isNavbarOpen } from './components/NavbarComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
</script>

<template>
  <NavbarComponent />
  <div :class="{ hidden: isNavbarOpen, '': !isNavbarOpen }">
    <RouterView />
  </div>
  <FooterComponent> </FooterComponent>
</template>
