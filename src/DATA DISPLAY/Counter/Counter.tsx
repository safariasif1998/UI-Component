import { useEffect, useState } from "react";

export type CounterStory = {};

function Counter(props: CounterStory) {
  const {} = props;
  const [count, setCount] = useState(0);
  useEffect(() => {
    const counter = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
    return () => clearInterval(counter);
  });
  return (
    <div>
      <p>
        {" "}
        Counter :{" "}
        <span className="inline-block bg-green-900 rounded px-2 py-1">
          {count}
        </span>
      </p>
    </div>
  );
}

export default Counter;
