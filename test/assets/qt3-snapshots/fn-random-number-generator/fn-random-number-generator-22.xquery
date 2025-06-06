declare function local:random-sequence ($length as xs:integer) as xs:double* {
  local:random-sequence($length, fn:random-number-generator())
};

declare function local:random-sequence (
  $length as xs:integer,
  $G as map(xs:string, item())
) {
  if ($length eq 0) then (
  ) else (
    $G?number, local:random-sequence($length - 1, $G?next())
  )
};

let $r := local:random-sequence(200)

return if (not(count(distinct-values($r)) >= 0.5 * count($r))) then
    fn:false()
  else if (not(not(deep-equal($r, fn:sort($r))))) then
    fn:false()
  else if (
    not(
      count($r[. lt 0.5]) > 0.2 * count($r) and
        count($r[. gt 0.5]) > 0.2 * count($r)
    )
  ) then
    fn:false()
  else
    fn:true()
