import toggle from './toggle';

const scenarios = [
  {
    expected: { good: true, cheap: false, fast: false },
    initialState: { good: false, cheap: false, fast: false },
    key: 'good',
    name: 'given all toggles off, when toggling good, then only good is on'
  },
  {
    expected: { good: false, cheap: true, fast: false },
    initialState: { good: false, cheap: false, fast: false },
    key: 'cheap',
    name: 'given all toggles off, when toggling cheap, then only good is on'
  },
  {
    expected: { good: false, cheap: false, fast: true },
    initialState: { good: false, cheap: false, fast: false },
    key: 'fast',
    name: 'given all toggles off, when toggling fast, then only fast is on'
  },
  {
    expected: { good: true, cheap: false, fast: true },
    initialState: { good: true, cheap: false, fast: false },
    key: 'fast',
    name: 'given good, when toggling fast, then good and fast are on'
  },
  {
    expected: { good: false, cheap: false, fast: false },
    initialState: { good: true, cheap: false, fast: false },
    key: 'good',
    name: 'given good, when toggling good, then all are off'
  },
  {
    expected: { good: false, cheap: true, fast: false },
    initialState: { good: true, cheap: true, fast: false },
    key: 'good',
    name: 'given good and cheap, when toggling good, then only cheap is on'
  },
  {
    expected: { good: false, cheap: true, fast: true },
    initialState: { good: true, cheap: true, fast: false },
    key: 'fast',
    name: 'given good and cheap, when toggling fast, then cheap and fast are on'
  },
  {
    expected: { good: true, cheap: false, fast: true },
    initialState: { good: false, cheap: true, fast: true },
    key: 'good',
    name: 'given cheap and fast, when toggling good, then good and fast are on'
  },
  {
    expected: { good: true, cheap: true, fast: false },
    initialState: { good: true, cheap: false, fast: true },
    key: 'cheap',
    name: 'given good and fast, when toggling cheap, then good and cheap are on'
  }
];

scenarios.forEach(({ expected, initialState, key, name }) => {
  test(name, () => {
    const newState = toggle(initialState, key);
    expect(newState).toEqual(expected);
  });
});
