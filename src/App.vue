<script setup>

import Header from "@/components/structure/Header.vue";
</script>

<template>

  <div class="gradiente">

    <Header/>

    <router-view/>

  </div>


</template>

<style scoped>

.gradiente {
  /* Definindo um gradiente linear da esquerda para a direita */
  background: linear-gradient(to bottom, #e0ad82, #bf7e56, #bf7e56);

  /* Adicionando outras propriedades de estilo conforme necessário */
  width: 100%;
  height: 100vh; /* Ajuste conforme necessário */
}



</style>
