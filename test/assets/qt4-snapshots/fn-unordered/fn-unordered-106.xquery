count(
  unordered(
    for $e in reverse(/works/employee)
    return $e/@gender
  )
)
