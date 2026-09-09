declare variable $ext as xs:date external := current-date() +
  xs:dayTimeDuration("P30D");

$ext gt xs:date("2008-12-30")
