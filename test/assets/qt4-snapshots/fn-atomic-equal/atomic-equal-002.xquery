declare default collation "http://www.w3.org/2005/xpath-functions/collation/html-ascii-case-insensitive";

let $keys := ("ABC", "abc", "aBc")
return every
    $i in
    1 to 3, $j in
    1 to 3 satisfies
    ($i eq $j) eq atomic-equal($keys[$i], $keys[$j])
