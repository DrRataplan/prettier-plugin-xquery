for $x in //employee
group by $key := ($x/@gender = "male")
return concat(
    $key,
    ":",
    string-join(
      for $e in $x
      return $e/@name/string(),
      ","
    )
  )
