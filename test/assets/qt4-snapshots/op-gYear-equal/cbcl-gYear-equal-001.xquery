declare function local:gYear ($year as xs:integer) {
  xs:gYear(string(2000 + $year))
};

not(local:gYear(7) eq xs:gYear("2008"))
