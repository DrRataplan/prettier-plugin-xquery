let $i := <e><a /><b /><c /></e>/a, $t := $i/following-sibling::b
return (($i union ($i, $i)), (($t, $t) union $t))
