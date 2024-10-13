<template>
  <header class="shadow">
    <nav class="container">
      <nav class="flex w-full items-center justify-between">
        <div>
          <RouterLink to="/" title="Trang chủ">
            <img
              class="pointer-events-none rounded-2xl"
              src="@/assets/gdps_icon.jpg"
              alt="GDVNPS's logo"
              width="55"
              height="55"
              loading="eager"
            />
          </RouterLink>
        </div>
        <div
          class="hidden shrink flex-row items-center gap-16 text-base lg:flex"
        >
          <RouterLink to="/" class="link" title="Trang chủ"
            >Trang chủ</RouterLink
          >
          <RouterLink to="/download" class="link" title="Tải xuống"
            >Tải xuống</RouterLink
          >
          <a href="/dashboard" class="link" title="Dashboard">Dashboard</a>
        </div>
      </nav>
    </nav>
  </header>
</template>

<style lang="css">
.container {
  @apply mx-auto flex h-20 w-full max-w-7xl px-4 md:px-8;
}

.link {
  @apply text-center font-light text-slate-300 duration-300 hover:text-slate-100;
}
</style>
