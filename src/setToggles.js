function setState(what, current) {
  const final = Object.assign({}, current, {
    [what]: !current[what]
  });
  if (Object.keys(final).filter(key => final[key] === true).length === 3) {
    if (what === 'fast') {
      final.cheap = false;
    }
    if (what === 'good') {
      final.fast = false;
    }
    if (what === 'cheap') {
      final.good = false;
    }
  }
  return final;
}

export default setState;
