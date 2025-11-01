for $i in 0 to 1
let $m := array:join((1 to $i)!array { . })
return array:empty($m)
