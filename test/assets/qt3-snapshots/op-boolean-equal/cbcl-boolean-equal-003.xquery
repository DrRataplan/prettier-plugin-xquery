declare function local:is-even ($arg as xs:integer) as xs:boolean {
  (($arg mod 2) eq 0)
};

fn:true() ne local:is-even(17)
