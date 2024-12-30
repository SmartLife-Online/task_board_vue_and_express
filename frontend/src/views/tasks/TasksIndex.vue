<template>
    <div>
      <h1>Tasks</h1>
      <b-table :items="tasks">
        <template #cell(id)="task">
          <router-link :to="{ name: 'TasksEdit', params: { id: task.item.id } }">Edit</router-link>
          <button @click="markAsCompleted(task.item.id)" :disabled="task.item.completed">
            {{ task.item.completed ? 'Completed' : 'Complete Task' }}
          </button>
        </template>
      </b-table>
    </div>
  </template>
  
  <script lang="ts">
  import { ref, onMounted } from 'vue';
  import { fetchData, completeTask } from '../../services/api';

  export default {
    name: 'TasksIndex',
    setup() {
      const tasks = ref(null);
      const loading = ref(false);
      const error = ref(null);

      onMounted(async () => {
        loading.value = true;
        try {
          tasks.value = await fetchData();
        } catch (err) {
          error.value = err.message;
        } finally {
          loading.value = false;
        }
      });

      const markAsCompleted = async (taskId: number) => {
        loading.value = true;
        error.value = null;
        try {
          await completeTask(taskId);
          const task = tasks.value.find(t => t.id === taskId);
          if (task) task.completed = true;
        } catch (err) {
          error.value = 'Failed to complete the task';
        } finally {
          loading.value = false;
        }
      };

      return {
        tasks,
        loading,
        error,
        markAsCompleted
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
