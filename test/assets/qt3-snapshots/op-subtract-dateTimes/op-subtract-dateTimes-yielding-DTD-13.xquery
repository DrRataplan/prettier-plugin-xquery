fn:string(
  (xs:dateTime("1980-05-05T13:13:13Z") - xs:dateTime("1979-10-05T14:14:14Z"))
) eq
  xs:string(xs:dayTimeDuration("P17DT10H02M"))
