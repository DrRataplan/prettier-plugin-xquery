for $x in 1 to 100
group by $key:= $x mod 10
return string(text {
      $x
    })
