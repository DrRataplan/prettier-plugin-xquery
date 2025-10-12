map:merge(
  for $n in 1 to 20
  return map:entry(
      $n,
      map {$n: string($n), $n + 1: string($n + 1), $n + 2: string($n + 2)}
    )
)
