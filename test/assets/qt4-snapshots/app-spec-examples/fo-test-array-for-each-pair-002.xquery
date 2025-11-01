let $array := ["A", "B", "C", "D"]
return array:for-each-pair($array, array:tail($array), concat#2)
