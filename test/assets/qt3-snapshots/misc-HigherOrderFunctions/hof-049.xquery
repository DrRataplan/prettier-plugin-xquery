declare function local:tf ($i as xs:integer) as function () as xs:boolean {
  if ($i) then
    true#0
  else
    false#0
};

<out>{
    (local:tf(0)(), local:tf(1)())
  }</out>
