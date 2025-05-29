if (implicit-timezone() eq xs:dayTimeDuration("PT9M")) then
  xs:gYear("2008+09:01") eq xs:gYear("2008")
else
  xs:gYear("2008+09:00") eq xs:gYear("2008")
