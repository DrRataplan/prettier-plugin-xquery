let $x := ""
return try {
    $x cast as xs:integer
  } catch * {
    0
  }
