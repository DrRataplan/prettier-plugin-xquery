let $var as xs:boolean := if (fn:true()) then
  fn:true()
else
  fn:false()
return $var
