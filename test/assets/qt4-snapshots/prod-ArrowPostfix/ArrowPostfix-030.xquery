let $a := ("one two", "three four five"), $b := tokenize#2
return $a!$b(., " ") => distinct-values()
