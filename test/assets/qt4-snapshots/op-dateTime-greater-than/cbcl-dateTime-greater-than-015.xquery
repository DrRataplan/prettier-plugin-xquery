declare function local:dateTime (
  $dateTime as xs:string,
  $timezone as xs:string
) {
  xs:dateTime(concat($dateTime, $timezone))
};

adjust-dateTime-to-timezone(local:dateTime("1972-12-14T00:00:00", "-12:00")) gt
  adjust-dateTime-to-timezone(xs:dateTime("1972-12-15T00:00:00+12:00"))
