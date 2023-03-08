import { useState } from 'react';

export default function Root() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="title">我是root</div>
      <button onClick={() => setCount(count + 1)}>点击了 {count} 次</button>
    </div>
  );
}
