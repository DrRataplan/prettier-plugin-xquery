count(
  /works/employee[(xs:integer(hours) gt 40) =
    xs:untypedAtomic("true" || substring(string(current-date()), 200))]
)
