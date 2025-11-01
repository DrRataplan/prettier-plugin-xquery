map {"aba": "a", "abc": "a", "cba": "a"}
  => map:filter(contains#2)
  => map:filter(starts-with#2)
  => map:filter(ends-with#2)
  => map:keys()
