declare function local:myFunction ($arg as xs:integer) as xs:integer {
  (
    (
      if ($arg eq 1) then
        1
      else
        $arg - 1
    ),
    current-time()
  )[1] treat as xs:integer
};

not(local:myFunction(1) != local:myFunction(2))
