declare function local:square ($arg as xs:integer) as xs:integer {
  $arg * $arg
};

let $x := local:square(4)
return 52676506002282294014967032012 eq $x - 52676506002282294014967032012
