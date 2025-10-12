declare function local:dayTimeDuration (
  $days as xs:integer
) as xs:dayTimeDuration {
  xs:dayTimeDuration(concat("P", $days, "D"))
};

local:dayTimeDuration(2) * 1
