<template>
  <div class="error-parent">
    <div class="error-children">
      <h1 class="error-heading">Well...</h1>
      <p class="error-paragraph-status">
        404 Not found, I don't think it exists.
      </p>
    </div>
  </div>
</template>

<style lang="css" scoped>
.error-parent {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
}

.error-children {
  display: flex;
  flex-direction: column;
}

.error-heading {
  font-size: 3rem;
  font-weight: 900;
  text-align: center;
}

.error-paragraph-status {
  font-size: 1.2rem;
  text-align: center;
}
</style>
