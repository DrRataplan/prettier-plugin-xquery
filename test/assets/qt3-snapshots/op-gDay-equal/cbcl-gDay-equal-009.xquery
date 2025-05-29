if (implicit-timezone() eq xs:dayTimeDuration("-PT9M")) then
  xs:gDay("---30") ne xs:gDay("---31-09:01")
else
  xs:gDay("---30") ne xs:gDay("---31-09:00")
