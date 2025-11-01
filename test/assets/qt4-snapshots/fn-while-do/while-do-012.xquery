while-do(
  1e0,
  function ($x) { $x instance of xs:float },
  function ($x) {
    if ($x instance of xs:double) then
      xs:float($x)
    else
      xs:double($x)
  }
)
