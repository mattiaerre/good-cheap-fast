import toggle from './toggle';

test('given all the toggles are off when I select good then it returns good', () => {
  expect(toggle('good', { good: false, cheap: false })).toEqual({
    good: true,
    cheap: false
  });
});

test('given all the toggles are off when I select cheap then it returns good', () => {
  expect(toggle('cheap', { good: false, cheap: false })).toEqual({
    good: false,
    cheap: true
  });
});

test('given all the toggles are off when I select fast then it returns good', () => {
  expect(toggle('fast', { good: false, cheap: false, fast: false })).toEqual({
    good: false,
    cheap: false,
    fast: true
  });
});

test('given good and cheap when I toggle fast then chep and fast', () => {
  expect(toggle('fast', { good: true, cheap: true, fast: false })).toEqual({
    good: false,
    cheap: true,
    fast: true
  });
});

test('given cheap and fast when I toggle good then good and fast', () => {
  expect(toggle('good', { good: false, cheap: true, fast: true })).toEqual({
    good: true,
    cheap: false,
    fast: true
  });
});

test('given good and fast when I toggle cheap then good and cheap', () => {
  expect(
    toggle('cheap', {
      good: true,
      cheap: false,
      fast: true
    })
  ).toEqual({
    good: true,
    cheap: true,
    fast: false
  });
});

test('given all true to throw', () => {
  expect(() => {
    toggle(null, {
      good: true,
      cheap: true,
      fast: true
    });
  }).toThrow();
});

test('given values is null to throw', () => {
  expect(() => {
    toggle(null, null);
  }).toThrowError("Don't do that!");
});
