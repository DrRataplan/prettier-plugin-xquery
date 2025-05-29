let $x := 1 div 0
return try {
    $x
  } catch * {
    0
  }
