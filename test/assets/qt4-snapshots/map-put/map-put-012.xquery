map:put(
  map:merge(
    for $n in distinct-values(/*//*/node-name())
    return map:entry($n, /*//*[node-name() eq $n])
  ),
  node-name(/*),
  /*
)
