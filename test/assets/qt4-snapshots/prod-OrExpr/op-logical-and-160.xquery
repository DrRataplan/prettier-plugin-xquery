current-date() lt xs:date("1900-01-01") and
  (current-date() - xs:date("1900-01-01")) div xs:dayTimeDuration("PT0S") gt 3
