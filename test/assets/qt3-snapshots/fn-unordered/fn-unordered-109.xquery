unordered(
  for $e at $i in reverse(/works/employee)
  return $e/hours[1] * $i
)
