for $x in //employee
group by $key as attribute(*) := $x/@gender
return concat(
    $key,
    ":",
    string-join(
      for $e in $x
      return $e/@name,
      ","
    )
  )
