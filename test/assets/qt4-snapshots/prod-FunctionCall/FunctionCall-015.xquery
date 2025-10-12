declare function local:f ($in as xs:integer) as xs:integer {
  $in + 1
};

let $f := function-lookup(xs:QName(<f>local:f</f>), 1)
return $f(12)
