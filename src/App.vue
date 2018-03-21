<template>
  <div id="app">
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <img src="./assets/logo.svg" alt="Netflix" width="112" height="28">
          </a>

           <div class="navbar-menu">
            <div class="navbar-end">
              <!-- Upload button here -->
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>


<script>

export default {

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #e5e5e5;
  background-color: #000;
  padding-top: 30px;
}

.navbar {
  background-color: transparent;
  z-index: 2;
  padding: 30px 0;
}

.navbar-item {
  height: 25px;
  width: auto;
}
</style>
