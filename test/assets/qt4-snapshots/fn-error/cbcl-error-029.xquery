declare function local:item () {
  if (current-date() gt xs:date("1900-01-01")) then
    1
  else
    "one"
};

empty(
  typeswitch (local:item())
    case xs:integer return
      ()

    default return
      fn:error()
)
