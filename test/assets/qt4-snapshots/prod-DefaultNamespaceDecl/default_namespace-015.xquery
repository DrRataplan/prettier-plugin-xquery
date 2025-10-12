declare default function namespace "http://example.org";

declare function odd ($x as xs:integer) as xs:boolean {
  if ($x = 0) then
    fn:false()
  else
    even($x - 1)
};

declare function even ($x as xs:integer) as xs:boolean {
  if ($x = 0) then
    fn:true()
  else
    odd($x - 1)
};

even(3)
