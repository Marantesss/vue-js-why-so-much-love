# 3. Key concepts

> Vue (pronounced */vjuː/*, like *view*) is a **JavaScript framework** for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a **declarative** and **component-based** programming model that helps you efficiently develop user interfaces, be they simple or complex. [^1]

<br />

<ul>
    <li v-click="1">JavaScript</li>
    <li v-click="2">Declarative</li>
    <li v-click="3">Component-based</li>
    <li v-click="4">Reactivity</li>
</ul>

<p v-click="5">But... what does this all mean? 🤔 (Don't worry, we'll get there)</p>

<br />
<br />
<br />


[^1]: https://vuejs.org/guide/introduction.html#what-is-vue

<style>
h1 {
    background-color: #2B90B6;
    background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
}
</style>

---

# Vue Timeline

Vue is almost 10 years old since its initial release! 🎂

<img src="/img/vue-timeline.png" />

<img
    v-click
    position="absolute"
    class="top-30 left-30 w-98"
    rotate="10"
    border="rounded"
    src="/img/evan-creating-vue.jpg" />

**Fun fact:** its releases are named after animes! 🇯🇵

---

# Declarative Syntax

HTML-based template syntax to declaratively bind rendered DOM

<div grid="~ cols-2 gap-4">
<div v-click>

Text interpolation with "Mustache"[^1] syntax

```vue
<span>Message: {{ msg }}</span>
```

Attribute binding

```vue
<button
    :disabled="isButtonDisabled"
    :class="isButtonDisabled
        ? 'button--disabled'
        : 'button'"
>Button</button>
```

</div>
<div v-click>

Using directives[^2] for:

1. Conditional rendering

```vue
<span v-if="isVisible">Welcome to Portugal.vue</span>
```

2. List rendering

```vue
<li v-for="item in items">
  {{ item.message }}
</li>
```

3. Much more (take a look at the docs 📑)


</div>
</div>

[^1]: http://mustache.github.io/
[^2]: https://vuejs.org/api/built-in-directives.html

---

# Let's take a look at a quick example

Anyway, let's build a counter app:

<div grid="~ cols-2 gap-10">
<div>

```vue {all|4}
<script setup lang="ts">
import { ref } from 'vue'

const counter = ref(0)
</script>

```

```vue {all|7}
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data() {
        return {
            counter: 0
        }
    }
})
</script>

```
</div>

<div>


```vue {all|4|3,5}
<template>
  <div>
    <button @click="() => counter -= 1"> - </button>
    {{ counter }}
    <button @click="() => counter += 1"> + </button>
  </div>
</template>
```

<Counter />

</div>
</div>

---

# Building the same app using an imperative syntax

<div grid="~ cols-5 gap-10">

<div class="col-span-3">

```js {all|6,10}
const increaseButton = document.getElementById("increase")
const decreaseButton = document.getElementById("decrease")
const counter = document.getElementById("counter")

increaseButton.addEventListener("click", () => 
    counter.innerHTML = parseInt(counter.innerHTML) + 1;
)
 
decreaseButton.addEventListener("click", () =>
    counter.innerHTML = parseInt(counter.innerHTML) - 1;
)
```
</div>

<div class="col-span-2">

```html
<div>
    <button id="increase"> - </button>
    <span id="counter"> 0 </span>
    <button id="decrease"> + </button>
</div>

<script src="app.js"></script>   
```
</div>

</div>

---

# Reactivity

> Reactivity is a programming paradigm that allows us to adjust to changes in a **declarative** manner. [^1]

<br />

<div grid="~ cols-6 gap-10">
<div class="col-span-2">
<img
    src="https://www.benlcollins.com/ebook_35_tips_gifs/gifs/conditional_formatting.gif"
/>
</div>
<div class="col-span-4">

```ts
let A0 = 1
let A1 = 2
let A2 = A0 + A1

console.log(A2) // 3

A0 = 2
console.log(A2) // Still 3 not 4 😢
```

How reactivity works in Vue is an advanced topic, but you still figure it out [^2]

</div>
</div>


[^1]: https://vuejs.org/guide/extras/reactivity-in-depth.html#what-is-reactivity
[^2]: https://vuejs.org/guide/extras/reactivity-in-depth.html#how-reactivity-works-in-vue

---

# Single File Components


> A Vue Single-File Component (SFC), conventionally using the `*.vue` file extension, is a custom file format that uses an HTML-like syntax to describe a Vue component. (...)
>
> Each `*.vue` file consists of three types of top-level language blocks: `<template>`, `<script>`, and `<style>`, (...) [^1]

```vue
<template lang="html (default) | pug | ...">
    <!-- Your HTML/PUG/Whatever can go here -->
</template>

<script [setup] lang="js (default) | ts">
    /* Logic goes here */
</script>

<style lang="css (default) | scss | sass | less"> 
    /* styles go here */
</style>
```

[^1]: https://vuejs.org/api/sfc-spec.html#overview

---

# Why I like Single File Components

<p text="center 6">One file to rule them all! 💍</p>

<div grid="~ cols-2 gap-10" class="justify-center">
<div v-click>
<img
    class="h-20 mx-auto my-4"
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
/>

React component files structure [^1]

```
foo/
├─ foo.js
├─ foo.css
```

</div>

<div v-click>
<img
    class="h-20 mx-auto my-4"
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png"
/>

Angular component files structure [^2]

```
foo/
├─ foo.component.ts
├─ foo.component.html
├─ foo.component.css

```
</div>
</div>

<div
    v-click
    position="absolute"
    top="50"
    left="100"
    rotate="10"
    background="red"
    flex="~ gap-4"
    items="center">
    <img
        class="h-20"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png"
    />
    <img
        class="h-20"
        src="https://em-content.zobj.net/thumbs/160/apple/96/white-heavy-check-mark_2705.png"
    />
</div>


[^1]: https://legacy.reactjs.org/docs/faq-structure.html
[^2]: https://angular.io/guide/file-structure#application-source-files

---
transition: slide-up
---

# How does it compare with other frameworks?

TLDR: Vue 3 tends to be one of the most performant frameworks, going hand in hand with the latests versions of Svetle [^1]

<div grid="~ cols-3 gap-10" class="justify-center">
    <img src="/img/benchmark-operations.png" />
    <img src="/img/benchmark-startup.png" />
    <img src="/img/benchmark-memory.png" />
</div>

[^1]: [JS framework Benchmark (2023)](https://krausest.github.io/js-framework-benchmark/2023/table_chrome_111.0.5563.64.html#eyJmcmFtZXdvcmtzIjpbImtleWVkL2FuZ3VsYXIiLCJrZXllZC9yZWFjdCIsImtleWVkL3N2ZWx0ZSIsImtleWVkL3Z1ZSIsIm5vbi1rZXllZC9yZWFjdCIsIm5vbi1rZXllZC9zdmVsdGUiLCJub24ta2V5ZWQvdnVlIl0sImJlbmNobWFya3MiOlsiMDFfcnVuMWsiLCIwMl9yZXBsYWNlMWsiLCIwM191cGRhdGUxMHRoMWtfeDE2IiwiMDRfc2VsZWN0MWsiLCIwNV9zd2FwMWsiLCIwNl9yZW1vdmUtb25lLTFrIiwiMDdfY3JlYXRlMTBrIiwiMDhfY3JlYXRlMWstYWZ0ZXIxa194MiIsIjA5X2NsZWFyMWtfeDgiLCIyMV9yZWFkeS1tZW1vcnkiLCIyMl9ydW4tbWVtb3J5IiwiMjNfdXBkYXRlNS1tZW1vcnkiLCIyNV9ydW4tY2xlYXItbWVtb3J5IiwiMjZfcnVuLTEway1tZW1vcnkiLCIzMV9zdGFydHVwLWNpIiwiMzRfc3RhcnR1cC10b3RhbGJ5dGVzIl0sImRpc3BsYXlNb2RlIjoxLCJjYXRlZ29yaWVzIjpbMSwyLDMsNCw1XX0=)