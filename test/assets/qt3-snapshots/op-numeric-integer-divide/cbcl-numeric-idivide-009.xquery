declare function local:value ($number as xs:boolean) {
  if ($number) then
    1
  else
    xs:string("1")
};

local:value(true()) idiv local:value(true())
