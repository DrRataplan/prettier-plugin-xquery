if (implicit-timezone() eq xs:dayTimeDuration("PT1M")) then
  xs:gMonthDay("--12-31+01:01") eq xs:gMonthDay("--12-30")
else
  xs:gMonthDay("--12-31+01:00") eq xs:gMonthDay("--12-30")
