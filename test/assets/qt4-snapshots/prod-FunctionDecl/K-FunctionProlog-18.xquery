declare variable $var1 := 1;

declare function local:func1 () as xs:integer {
  $var1
};

declare variable $var2 := 2;

declare function local:func2 () as xs:integer {
  $var2
};

1 eq local:func1() and 2 eq local:func2()
