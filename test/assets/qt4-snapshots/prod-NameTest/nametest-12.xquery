let $var := /works/employee[12]/overtime
return $var/child::*:day[1] | $var/child::*:day[2]
