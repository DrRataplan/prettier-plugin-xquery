declare function local:is-even ($arg as xs:integer) as xs:boolean {
  (($arg mod 2) eq 0)
};

fn:false() le local:is-even(17)
