if (implicit-timezone() eq xs:dayTimeDuration("-PT9M")) then
  xs:gMonthDay("--12-30") ne xs:gMonthDay("--12-31-09:01")
else
  xs:gMonthDay("--12-30") ne xs:gMonthDay("--12-31-09:00")
