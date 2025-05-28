if (
  for $i in <e> <a id="3" /> <b id="2" /> <c id="1" /> </e>/*
  order by xs:integer($i/@id)
  return $i
) then
  4
else
  9
