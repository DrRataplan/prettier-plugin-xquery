declare function local:generate ($arg as xs:boolean) as xs:string+ {
  if ($arg) then (
    "a", "b", "c"
  ) else (
    "A", "B", "C"
  )
};

(
  for $x in local:generate(true())
  return 3
)[last()]
