for $x in 1 to 100
let $key := $x mod 10
group by $key
return string(text {
      $x
    })
