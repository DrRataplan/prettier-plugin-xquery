let $x := zero-or-one((1 to 10)[. div 2 = 2])
return if (exists($x)) then
  xs:string($x)
else (
)
