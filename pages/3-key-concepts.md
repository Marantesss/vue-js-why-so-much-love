---
layout: section
---

# 3. Key concepts

<div grid="~ cols-3">

<div col="span-2">

> Vue (pronounced */vjuː/*, like *view*) is a **JavaScript framework** for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a **declarative** and **component-based** programming model that helps you efficiently develop user interfaces, be they simple or complex. [^1]

<ul>
    <li v-click="1">JavaScript</li>
    <li v-click="2">Declarative</li>
    <li v-click="3">Component-based</li>
    <li v-click="4">Reactivity</li>
</ul>

<p v-click="5">But... what does this all mean? 🤔 (Don't worry, we'll get there)</p>

</div>
</div>

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
transition: slide-up
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

<style [scoped] lang="css (default) | scss | sass | less"> 
    /* styles go here */
</style>
```

[^1]: https://vuejs.org/api/sfc-spec.html#overview
