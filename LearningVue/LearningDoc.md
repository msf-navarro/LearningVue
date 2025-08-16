# LearningDoc

Nothing but a file to document my vue learning progress and  
to highlight important things to remember in the future.

<br/>

### Setting up:

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

### What is App.vue?

App.vue is the "master page" for every page.  
Its main idea is to contain all the repetitive base components  
(e.g. header, footer etc.), which will only need to  be invoked  
there, since it applies to all pages. All the specific components  
will be dynamically invoked in the App.vue through RouterView,  
which "injects" a specific view depending on the url accessed.

### OptionsAPI vs CompositionAPI

The OptionsAPI is considered not very scalable and  
rather rigid, so CompositionAPI is often preferred.

The latter doesn't need the `export default {}`,  
but needs to import the ref function using  
`import { ref } from 'vue';`.

### onMounted

Is used for getting data from jsons from a specific server/api  

### Tailwind

When using Tailwind CSS, the `<link>` goes only in the index.html,  
so <u>it's NOT necessary to add any dependencies into the .vue files.</u>

### Router

To add a router manually, use `npm i vue-router`.  
After it, create a view using your already built components.  
Then create an index.js that will serve as a router:  
-- use the name "index.js", as Vue expects it -- 
```
import { createRouter, createWebHistory } from 'vue-router';
import MyView from '@/views/MyView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [{
        path: '/',
        name: 'MyName',
        component: MyView
        },
    ],
});

export default router;
```

Then, call the router in the main.js:  
`import router from '@/router';`  
and then change `create(App).mount('#app');`
to 
```
app = create(App); 
app.use(router); 
app.mount('#app');
```

And in the App.vue: 
```
<script setup>
    ...
    import { RouterView } from 'vue-router';
</script>

<template>
    ...
    <RouterView/>
</template>
```

### That's it for now.
\####################