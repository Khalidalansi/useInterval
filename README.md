# use-interval

[![NPM](https://img.shields.io/npm/v/@khalidalansi/use-interval.svg)](https://www.npmjs.com/package/@khalidalansi/use-interval) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
## Install

```bash
npm install --save @khalidalansi/use-interval
```

```bash
yarn add @khalidalansi/use-interval
```

## Usage

```tsx
import * as React from 'react'
import useInterval from '@khalidalansi/use-interval'

const Example = () => {
  let [count, setCount] = React.useState(0);

  useInterval(() => {
    // Your custom logic here
    setCount(count + 1);
  }, 1000); // passing null instead of 1000 will cancel the interval if it is already running

  return <h1>{count}</h1>;
}
```

```tsx
// TypeScript Declaration
useInterval(
  callback: () => void,
  delay: number,
  immediate?: boolean /* called when mounted if true */
)
```
### Pausing and Reseting the counter example

```tsx
import * as React from 'react'
import useInterval from '@khalidalansi/use-interval'

const App = () => {
  const [delay] = useState(1000);
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useInterval(
    () => {
      setCount(count + 1);
    },
    isRunning ? delay : null
  );

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "Stop" : "Start"}
      </button>
    </div>
  );
};
```
## License

MIT

---
