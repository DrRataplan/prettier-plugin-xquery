declare function local:item () {
  if (current-date() lt xs:date("2012-10-10")) then
    1
  else
    "one"
};

empty(
  typeswitch (local:item())
    case xs:integer return
      fn:error()

    default return
      ()
)
