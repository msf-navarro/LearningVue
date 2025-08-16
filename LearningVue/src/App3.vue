
<script>
  export default {
    data() {
      return {

      }
    },
    methods: {
      toggleStatus() {
         if (this.nameStatus == true) {
           this.nameStatus = false;
           this.buttonName = "restore name";
         }
         else {
           this.nameStatus = true;
           this.buttonName = "delete name";
         }
      }
    }
  }
</script>

<template>
  <h1>my learning project</h1>

  <p v-if="nameStatus">
    I'm learning vue.js! My name is {{name}}
  </p>

  <p v-else>
    I'm learning vue.js! I don't have a name...
  </p>

  <ul>
    <li v-for="task in tasks" :key="task">
      {{ task }}
    </li>
  </ul>

  <a :href="link">
    hey
  </a>

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