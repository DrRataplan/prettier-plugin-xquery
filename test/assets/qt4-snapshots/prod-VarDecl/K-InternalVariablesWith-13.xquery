declare variable $var1 := local:myFunc();

declare function local:myFunc () as xs:integer {
  1
};

$var1 eq 1
