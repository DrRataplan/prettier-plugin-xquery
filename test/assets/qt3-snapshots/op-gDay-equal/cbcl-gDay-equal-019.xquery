if (implicit-timezone() eq xs:dayTimeDuration("PT1H")) then
  xs:gDay("---31+01:01") eq xs:gDay("---31")
else
  xs:gDay("---31+01:00") eq xs:gDay("---31")
