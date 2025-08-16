
<script setup>

import {
  onMounted,
  ref
} from 'vue';

  const name = ref('msf-navarro');
  const nameStatus = ref(false);
  const tasks = ref(['Task1', 'Task2', 'Task3']);
  const buttonName = ref('restore name');
  const newTask = ref('');

  const toggleStatus = () => {

    if (nameStatus.value === true) {
      nameStatus.value = false;
      buttonName.value = "restore name";
    }

    else {
      nameStatus.value = true;
      buttonName.value = "delete name";
    }
  }

  const addTask = () => {
    if (newTask.value !== ''){
      tasks.value.push(newTask.value);
      newTask.value = '';
    }
  }

  const deleteTask = (taskIndex) => {
    tasks.value.splice(taskIndex, 1);
  }

  onMounted(async () => {
    try {
      const response = await fetch(
          'https://jsonplaceholder.typicode.com/todos'
      );
      const data = await response.json();
      tasks.value = data.map((task) => task.id + ' ' + task.title);
    } catch (error) {
      console.log('error fetching data');
    }
  })
</script>

<template>
  <h1>my learning project</h1>

  <p v-if="nameStatus">
    I'm learning vue.js! My name is {{name}}
  </p>

  <p v-else>
    I'm learning vue.js! I don't have a name...
  </p>

  <form @submit.prevent="addTask">
    <label for="newTask">Create new task: </label>
    <input type="text" id="newTask" name="newTask" v-model="newTask" />
    <button type="submit">Send</button>
  </form>

  <ul>
    <li v-for="(task, taskIndex) in tasks" :key="task">
      <button @click="deleteTask(taskIndex)">
        x
      </button>
      <span>
        {{ task }}
      </span>
    </li>
  </ul>

  <br/>
  <button @click="toggleStatus">
    {{ buttonName }}
  </button>

</template>

<style scoped>
  h1 {
    color: #aa0000;
  }
  p {
    color: #0000aa;
  }
</style>