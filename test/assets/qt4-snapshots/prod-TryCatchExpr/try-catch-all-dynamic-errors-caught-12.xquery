try {
  let $x := (1, 2)[position() < 3]
  group by $x
  return $x
} catch err:XPTY0004 { "More than a grouping item." }
