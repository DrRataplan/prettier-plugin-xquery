current-date() gt xs:date("1900-01-01") or
  (current-date() - xs:date("1900-01-01")) div xs:dayTimeDuration("PT0S") gt 3
