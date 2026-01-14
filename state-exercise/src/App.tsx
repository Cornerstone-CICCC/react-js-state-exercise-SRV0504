import { useState } from 'react';
import LightToggle from './components/LightToggle';
import LottoNumbers from './components/LottoNumbers';
import ClickCounter from './components/ClickCounter';

const App = () => {
  // 1️⃣ Light toggle state
  const [isLightsOn, setIsLightsOn] = useState<boolean>(true);

  // 2️⃣ Lotto numbers state
  const [lottoNumbers, setLottoNumbers] = useState<number[]>([]);

  // 3️⃣ Click counter state
  const [count, setCount] = useState<number>(0);

  return (
    <div style={{ padding: '20px' }}>
      {/* LIGHT TOGGLE */}
      <h2>Light Toggle</h2>
      <LightToggle setIsLightsOn={setIsLightsOn} />
      <div
        style={{
          width: '200px',
          height: '100px',
          marginTop: '10px',
          backgroundColor: isLightsOn ? 'white' : 'black',
          border: '1px solid #ccc',
        }}
      />

      {/* LOTTO NUMBERS */}
      <h2>Lotto Numbers</h2>
      <LottoNumbers setLottoNumbers={setLottoNumbers} />
      <div className="output">
        {lottoNumbers.join(' - ')}
      </div>

      {/* CLICK COUNTER */}
      <h2>Click Counter</h2>
      <ClickCounter setCount={setCount} />
      <div className="output">
        Count: {count}
      </div>
    </div>
  );
};

export default App;
