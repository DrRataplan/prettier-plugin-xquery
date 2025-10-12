declare function local:create ($arg) as xs:anyAtomicType* {
  (
    if ($arg castable as xs:untypedAtomic) then
      $arg cast as xs:untypedAtomic
    else (
    )
  ),
  (
    if ($arg castable as xs:dateTime) then
      $arg cast as xs:dateTime
    else (
    )
  ),
  (
    if ($arg castable as xs:date) then
      $arg cast as xs:date
    else (
    )
  ),
  (
    if ($arg castable as xs:time) then
      $arg cast as xs:time
    else (
    )
  ),
  (
    if ($arg castable as xs:time) then
      $arg cast as xs:time
    else (
    )
  ),
  (
    if ($arg castable as xs:duration) then
      $arg cast as xs:duration
    else (
    )
  ),
  (
    if ($arg castable as xs:yearMonthDuration) then
      $arg cast as xs:yearMonthDuration
    else (
    )
  ),
  (
    if ($arg castable as xs:dayTimeDuration) then
      $arg cast as xs:dayTimeDuration
    else (
    )
  ),
  (
    if ($arg castable as xs:float) then
      $arg cast as xs:float
    else (
    )
  ),
  (
    if ($arg castable as xs:double) then
      $arg cast as xs:double
    else (
    )
  ),
  (
    if ($arg castable as xs:decimal) then
      $arg cast as xs:decimal
    else (
    )
  ),
  (
    if ($arg castable as xs:integer) then
      $arg cast as xs:integer
    else (
    )
  ),
  (
    if ($arg castable as xs:nonPositiveInteger) then
      $arg cast as xs:nonPositiveInteger
    else (
    )
  ),
  (
    if ($arg castable as xs:negativeInteger) then
      $arg cast as xs:negativeInteger
    else (
    )
  ),
  (
    if ($arg castable as xs:long) then
      $arg cast as xs:long
    else (
    )
  ),
  (
    if ($arg castable as xs:int) then
      $arg cast as xs:int
    else (
    )
  ),
  (
    if ($arg castable as xs:short) then
      $arg cast as xs:short
    else (
    )
  ),
  (
    if ($arg castable as xs:byte) then
      $arg cast as xs:byte
    else (
    )
  ),
  (
    if ($arg castable as xs:byte) then
      $arg cast as xs:byte
    else (
    )
  ),
  (
    if ($arg castable as xs:nonNegativeInteger) then
      $arg cast as xs:nonNegativeInteger
    else (
    )
  ),
  (
    if ($arg castable as xs:unsignedLong) then
      $arg cast as xs:unsignedLong
    else (
    )
  ),
  (
    if ($arg castable as xs:unsignedInt) then
      $arg cast as xs:unsignedInt
    else (
    )
  ),
  (
    if ($arg castable as xs:unsignedShort) then
      $arg cast as xs:unsignedShort
    else (
    )
  ),
  (
    if ($arg castable as xs:unsignedByte) then
      $arg cast as xs:unsignedByte
    else (
    )
  ),
  (
    if ($arg castable as xs:positiveInteger) then
      $arg cast as xs:positiveInteger
    else (
    )
  ),
  (
    if ($arg castable as xs:gYearMonth) then
      $arg cast as xs:gYearMonth
    else (
    )
  ),
  (
    if ($arg castable as xs:gYear) then
      $arg cast as xs:gYear
    else (
    )
  ),
  (
    if ($arg castable as xs:gMonthDay) then
      $arg cast as xs:gMonthDay
    else (
    )
  ),
  (
    if ($arg castable as xs:gDay) then
      $arg cast as xs:gDay
    else (
    )
  ),
  (
    if ($arg castable as xs:gMonth) then
      $arg cast as xs:gMonth
    else (
    )
  ),
  (
    if ($arg castable as xs:string) then
      $arg cast as xs:string
    else (
    )
  ),
  (
    if ($arg castable as xs:normalizedString) then
      $arg cast as xs:normalizedString
    else (
    )
  ),
  (
    if ($arg castable as xs:token) then
      $arg cast as xs:token
    else (
    )
  ),
  (
    if ($arg castable as xs:language) then
      $arg cast as xs:language
    else (
    )
  ),
  (
    if ($arg castable as xs:NMTOKEN) then
      $arg cast as xs:NMTOKEN
    else (
    )
  ),
  (
    if ($arg castable as xs:Name) then
      $arg cast as xs:Name
    else (
    )
  ),
  (
    if ($arg castable as xs:NCName) then
      $arg cast as xs:NCName
    else (
    )
  ),
  (
    if ($arg castable as xs:ID) then
      $arg cast as xs:ID
    else (
    )
  ),
  (
    if ($arg castable as xs:IDREF) then
      $arg cast as xs:IDREF
    else (
    )
  ),
  (
    if ($arg castable as xs:ENTITY) then
      $arg cast as xs:ENTITY
    else (
    )
  ),
  (
    if ($arg castable as xs:boolean) then
      $arg cast as xs:boolean
    else (
    )
  ),
  (
    if ($arg castable as xs:base64Binary) then
      $arg cast as xs:base64Binary
    else (
    )
  ),
  (
    if ($arg castable as xs:hexBinary) then
      $arg cast as xs:hexBinary
    else (
    )
  ),
  (
    if ($arg castable as xs:QName) then
      $arg cast as xs:QName
    else (
    )
  )
};

for $value in
  fn:distinct-values(
    (
      local:create(0),
      local:create(-1),
      local:create(1),
      local:create(3.141),
      local:create(3.141e0),
      local:create(3.333),
      local:create(3.141e0),
      local:create(3.333e2),
      local:create("NaN"),
      local:create("zero"),
      local:create("false"),
      local:create("true"),
      local:create("http://www.example.com/"),
      local:create("2008-06-01"),
      local:create("1972-06-01Z"),
      local:create("2008-06-01T12:00:00"),
      local:create("1972-06-01T12:00:00+01:00"),
      local:create("00:00:00"),
      local:create("12:00:00"),
      local:create("2008"),
      local:create("1972Z"),
      local:create("--06"),
      local:create("--12Z"),
      local:create("2008-06"),
      local:create("1972-12Z"),
      local:create("--06-01"),
      local:create("--12-15Z"),
      local:create("---01"),
      local:create("---15Z"),
      local:create("P20Y15M"),
      local:create("P10Y15M"),
      local:create("-P2DT15H0M0S"),
      local:create("-P1DT15H0M0S"),
      local:create(fn:QName("http://www.example.com/example", "person")),
      local:create(fn:QName("http://www.example.com/example", "ht:person")),
      local:create("-P2DT15H0M0S"),
      local:create("FFFEFDFC"),
      local:create("aGVsbG8=")
    )
  )
order by string($value)
return $value
