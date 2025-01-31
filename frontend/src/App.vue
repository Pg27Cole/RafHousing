<template>
 <div id="app">
  <header>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
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

<style>

</style>