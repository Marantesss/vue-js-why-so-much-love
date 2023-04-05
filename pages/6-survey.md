---
layout: section
---

# 6. A survey

<div grid="~ cols-3">

<div col="span-2">

I've conducted a survey aimed at finding out what do Infraspeak developers think about vue. I wanted to learn:

1. How long they've been working with vue;
2. What do they LOVE about vue;
3. What do they HATE about vue;
4. What would they change about vue;
5. How does Vue compare with other frameworks;

</div>
</div>

<img
  position="absolute"
  bottom="6"
  right="64"
  rotate="10"
  class="w-50"
  src="/img/survey.png"
  shadow="xl"
/>

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

# Seniority of respondents

<iframe class="mx-auto" width="600" height="371" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT3RPFemS8aIqaTmqsTEbafwi4zipdSNJs2ITZRXtm7UJGdFDQJzpGKIcgJwHQaDBO69lPGATM4ImY4/pubchart?oid=1624060856&amp;format=interactive"></iframe>

---

# What do they think about vue

<div grid="~ cols-2 gap-2">

<div v-click>

<p text="center xl">Love 💚</p> 

1. Simplicity
2. Easy to learn and teach
3. Awesome documentation
4. Awesome ecosystem and community
5. SFCs
6. Exciting features in the making

</div>

<div v-click>

<p text="center xl">Hate 🤬</p> 

1. Composition API has divided the community
2. Paradigm shift with composition API bringing unnecessary features
3. Lack of TypeScript support for Vue 2
4. Too much abstraction ("Magic")
5. Vue 3 migration is a pain
    1. Library migrations
    2. Lack of a dedicated tool
6. Too much boilerplate code

</div>

</div>

---

# What would they change about vue

1. 🔪 Kill the composition API
2. Two way data binding (too much abstraction)
3. Keep support for class-based components with TS Decorators [^1]

<div grid="~ cols-2 gap-2" v-click>

<div>

```ts
@Component
export default class YourComponent extends Vue {
  @Prop(Number)
  readonly propA: number | undefined
  @Prop({ default: 'default value' })
  readonly propB!: string
  @Prop([String, Boolean])
  readonly propC: string | boolean | undefined

  @Emit('my-event')
  emitMyEvent() { /* ... */ }
```

</div>

<div>

```ts
  @Ref('aButton')
  readonly button!: HTMLButtonElement

  get myComputedProperty() { /* ... */ }
  
  @Watch('child')
  onChildChanged(val: string, oldVal: string) {}

  myMethod(num: number): number { /*...*/ }
}
```

</div>
</div>


[^1]: https://class-component.vuejs.org/ & https://github.com/kaorun343/vue-property-decorator

---
transition: slide-up
---

# How does it compare with other frameworks

1. Simpler and more enjoyable to work with
2. Easier to test and less file clutter
3. Shorter learning curve
4. Vue is a good middle ground between React's speed and Angular's simplicity
