unordered(
  for $e at $i in /works/employee
  return $e/hours[1] * $i
)
