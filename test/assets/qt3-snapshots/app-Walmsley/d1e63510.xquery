declare variable $array1 := ["abc", "def", "ghi"];

declare variable $array2 := [1, 2, 3];

array:join(($array2, $array1, [4, 5]))
