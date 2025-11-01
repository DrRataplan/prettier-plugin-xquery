while-do(
  1,
  function ($x) { not($x instance of xs:byte) },
  function ($x) {
    if ($x instance of xs:short) then
      xs:byte($x)
    else
      xs:short($x)
  }
)
