<script lang="ts">
import { defineComponent } from 'vue'
import { useHead } from '@unhead/vue'
export default defineComponent({
  setup() {
    const goToUrl = (url: string) => {
      window.location.href = url
    }
    return {
      goToUrl,
    }
  },
})

useHead({
  title: 'Tải xuống - GDVNPS',
  meta: [
    {
      name: 'description',
      content: 'Tải xuống GDVNPS cho các thiết bị',
    },
  ],
})
</script>

<style scoped>
@import 'primeicons/primeicons.css';
</style>
<template>
  <main class="relative z-10 flex flex-1 flex-col">
    <section class="relative">
      <div
        class="mx-auto mt-32 flex w-full flex-col items-center justify-center gap-5 px-4 sm:max-w-screen-md sm:px-8 md:mt-20 md:gap-6 lg:mt-24 lg:gap-8"
      >
        <div class="flex flex-col items-center">
          <h1
            class="mb-4 text-balance text-center font-bevnpro text-3xl/[1.1] font-bold sm:max-w-[24ch] md:text-4xl/[1.1] xl:text-5xl/[1.1]"
          >
            <div class="tracking-wide">Tải xuống</div>
            <div
              class="pt-2 text-4xl/[1.1] tracking-wide md:text-5xl/[1.1] xl:text-6xl/[1.1]"
            >
              GDVNPS
            </div>
          </h1>
        </div>
      </div>
    </section>
  </main>
  <div
    class="mx-5 mt-4 rounded-xl bg-gradient-to-tr from-slate-700 to-slate-800 p-5"
  >
    <div class="flex flex-col items-center justify-center p-1.5">
      <h2 class="text-3xl font-semibold">GDVNPS latest</h2>
      <div class="flex">
        <p>Có sẵn cho:</p>
        <div class="flex pl-1">
          <span class="p-1">
            <i class="pi pi-microsoft" title="Windows"></i>
          </span>
          <span class="p-1">
            <i class="pi pi-android" title="Android"></i>
          </span>
          <span class="p-1">
            <i class="pi pi-apple" title="iPhone"></i>
          </span>
        </div>
      </div>
    </div>
    <div class="mt-1 flex justify-center">
      <div
        class="w-fit cursor-pointer rounded-lg border-2 border-gray-800 px-16 py-4 duration-200 hover:border-gray-600"
        @click="
          goToUrl('https://github.com/TacoEnjoyer/gdvnps/releases/latest')
        "
      >
        <div>
          <div class="flex justify-center pb-0.5">
            <i class="pi pi-github" style="font-size: 50px"></i>
          </div>
          <h3 class="text-center text-2xl font-medium">Github</h3>
        </div>
      </div>
    </div>
  </div>
</template>
