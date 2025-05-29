if (implicit-timezone() gt xs:dayTimeDuration("PT1H")) then
  xs:time("00:00:01+01:00") gt xs:time("00:00:00")
else
  xs:time("00:00:00") gt xs:time("00:00:00+01:01")
