declare function local:case ($x as xs:boolean) as function(*) {
  if ($x) then
    fn:upper-case#1
  else
    fn:lower-case#1
};

local:case(true())("Mike"), local:case(false())("Mike")
