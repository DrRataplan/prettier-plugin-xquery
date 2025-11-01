while-do(
  reverse(1 to 100),
  function ($s) { sum($s) > 20 or head($s) > 4 },
  function ($s) { tail($s) }
)
