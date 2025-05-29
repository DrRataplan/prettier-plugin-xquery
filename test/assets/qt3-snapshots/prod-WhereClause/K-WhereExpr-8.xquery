(
  for $i in 1
  where (1, current-time())[1] treat as xs:integer eq 1
  return $i
) eq
  1
