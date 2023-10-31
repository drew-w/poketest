<template>
  <slot />
  <footer>
    <NuxtLink to="/" class="button"> Home </NuxtLink>
  </footer>
</template>

<style scoped>
footer {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}
.button {
  text-decoration: none;
  font-weight: 600;
  color: aliceblue;
  padding: 10px 30px;
  background-color: rgb(0, 128, 0);
  border-radius: 8px;
  transition-property: background-color;
  transition-duration: 100ms;
}
.button:hover {
  cursor: pointer;
  background-color: rgb(0, 90, 0);
}
</style>
