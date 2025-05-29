declare function local:f ($m as map(xs:integer, xs:string)) as xs:integer {
  map:size($m)
};

let $g as map(xs:string, xs:date) := map:remove(map {"a": current-date()}, "a")
return local:f($g)
