function toggle(state, key) {
  const newState = { ...state };
  newState[key] = !newState[key];
  if (newState.good && newState.cheap && newState.fast) {
    if (key === 'fast') {
      return { good: false, cheap: true, fast: true };
    }
    if (key === 'good') {
      return { good: true, cheap: false, fast: true };
    }
    return { good: true, cheap: true, fast: false };
  }
  return newState;
}

export default toggle;
