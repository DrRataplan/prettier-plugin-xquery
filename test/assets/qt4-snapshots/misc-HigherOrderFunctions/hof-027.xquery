let $f := fn:contains(?, "e")
return for $s in ("Mike", "John", "Dave", "Mary", "Jane")
  return $f($s)
