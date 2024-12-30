<template>
    <div>
      <h1>New Task</h1>
      <form>
        <label for="title">Title</label>
        <input type="text" name="title" placeholder="Title" :value="1" />
        <br>
        <label for="description">Description</label>
        <input type="text" name="description" placeholder="Description" :value="1" />
        <br>
        <label for="points">Points</label>
        <input type="text" name="points" placeholder="Points" :value="1" />
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TasksCreate'
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
