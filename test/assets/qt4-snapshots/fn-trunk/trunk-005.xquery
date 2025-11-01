let $a := /works/employee[@gender = "female"]/@name
return trunk($a)/string()
