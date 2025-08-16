# LearningDoc

Nothing but a file to document my vue learning progress and  
to highlight important things to remember in the future.

<br/>

## Setting up:

- cd into the desired folder
- create a new project with `$ nvm create new vue@latest`
- cd into the created project
- add necessary dependencies with `$ npm install`
- open vite.config.js [`$ nano vite.config.js`] and  
add inside defineConfig(): `server: { port: 3000, }` 
to set the server to run 
in the standard port.  
[p.s. don't forget the comma between the params. 😉]
- test it with `$ nvm run dev`

## App.vue basics

There are two different ways of approaching the app.vue:  
the OptionsAPI (classic) and the CompositionAPI (modern).

### OptionsAPI

```
<script>

  export default {
  
    data() {
      return {
        <!-- here we add variables -->
      }
    },
    
    methods: {
        <!-- here we add functions -->
    }
  }
  
</script>

<template>

  <!--  here we add the html structure,  -->
  <!--  and we can retrieve the data     -->
  <!--  dynamically using double braces: -->
  <!--  e.g. <p> {{ myVariable }} </p>   -->

</template>

<style scoped>

  <!--  here we can add some style       -->
  <!--  mind that if it does NOT have    -->
  <!--  the scope attribute, all the     -->
  <!--  defined styles will be global,   -->
  <!--  affecting all other files        -->

</style>
```
The OptionsAPI is considered not very scalable and  
rather rigid, so CompositionAPI is often preferred.

### CompositionAPI

Doesn't need the `export default {}`, but needs  
to import the ref using `import { ref } from 'vue';`.

### onMounted

Is used for getting data from jsons from a specific server/api  