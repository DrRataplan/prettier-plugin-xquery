let $a := parse-xml("<e a='3'/>")//@a
return node-type-annotation($a)?name
