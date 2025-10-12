declare function local:f ($a as xs:integer, $b as xs:integer) as xs:integer {
  data(<a>{ $a }{ $b }</a>)
};

local:f(12, 34)
