declare function local:is-even ($arg as xs:integer) as xs:boolean {
  (($arg mod 2) eq 0)
};

not(not(local:is-even(17) eq local:is-even(16)))
