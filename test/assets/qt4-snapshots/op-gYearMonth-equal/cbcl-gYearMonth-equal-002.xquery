if (implicit-timezone() eq xs:dayTimeDuration("PT9M")) then
  xs:gYearMonth("2008-01") eq xs:gYearMonth("2008-01+09:01")
else
  xs:gYearMonth("2008-01") eq xs:gYearMonth("2008-01+09:00")
