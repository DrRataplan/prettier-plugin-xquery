unordered(
  for $e in reverse(/works/employee)
  return $e/hours[1] * $i
)
