for $x in //employee
let $key := ($x/@gender = "male")
group by $key
return concat(
  $key,
  ":",
  string-join(
    for $e in $x
    return $e/@name/string(),
    ","
  )
)
