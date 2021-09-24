import React, { useState } from 'react';
import Switch from 'react-ios-switch';
import './App.css';

const TYPES = {
  GOOD: 'good',
  CHEAP: 'cheap',
  FAST: 'fast'
};

function flipSwitch(switchState, activeSwitch) {
  const switchStateCopy = { ...switchState };
  switchStateCopy[activeSwitch] = !switchStateCopy[activeSwitch];
  const { good, cheap, fast } = switchStateCopy;
  const conditionMet = good && cheap && fast;
  if (conditionMet) {
    if (activeSwitch === TYPES.GOOD) {
      return { cheap: false, good: true, fast: true };
    }
    if (activeSwitch === TYPES.CHEAP) {
      return { cheap: true, good: false, fast: true };
    }
    if (activeSwitch === TYPES.FAST) {
      return { cheap: true, good: false, fast: true };
    }
  }
  return switchStateCopy;
}

function App() {
  const initialState = {
    good: false,
    cheap: false,
    fast: false
  };

  const [switchesState, setSwitches] = useState(initialState);

  const switchData = [
    {
      name: 'Good',
      label: 'good',
      onChange: flipSwitch,
      value: switchesState.good
    },
    {
      name: 'Cheap',
      label: 'cheap',
      onChange: flipSwitch,
      value: switchesState.cheap
    },
    {
      name: 'Fast',
      label: 'fast',
      onChange: flipSwitch,
      value: switchesState.fast
    }
  ];

  return (
    <section>
      <h2>Good/Cheap/Fast - pick two</h2>
      <form>
        {switchData.map(({ name, label, onChange, value }) => (
          <label>
            {name}
            <Switch
              checked={value}
              className="label__switch"
              onChange={() => setSwitches(onChange(switchesState, label))}
            />
          </label>
        ))}
      </form>
      <h3>What are your priorities?</h3>
      <ul>
        <li>Cheap + fast = lower quality work</li>
        <li>Fast + good = expensive</li>
        <li>Good + cheap = not happening anytime soon</li>
      </ul>
    </section>
  );
}

export default App;
