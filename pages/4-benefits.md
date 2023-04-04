# 4. Benefits

You right now:

> *Alright, Vue seems cool... but is it for me?*

<div v-click>
Probably... it depends... But I bet it is.


</div>

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

# Why I like Single File Components

<p v-click text="center 6">One file to rule them all! 💍</p>

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

# Ease of use

This is my personal opinion, but Vue just makes sense in my little goldfish brain!
- ⌨️ One command and you're ready to go;
- ⚡ You can probably get it up and running in under 5 minutes;
- 📊 It can be as simple or as complex as you want;
- 🔋 It comes with batteries included;
- 📄 SFCs tend to make things simple;
- 👵 You can probably teach it to your grandma;

<img
    position="absolute"
    bottom="4"
    right="2"
    class="mx-auto h-60"
    src="/img/grandma-vue-init.jpg"
/>

---

# Batteries included and instructions for dummies

There are recommended ways of doing stuff (this is double edged-sword):
- 📋 **State Manegement:** Pinia (or VueX for Vue 2)
- 🚦 **Routing:** Vue Router
- 🧪 **Testing:** Vitest
- 🎁 **Scaffolding/Bundler:** Vite (vue-cli for Vue 2)
- 🧑‍💻 **IDE Support for SFC:** Volar (Vetur for Vue 2)
- 🖨️ **SSR/SSG:** Nuxt (You can still do it manually)

---

# Strong community

This is not unique to Vue (React did it first), but most likely there's a Vue "port" for that library you're considering using!

The vue ecosystem is blooming, and you can easily find the tool or information you need to get your job done.

I mean, just look at us right now 🎉

There's also a lot of "official" learning resources: 🤓
- [Vue Mastery](https://www.vuemastery.com/)
- [Vue School](https://vueschool.io/)

<img
    position="absolute"
    bottom="4"
    right="2"
    class="mx-auto h-60"
    src="/img/ape-meme.jpg"
/>

---

# How performant is Vue?

TLDR: Vue 3 tends to be one of the most performant frameworks, going hand in hand with the latests versions of Svetle [^1]

<div grid="~ cols-3 gap-10" class="justify-center">
    <img src="/img/benchmark-operations.png" />
    <img src="/img/benchmark-startup.png" />
    <img src="/img/benchmark-memory.png" />
</div>

**Disclaimer:** These charts only tell part of the story, there are some caveats you should look out for. Plus, performance is not everything :)

[^1]: [JS framework Benchmark (2023)](https://krausest.github.io/js-framework-benchmark/2023/table_chrome_111.0.5563.64.html#eyJmcmFtZXdvcmtzIjpbImtleWVkL2FuZ3VsYXIiLCJrZXllZC9yZWFjdCIsImtleWVkL3N2ZWx0ZSIsImtleWVkL3Z1ZSIsIm5vbi1rZXllZC9yZWFjdCIsIm5vbi1rZXllZC9zdmVsdGUiLCJub24ta2V5ZWQvdnVlIl0sImJlbmNobWFya3MiOlsiMDFfcnVuMWsiLCIwMl9yZXBsYWNlMWsiLCIwM191cGRhdGUxMHRoMWtfeDE2IiwiMDRfc2VsZWN0MWsiLCIwNV9zd2FwMWsiLCIwNl9yZW1vdmUtb25lLTFrIiwiMDdfY3JlYXRlMTBrIiwiMDhfY3JlYXRlMWstYWZ0ZXIxa194MiIsIjA5X2NsZWFyMWtfeDgiLCIyMV9yZWFkeS1tZW1vcnkiLCIyMl9ydW4tbWVtb3J5IiwiMjNfdXBkYXRlNS1tZW1vcnkiLCIyNV9ydW4tY2xlYXItbWVtb3J5IiwiMjZfcnVuLTEway1tZW1vcnkiLCIzMV9zdGFydHVwLWNpIiwiMzRfc3RhcnR1cC10b3RhbGJ5dGVzIl0sImRpc3BsYXlNb2RlIjoxLCJjYXRlZ29yaWVzIjpbMSwyLDMsNCw1XX0=)

---

# What do developers say? [^1]

<iframe class="mx-auto" width="600" height="371" frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSVxYRuA-vuA337tp7VQjsBz5zIF8dVirAqD-brMQnDy8xaPx0lhUll5p9SFRMOGn4HVZ5T42yQHjz_/pubchart?oid=855587019&amp;format=interactive"></iframe>

[^1]: [Stakoverflow Survey (2022): Most Loved, dreaded and wanted web frameworks and technologies](https://survey.stackoverflow.co/2022/#section-most-loved-dreaded-and-wanted-web-frameworks-and-technologies)

---
transition: slide-up
---

# What's the market working with? [^1]

<iframe class="mx-auto" width="600" height="371" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSVxYRuA-vuA337tp7VQjsBz5zIF8dVirAqD-brMQnDy8xaPx0lhUll5p9SFRMOGn4HVZ5T42yQHjz_/pubchart?oid=713110289&amp;format=interactive"></iframe>

[^1]: [Built With Statistics](https://trends.builtwith.com/javascript)
