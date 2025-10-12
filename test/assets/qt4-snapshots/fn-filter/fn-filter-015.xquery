fn:filter(
  1 to 10,
  function ($arg) {
    if ($arg eq 10) then (
    ) else
      fn:true()
  }
)
