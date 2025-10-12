let $all := fn:available-environment-variables()
return empty($all) or
    (
      $all = "QTTEST2" and
        (fn:environment-variable("QTTEST2") eq "other") and
        (not("other" eq "42"))
    )
