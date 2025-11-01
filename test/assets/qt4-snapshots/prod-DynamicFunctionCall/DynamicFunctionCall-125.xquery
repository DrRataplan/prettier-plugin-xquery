let $f := function ($in as xs:double*) as xs:double* { $in!(. + 1) }
return $f((1, xs:double(3.1e0), xs:float(0.25), xs:decimal(0.5)))
