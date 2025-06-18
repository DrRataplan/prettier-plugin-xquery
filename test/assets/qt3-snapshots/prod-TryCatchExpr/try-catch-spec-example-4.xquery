let $output := (
  try {
    fn:error(fn:QName("http://www.w3.org/2005/xqt-errors", "err:FOER0000"))
  } catch * {
    $err:code,
    $err:value,
    " module: ",
    $err:module,
    "(",
    $err:line-number,
    ",",
    $err:column-number,
    ")"
  }
)
return true()
