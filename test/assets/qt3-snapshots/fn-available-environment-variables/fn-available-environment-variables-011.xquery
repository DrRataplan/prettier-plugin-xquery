let $all := fn:available-environment-variables()
return if (fn:empty($all)) then
  true()
else if ($all = "QTTEST") then
  fn:environment-variable("QTTEST") eq "42"
else
  false()
