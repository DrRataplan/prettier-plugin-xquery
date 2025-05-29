if (implicit-timezone() eq xs:dayTimeDuration("PT9M")) then
  xs:gDay("---31+09:01") eq xs:gDay("---30")
else
  xs:gDay("---31+09:00") eq xs:gDay("---30")
