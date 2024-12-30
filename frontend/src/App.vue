<script setup lang="ts">
/*import axios from 'axios'

const fetchData = async () => {
  console.log(8)
  try {
    const response = await axios.get('http://localhost:3001/api/v1/tasks');
    console.log(response.data)
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};*/
</script>

<template>
  <div id="app">
    <nav>
      <router-link to="/tasks/create">Aufgabe erstellen</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
