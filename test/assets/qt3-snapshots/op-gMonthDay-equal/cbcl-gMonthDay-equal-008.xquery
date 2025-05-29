if (implicit-timezone() eq xs:dayTimeDuration("PT9M")) then
  xs:gMonthDay("--12-31+09:01") ne xs:gMonthDay("--12-30")
else
  xs:gMonthDay("--12-31+09:00") ne xs:gMonthDay("--12-30")
