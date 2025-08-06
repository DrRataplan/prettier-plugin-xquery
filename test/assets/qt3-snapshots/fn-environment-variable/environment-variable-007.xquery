let $all := fn:available-environment-variables()
return empty($all) or
  ($all = "QTTESTEMPTY" and fn:environment-variable("QTTESTEMPTY") eq "")
