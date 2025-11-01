for $i in 0 to 1
let $m := map:merge((1 to $i)!map {.: .})
return map:empty($m)
