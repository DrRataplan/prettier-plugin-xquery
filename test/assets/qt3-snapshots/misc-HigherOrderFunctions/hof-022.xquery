declare function local:scramble (
  $x as function (xs:string) as xs:string,
  $y as xs:string
) as xs:string {
  $x($y)
};

let $n := function-name(local:scramble#2)
return (
  local-name-from-QName($n),
  namespace-uri-from-QName($n),
  function-arity(local:scramble#2)
)
