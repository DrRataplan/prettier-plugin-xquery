let $keys := (1 to 10000)!xs:float(1 div .)
let $map := map:merge($keys!(map:entry(., .), map:entry(-., -.)))
return map:size($map) eq 20000 and
    (
      every
        $key in
        $keys satisfies
        $map($key) eq $key and
          $map(xs:double($key)) eq $key and
          $map(xs:decimal($key)) eq $key
    )
