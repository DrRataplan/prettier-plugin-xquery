array:index-of(
  array { 11 to 50 },
  parse-xml("<doc><a>44</a></doc>")//a!xs:integer()
)
