declare function local:gYearMonth ($year as xs:integer) {
  xs:gYearMonth(concat(string(2000 + $year), "-01"))
};

not(local:gYearMonth(7) ne xs:gYearMonth("2008-01"))
