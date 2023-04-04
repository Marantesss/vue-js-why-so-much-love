
# This problem is not unique to Vue

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
        <button onClick={() =>
          this.setState({ change: !this.state.change })
        }>
          Click Here!
        </button>
        {this.state.change
          ? (<h1>This</h1>)
          : (<h1>Or that</h1>)}
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
        ? <h1>This</h1>
        : <h1>Or that</h1>}
    </div>
    )
  }
```

</div>

<!--
Up to this day you can still find React projects that are still using the old Class components syntax (before React `v16.8`). Even if this syntax was dropped back in 2019 in favor of functional components and hooks.
-->
