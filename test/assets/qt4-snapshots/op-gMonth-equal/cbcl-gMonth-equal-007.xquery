if (implicit-timezone() eq xs:dayTimeDuration("PT9M")) then
  xs:gMonth("--06") ne xs:gMonth("--06+09:01")
else
  xs:gMonth("--06") ne xs:gMonth("--06+09:00")
