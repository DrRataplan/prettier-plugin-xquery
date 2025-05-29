declare function local:dayTimeDuration (
  $days as xs:integer
) as xs:dayTimeDuration {
  xs:dayTimeDuration(concat("P", $days, "D"))
};

0 * local:dayTimeDuration(2)
