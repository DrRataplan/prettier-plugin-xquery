array:sort(
  [["John", "Smith"], ["John", "Brown"], ["Fred", "Brown"], ["Fred", "Smith"]],
  (),
  function ($emp) {
    fn:data(array:get($emp, 1))
  }
)
