import setToggles from './setToggles';

test('initial state false false false toggle good', () => {
  const final = setToggles('good', {
    good: false,
    cheap: false,
    fast: false
  });

  expect(final).toEqual({
    good: true,
    cheap: false,
    fast: false
  });
});

test('initial state false false false toggle cheap', () => {
  const final = setToggles('cheap', {
    good: false,
    cheap: false,
    fast: false
  });

  expect(final).toEqual({
    good: false,
    cheap: true,
    fast: false
  });
});

test('initial state true false false toggle cheap', () => {
  const final = setToggles('cheap', {
    good: true,
    cheap: false,
    fast: false
  });

  expect(final).toEqual({
    good: true,
    cheap: true,
    fast: false
  });
});

test('initial state true true false toggle fast', () => {
  const final = setToggles('fast', {
    good: true,
    cheap: true,
    fast: false
  });

  expect(final).toEqual({
    good: true,
    cheap: false,
    fast: true
  });
});

test('initial state false true true toggle good', () => {
  const final = setToggles('good', {
    good: false,
    cheap: true,
    fast: true
  });

  expect(final).toEqual({
    good: true,
    cheap: true,
    fast: false
  });
});

test('initial state true false true toggle cheap', () => {
  const final = setToggles('cheap', {
    good: true,
    cheap: false,
    fast: true
  });

  expect(final).toEqual({
    good: false,
    cheap: true,
    fast: true
  });
});
