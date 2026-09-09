declare variable $n as xs:integer external := 10;

if ($n lt 20) then
  ``[There were `{$n}` green bottles]``
else
  ``[There were many green bottles]``
