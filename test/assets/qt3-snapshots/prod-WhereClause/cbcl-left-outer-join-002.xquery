<e> {
    for $x in 1 to 10
    return <a>{
        for $y in 1 to 10
        where $x > 7 and $y = $x
        return $y
      }</a>
  } </e>
