import { createRouter, createWebHistory } from 'vue-router';
import TasksIndex from '../views/tasks/TasksIndex.vue';
import TasksCreate from '../views/tasks/TasksCreate.vue';
import TasksEdit from '../views/tasks/TasksEdit.vue';

const routes = [
  {
    path: '/tasks',
    name: 'TasksIndex',
    component: TasksIndex
  },
  {
    path: '/tasks/create',
    name: 'TasksCreate',
    component: TasksCreate
  },
  {
    path: '/tasks/show/:id',
    name: 'TasksEdit',
    component: TasksEdit
  }
];

const router = createRouter({
  //history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory('/'),
  routes
});

export default router;
