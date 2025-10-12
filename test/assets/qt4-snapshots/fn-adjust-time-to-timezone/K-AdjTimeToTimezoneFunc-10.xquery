adjust-time-to-timezone(xs:time("10:00:00"), xs:dayTimeDuration("-PT5H0M")) eq
  xs:time("10:00:00-05:00")
