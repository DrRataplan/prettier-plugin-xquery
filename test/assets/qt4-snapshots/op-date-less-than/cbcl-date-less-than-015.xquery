declare function local:date ($date as xs:string, $timezone as xs:string) {
  xs:date(concat($date, $timezone))
};

adjust-date-to-timezone(local:date("1972-12-14", "-12:00")) lt
  adjust-date-to-timezone(xs:date("1972-12-15+12:00"))
