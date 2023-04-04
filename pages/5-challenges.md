# 5. Challenges

There are two sides to every coin, and Vue is no exception.

> "*Inside each of us, there is the seed of both good and evil. It's a constant struggle as to which one will win. And one cannot exist without the other.*" - Eric Burdon

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

# The elephant in the room 🐘

Imagine you're learning Vue for the first time:
<ol>
  <li v-click>you take a look at the docs</li>
  <li v-click>you start looking at code snippets</li>
  <li v-click>you quickly question every decision you've ever made</li>
</ol>

<img
    v-click
    position="absolute"
    top="10"
    right="30"
    class="w-60"
    rotate="10"
    src="/img/vue-3-meme-api-buttons.jpg"
/>

<div v-click>
<img
    position="absolute"
    bottom="10"
    left="6"
    class="h-40"
    rotate="-20"
    src="/img/vue-3-meme-separate-repo.jpg"
/>

<img
    position="absolute"
    bottom="10"
    right="90"
    rotate="5"
    class="h-60"
    src="/img/vue-3-meme-api-changes.jpg"
/>

<img
    position="absolute"
    bottom="4"
    right="2"
    rotate="10"
    class="h-40"
    src="/img/vue-3-meme-migrating-to-vue-3.jpg"
/>
</div>

---

# This problem is not unique to Vue

<!--Up to this day you can still find React projects that are still using the old Class components syntax (before React `v16.8`). Even if this syntax was dropped back in 2019 in favor of functional components and hooks.-->

<div grid="~ cols-2 gap-2">

```tsx
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { change: true }
  }
  render() {
    return (
      <div>
        <button onClick={() => this.setState({ change: !this.state.change })}>
          Click Here!
        </button>
        {this.state.change
          ? (<h1>Welcome to Let’s React</h1>)
          : (<h1>Learn about the concepts of Reactjs</h1>)
        }
      </div>
    )
  }
}
```

```tsx
const App = (props) => {
  const [change, setChange] = useState(true)
  return (
    <div>
      <button onClick = {() => setChange(!change)}>
        Click Here!
      </button>
      { change
        ? <h1>Welcome to Let’s React</h1>
        : <h1>Learn about the concepts of Reactjs</h1>}
    </div>
    )
  }
```

</div>

---

# Migrating to Vue 3 is inevitable

- Vue `2.7` is the final release of Vue 2, which will reach its Enf of Life on December 31<sup>st</sup>, 2023[^1];
- Thankfully, there's a migration guide and build [^2] which backports some of the features of Vue 3 to Vue 2;
- [João Gonçalves](https://www.linkedin.com/in/jagoncalves/) wrote a pretty awesome blog post about this topic [^3]

<br>
<br>
<br>
<br>
<br>
<br>

[^1]: [Vue 2 LTS, EOL & Extended Support](https://v2.vuejs.org/lts/)
[^2]: https://v3-migration.vuejs.org/migration-build.html#migration-build
[^3]: [How to migrate from Vue 2 to Vue 3](https://www.pixelmatters.com/blog/how-to-migrate-from-vue-2-to-vue-3)

---
transition: slide-up
---

# Last Challenges topic