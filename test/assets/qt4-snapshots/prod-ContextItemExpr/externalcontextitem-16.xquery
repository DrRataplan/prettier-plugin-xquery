for $var in (/works/employee[1])
return $var/(
    xs:boolean(exactly-one(hours) - 39) and xs:boolean(exactly-one(hours) - 39)
  )
