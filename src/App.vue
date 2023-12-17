<script setup>

import Header from "@/components/structure/Header.vue";
import Footer from "@/components/structure/Footer.vue";
</script>

<template>

  <div class="">

    <Header/>

    <router-view/>

    <Footer/>

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
