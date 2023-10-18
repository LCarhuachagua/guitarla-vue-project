<script setup>
    import { ref } from 'vue'

    const numero = ref(0) 

    const props = defineProps({
        propGuitar: {
            type: Object,
            required: true
        }
    })

    const incrementar = () => {
        numero.value++
    }

</script>

<template>
  <!-- GUITARRA -->
  <div
    class="col-md-6 col-lg-4 my-4 row align-items-center"
  >
    <div class="col-4">
        <!-- Para atributos dinámicos, como la imagen se debe agregar al inicio v-bind: -->
      <img class="img-fluid" v-bind:src="'/img/'+ propGuitar.imagen + '.jpg'" :alt="'imagen guitarra' + propGuitar.nombre" />
    </div>
    <div class="col-8">
      <h3 class="text-black fs-4 fw-bold text-uppercase">
        {{ propGuitar.nombre }}
      </h3>
      <p>
        {{ numero }}
      </p>
      <p>
        {{ propGuitar.descripcion }}
      </p>
      <p class="fw-black text-primary fs-3">$ {{ propGuitar.precio }}</p>
      <button
        type="button" 
        class="btn btn-dark w-100"
        @click="incrementar" 
      >
      <!-- v-on:click="numero++" es un evento inline-handler -->
      <!-- v-on:click="incrementar" es un evento method-handler, se tiene que llamar una función arriba dentro de script -->
      <!-- los eventos no funcionan con solo : si no con un @ por ejemplo en vez de v-on:click sería @click -->
        Agregar al Carrito
      </button>
    </div>
  </div>
  <!-- FIN GUITARRA -->
</template>
