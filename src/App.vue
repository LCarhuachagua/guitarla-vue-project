<!-- <script setup>
</script>

<template>
  
</template>

<style scoped>

</style> -->

<!-- Se recomienda trabajar con CompositionAPi ya que permite tener un código más reutilizable y para proyectos nuevos con complejidades.-->
<script setup> // Se coloca setup para trabajar con Composition API, si se quita se estaría trabajando con options API
  import {ref, reactive, onMounted} from 'vue' // Se importa el objeto vue para trabajar con Composition API y los hooks ref y reactive
  // funciones que da vue js para manejar la reactividad en los componentes
  import {db} from './data/guitarras'
  import Guitarra from './components/guitarra.vue'
  import Footer from './components/Footer.vue'
  import Header from './components/Header.vue'

  // const state = reactive({
  //   guitarras: db
  // })
  // console.log(state.guitarras)

  // const guitarras = ref (db) // Se crea una referencia a la data
  //Se puede crear una referencia con un state de esta forma:
  const guitarras = ref([])

  const carrito = ref([])
  // onMounted es un hook que se ejecuta cuando el componente se monta en el DOM
  onMounted(() => {       // Se puede usar para hacer peticiones a una API
    guitarras.value = db
  })

  const agregarCarrito = (propGuitar) =>{
  // const incrementar = () => {
        // numero.value++
        // alert('Diste click en el botón')
        // console.log(propGuitar)
        const existeCarrito = carrito.value.findIndex(producto => producto.id === propGuitar.id)

        if(existeCarrito >= 0){
          carrito.value[existeCarrito].cantidad++
        }else{
          propGuitar.cantidad = 1
          carrito.value.push(propGuitar)
        }
    }

  
</script>

<template>
  
  <Header
    :propCarrito="carrito"
  ></Header>

  
  <main class="container-xl mt-5">
    <h2 class="text-center">Nuestra Colección</h2>
    
    <!-- En la linea 130 Se puede poner sin el v-bind de frente los : puntos -->
    <div class="row mt-5">
      <guitarra
        v-for="guitarra in guitarras"
        :propGuitar="guitarra"
        @agregar-carrito="agregarCarrito"
      />
    </div>
  </main>

  <Footer></Footer>
  
</template>
