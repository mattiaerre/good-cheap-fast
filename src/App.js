import React, { useState } from 'react';
import Switch from 'react-ios-switch';
import './App.css';
import toggle from './toggle';

function App() {
  const [values, setValues] = useState({
    good: false,
    cheap: false,
    fast: false
  });

  return (
    <section>
      <h2>Good/Cheap/Fast - pick two</h2>
      <form>
        <label>
          Good
          <Switch
            checked={values.good}
            className="label__switch"
            onChange={() => {
              setValues(toggle('good', values));
            }}
          />
        </label>
        <label>
          Cheap
          <Switch
            checked={values.cheap}
            className="label__switch"
            onChange={() => {
              setValues(toggle('cheap', values));
            }}
          />
        </label>
        <label>
          Fast
          <Switch
            checked={values.fast}
            className="label__switch"
            onChange={() => {
              setValues(toggle('fast', values));
            }}
          />
        </label>
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
