function toggle(key, values) {
  if (values === null || (values.good && values.cheap && values.fast)) {
    throw new Error("Don't do that!");
  }

  const next = { ...values, [key]: !values[key] };
  if (next.good && next.cheap && next.fast) {
    if (key === 'fast') {
      return {
        good: false,
        cheap: true,
        fast: true
      };
    }
    if (key === 'good') {
      return {
        good: true,
        cheap: false,
        fast: true
      };
    }
    return {
      good: true,
      cheap: true,
      fast: false
    };
  }
  return next;
}

export default toggle;
