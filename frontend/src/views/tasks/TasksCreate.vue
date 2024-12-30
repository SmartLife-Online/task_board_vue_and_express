<template>
    <div>
      <h1>New Task</h1>
      <form>
        <label for="title">Title</label>
        <input type="text" name="title" placeholder="Title" />
        <br>
        <label for="description">Description</label>
        <input type="text" name="description" placeholder="Description" />
        <br>
        <label for="points">Points</label>
        <input type="text" name="points" placeholder="Points" />
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
