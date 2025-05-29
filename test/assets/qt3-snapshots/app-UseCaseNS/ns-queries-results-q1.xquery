for $n in
  distinct-values(
    for $i in (//* | //@*)
    return namespace-uri($i)
  )
return $n
