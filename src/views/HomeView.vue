<script setup lang="ts">
import { useHead } from '@unhead/vue'
useHead({
  title: 'GDVNPS',
  meta: [
    {
      name: 'description',
      content: 'Chào mừng đã đến với trang web chính thức của GDVNPS',
    },
  ],
})
</script>

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
            <div class="tracking-wide">Chào mừng bạn đến với</div>
            <div
              class="pt-2 text-4xl/[1.1] tracking-wide md:text-5xl/[1.1] xl:text-6xl/[1.1]"
            >
              GDVNPS
            </div>
          </h1>
        </div>
        <p class="font-bevnpro">
          Là một trong những máy chủ Geometry Dash riêng tư đầu tiên được khởi
          chạy với hệ thống đánh giá thấp, khả năng tải lên nhạc bản quyền mà
          vẫn có thể sử dụng bình thường, và hơn nữa là chúng tôi mở nó trên một
          máy chủ có tốc độ cao.
        </p>
        <h1 class="font-bevnpro">Mọi khoản phí đóng góp xin hãy gửi vào:</h1>
        <div
          class="mx-5 mt-4 rounded-xl bg-gradient-to-tr from-blue-800 to-red-700 p-5 font-bevnpro"
        >
          <h1>Vietinbank: 106803956888</h1>
        </div>
        <p class="font-bevnpro">Cảm ơn vì đã đóng góp và chơi GDVNPS!</p>
      </div>
    </section>
  </main>
</template>
