array:sort(
  [["John", "Smith"], ["John", "Brown"], ["Fred", "Brown"], ["Fred", "Smith"]],
  (),
  function ($emp) { array:get($emp, 2), array:get($emp, 1) }
)
