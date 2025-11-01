let $s := string(year-from-date(current-date()) mod 10 + 10)
let $h := xs:hexBinary($s)
let $b := xs:base64Binary($h)
return deep-equal($h, $h) and
    deep-equal($b, $b) and
    deep-equal($h, $b) and
    deep-equal($b, $h)
