<script setup lang="ts">
import { DiscordIcon, MenuIcon } from '@/assets/icon'
import { ref } from 'vue'
</script>

<script lang="ts">
export const isNavbarOpen = ref(false)
</script>

<template>
  <header
    class="sticky z-50 w-full bg-black/30 shadow backdrop-blur-xl transition-all"
  >
    <nav class="container">
      <nav class="flex w-full items-center justify-between">
        <div>
          <RouterLink to="/" title="Trang chủ">
            <img
              class="pointer-events-none rounded-2xl"
              src="@/assets/gdps_icon.jpg"
              alt="GDVNPS's logo"
              width="50"
              height="50"
              loading="eager"
            />
          </RouterLink>
        </div>
        <div
          class="hidden shrink flex-row items-center gap-16 text-base lg:flex"
        >
          <RouterLink to="/" class="nav-link" title="Trang chủ"
            >Trang chủ</RouterLink
          >
          <RouterLink to="/download" class="nav-link" title="Tải xuống"
            >Tải xuống</RouterLink
          >
          <a href="/browser" class="nav-link" title="Browser">Browser</a>
          <a href="/dashboard" class="nav-link" title="Dashboard">Dashboard</a>
        </div>
        <div class="hidden gap-4 sm:flex">
          <a
            href="https://discord.gg/SmBs7xGSWM"
            title="Discord"
            class="link-text"
          >
            <DiscordIcon :width="28" :height="28" />
          </a>
        </div>
      </nav>
      <button
        @click="isNavbarOpen = !isNavbarOpen"
        class="nav-link ml-6 lg:hidden"
        title="Menu Bar"
        :aria-expanded="`${isNavbarOpen ? 'true' : 'false'}`"
      >
        <MenuIcon />
      </button>
    </nav>
    <div
      class="absolute top-0 -z-10 flex w-full items-center justify-center lg:hidden"
      :class="{
        'hidden -translate-x-4 opacity-0': !isNavbarOpen,
        'h-screen translate-x-0 bg-black opacity-100': isNavbarOpen,
      }"
    >
      <nav class="flex flex-col py-6 text-left text-xl [&>*]:p-6">
        <RouterLink
          @click="isNavbarOpen = !isNavbarOpen"
          to="/"
          class="nav-link"
          title="Trang chủ"
          >Trang chủ</RouterLink
        >
        <RouterLink
          @click="isNavbarOpen = !isNavbarOpen"
          to="/download"
          class="nav-link"
          title="Tải xuống"
          >Tải xuống</RouterLink
        >
        <a
          @click="isNavbarOpen = !isNavbarOpen"
          href="/browser"
          class="nav-link"
          title="Browser"
          >Browser</a
        >
        <a
          @click="isNavbarOpen = !isNavbarOpen"
          href="/dashboard"
          class="nav-link"
          title="Dashboard"
          >Dashboard</a
        >
        <div class="flex flex-col gap-6">
          <a
            href="https://discord.gg/SmBs7xGSWM"
            title="Discord"
            class="nav-link flex items-center justify-center"
          >
            <span><DiscordIcon :width="26" :height="26" /></span
            ><span>Discord</span>
          </a>
        </div>
      </nav>
    </div>
  </header>
</template>

<style lang="css">
.container {
  @apply mx-auto flex h-20 w-full max-w-7xl items-center px-4 md:px-8;
}

.nav-link {
  @apply fill-slate-300 text-center font-light tracking-tight text-slate-300 no-underline duration-300 hover:fill-slate-100 hover:text-slate-100;
}
</style>
