let $d1 := "2006-07-12" cast as xs:date
let $oneky := xs:yearMonthDuration("P1000Y")
let $d2 := $d1 + $oneky
let $d3 := $d2 + $oneky
let $d4 := $d3 + $oneky
let $d5 := $d4 + $oneky
let $d6 := $d5 + $oneky
let $d7 := $d6 + $oneky
let $d8 := $d7 + $oneky
let $d9 := $d8 + $oneky
let $d10 := $d9 + $oneky
return $d10
