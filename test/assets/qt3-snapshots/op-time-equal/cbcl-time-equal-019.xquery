if (implicit-timezone() eq xs:dayTimeDuration("PT1H")) then
  xs:time("12:00:00+02:00") eq xs:time("12:00:00")
else
  xs:time("12:00:00+01:00") eq xs:time("12:00:00")
