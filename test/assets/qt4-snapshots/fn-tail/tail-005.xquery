let $a := /works/employee[@gender = "female"]/@name
return tail($a)/string()
