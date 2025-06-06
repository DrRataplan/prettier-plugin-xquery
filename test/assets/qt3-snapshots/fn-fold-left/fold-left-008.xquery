let $hours := function ($emp as element(employee)) as xs:integer {
    sum($emp/hours/xs:integer(.))
  },
  $highest :=
  function ($f as function (item()) as xs:anyAtomicType, $seq as item()*) {
    fold-left(
      $seq,
      (),
      function ($highestSoFar as item()*, $this as item()*) as item()* {
        if (empty($highestSoFar)) then
          $this
        else
          let $thisValue := $f($this), $highestValue := $f($highestSoFar[1])
          return if ($thisValue gt $highestValue) then
              $this
            else if ($thisValue eq $highestValue) then (
              $highestSoFar, $this
            ) else
              $highestSoFar
      }
    )
  }

return $highest($hours, /works/employee)
