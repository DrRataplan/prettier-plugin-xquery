let $m := map {"a": 1}
return map:size(map {$m?a: true()})
