declare function local:larger-values (
  $arrayarg as array(xs:integer)
) as xs:integer* {
  array:flatten($arrayarg)[. > 15]
};

local:larger-values([10, 20, 30])
