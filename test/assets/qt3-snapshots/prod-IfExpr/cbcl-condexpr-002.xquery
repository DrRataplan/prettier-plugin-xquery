let $x := zero-or-one((1 to 10)[. div 2 = 2])
return if (empty($x)) then (
) else
  xs:string($x)
