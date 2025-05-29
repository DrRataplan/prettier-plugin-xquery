let $var := /works[1]/child::employee[12]/overtime
return fn:count($var/child::* except $var/child::day)
