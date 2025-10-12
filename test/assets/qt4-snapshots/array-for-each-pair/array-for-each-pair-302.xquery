let $A := ["A", "B", "C", "D"]
return array:for-each-pair($A, array:tail($A), concat#2)
