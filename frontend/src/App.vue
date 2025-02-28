<template>
 <div id="app">
  <header>
    <nav>
      <router-link to="/" class="link">Home</router-link>
      <router-link to="/about"class="link">About</router-link>
      <router-link to="/contact" class="link">Contact</router-link>
      <router-link to="/leaderboard" class="link">Leaderboard</router-link>
    </nav>
  </header>
  <main>
    <router-view/>
  </main>
 </div>
</template>

<script>
  export default {
    name: 'App',
  }
</script>

<style scoped>

.link {
    font-size: 2vw;
    margin: 1vw;
  }



  @media not screen and (max-width: 850px) {
      .link {
        font-size: 1vw;
      }
    }

    header {
      margin: 0vw;
    }

    nav {
      border: 1px solid black;
      border-radius: 1vh;
      padding: 5px;
    }

    
    .link {
      transition: all ease-in-out 0.25s;
      padding: 0px;
    }
    
    .link:hover {
      padding: 5px;
    }


</style>