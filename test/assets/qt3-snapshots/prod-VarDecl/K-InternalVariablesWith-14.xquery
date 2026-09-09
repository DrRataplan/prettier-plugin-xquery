declare variable $var1 as xs:string := local:myFunc();

declare function local:myFunc() {
  1
};

$var1 eq 1
