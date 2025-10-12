let $all := fn:available-environment-variables()
return empty($all) or
    ($all = "QTTEST" and fn:environment-variable("QTTEST") eq "42")
