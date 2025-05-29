(
  /works/employee[(
    xs:integer(hours) eq 40, empnum, number(hours) - 39, position() - 3000
  ) =
    xs:untypedAtomic("1" || substring(string(current-date()), 200))]
)!(empnum || pnum)
