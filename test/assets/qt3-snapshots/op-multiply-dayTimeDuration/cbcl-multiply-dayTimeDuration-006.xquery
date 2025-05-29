declare function local:dayTimeDuration (
  $days as xs:integer
) as xs:dayTimeDuration {
  xs:dayTimeDuration(concat("P", $days, "D"))
};

xs:double("NaN") * local:dayTimeDuration(2)
