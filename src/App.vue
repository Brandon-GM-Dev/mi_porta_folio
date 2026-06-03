<script setup>
import { RouterView } from "vue-router";
import BaseNavbar from '@components/BaseNavbar.vue';
import BaseFooter from '@components/BaseFooter.vue';
</script>

<template>
  <header>
    <BaseNavbar/>
  </header>
  <main>
    <RouterView/>
  </main>
  <footer>
    <BaseFooter/>
  </footer>
</template>