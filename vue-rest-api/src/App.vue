<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="max-w-7xl mx-60 ">
      <nav class="p-2">
        <RouterLink class="px-4 py-2 mx-10" to="/" >Home</RouterLink>
        <RouterLink to="/sales">Sales</RouterLink>
      </nav>
    </div>
  </header>

  <main class="max-w-xl mx-auto min-h-screen">
    <RouterView />
  </main>
</template>