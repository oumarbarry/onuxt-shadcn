<script setup lang="ts">
useHead({
  titleTemplate: title => title ? `${title} - My Website` : "My Website",
})
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
