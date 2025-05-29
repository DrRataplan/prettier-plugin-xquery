count(
  for $e in unordered(reverse(/works/employee))
  return $e/@gender
)
