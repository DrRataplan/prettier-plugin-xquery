let $x := ""
return try {
    $x cast as xs:integer
  } catch err:FORG0001 {
    0
  }
