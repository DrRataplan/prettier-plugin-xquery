declare variable $var1 as xs:string := local:myFunc();

declare function local:myFunc() as xs:integer {
  1
};

$var1 eq 1
