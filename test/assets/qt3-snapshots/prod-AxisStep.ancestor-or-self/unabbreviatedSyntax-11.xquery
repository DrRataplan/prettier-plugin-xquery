(
  for $h in (/works/employee[1]/hours)
  return $h/ancestor-or-self::employee
)/@name
