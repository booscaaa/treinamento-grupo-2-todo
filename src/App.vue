<template>
  <v-app>
    <div id="app">
      <router-view />
      <cgi-snackbar></cgi-snackbar>
      <cgi-alert></cgi-alert>
    </div>
  </v-app>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
