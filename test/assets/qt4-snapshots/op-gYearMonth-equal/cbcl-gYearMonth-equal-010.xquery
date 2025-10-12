if (implicit-timezone() eq xs:dayTimeDuration("-PT9M")) then
  xs:gYearMonth("2008-01-09:01") ne xs:gYearMonth("2008-01")
else
  xs:gYearMonth("2008-01-09:00") ne xs:gYearMonth("2008-01")
