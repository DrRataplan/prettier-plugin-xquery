let $seq := (1 to 1000, 1, 1)
let $minocc := 1
let $counts :=
  fold-left(
    $seq,
    map {},
    function ($sofar as item()*, $this as xs:integer) {
      let $seen := ($sofar($this), 0)[1]
      return map:merge((map {$this: $seen + 1}, $sofar))
    }
  )
return map:keys($counts)[$counts(.) gt $minocc]
