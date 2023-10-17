<script setup>
    const props = defineProps({
        propGuitar: {
            type: Object,
            required: true
        }
    })
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
        {{ propGuitar.descripcion }}
      </p>
      <p class="fw-black text-primary fs-3">$ {{ propGuitar.precio }}</p>
      <button type="button" class="btn btn-dark w-100">
        Agregar al Carrito
      </button>
    </div>
  </div>
  <!-- FIN GUITARRA -->
</template>
