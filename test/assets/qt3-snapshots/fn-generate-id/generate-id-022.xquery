let $nodes := (text {
      ""
    }, text {
      ""
    }, text {
      ""
    }, text {
      ""
    })
let $ids :=
  for $n in $nodes
  return generate-id($n)
return count($nodes) = count(distinct-values($ids))
