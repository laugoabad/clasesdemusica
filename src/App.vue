<template>
  <div id="app" class="container-fluid">
    <nav class="navbar navbar-expand fixed-top ml-auto">
      <router-link class="navbar-brand " to="/">
        <img src="./assets/imgs/logo.png" alt="hoja" />
      </router-link>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto mr-auto text-center navegacion ">
          <li v-for="(item, index) of arregloRouter" :key="index" class="nav-item">
            <router-link v-bind:to="item.ruta">{{item.nombre}}</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <transition name="fade">
      <router-view />
    </transition>
    <div>
      <footer id="foot">
        <foot></foot>
      </footer>
    </div>
  </div>
</template>


<script>
import Foot from "./components/Foot.vue";
export default {
  name: "App",
  components: {
    Foot
  },
  data() {
    return {
      arregloRouter: [
        { nombre: "HOME", ruta: "/" },
        { nombre: "ACERCA DE MÍ", ruta: "/acerca" },
        { nombre: "BLOG", ruta: "/blog" },
        { nombre: "CONTACTO", ruta: "/contacto" }
      ],
    };
  }
};
</script>

<style lang="scss" scoped>
@import "./../public/css/styles.scss";

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

nav {
  padding: 1.4em;
  background-color: rgba(256,256,256,0.6);
  a {
    color: black;
    font-weight: 600;

    &.router-link-exact-active {
      color: black;
      text-decoration: none;
      font-weight: 800;
    }
  }

  .nav-item a {
    padding: 0.6em 0.2em 0.2em 0.2em;
    font-size: 1.1em;
    letter-spacing: 0.16em;
  }
  .nav-item a:hover {
    text-decoration: none;
    border-top: 1px solid black ;
  }
}

.navbar-brand img {
  width: 1.4em;
}


.fade-enter-active, .fade-leave-active {
   transition: opacity 1s;
   transition-timing-function: ease-in-out;
}

.fade-enter, .fade-leave-to {
  opacity :0;
}

/*-------------------------------------------------------------*/
@media (min-width: 768px) {
  .navbar-brand img {
    width: 2em;
  }

  nav {
    padding: 2em;
    .nav-item a {
      font-size: 1.4em;
      padding: 0.5em 1.4em 0.4em 1.4em;
    }
  }
 
}

/*------------------------------------------------------------------------------*/
@media (min-width: 1440px) {
  .navbar-brand img {
    width: 3em;
  }

  nav {
    padding: 2.4em;
    .nav-item a {
      font-size: 1.8em;
      padding: 0.5em 1.4em 0.4em 1.4em;
    }
  }
}
</style>
