declare function local:odd ($x as xs:integer) as xs:boolean {
  if ($x = 0) then
    false()
  else
    local:even($x - 1)
};

declare function local:even ($x as xs:integer) as xs:boolean {
  if ($x = 0) then
    true()
  else
    local:odd($x - 1)
};

local:even(4)
