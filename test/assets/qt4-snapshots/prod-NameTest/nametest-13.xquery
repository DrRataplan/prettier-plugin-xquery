let $var := /works[1]/child::employee[12]/overtime
return $var/child::* intersect $var/child::day
