let $d := document { <root><child type="" /></root> }
return $d//*[let $i := @type
  return $d//*[$i]]
