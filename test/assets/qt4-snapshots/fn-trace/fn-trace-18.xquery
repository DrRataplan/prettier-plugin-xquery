fn:trace(
  (
    for $var in (fn:true(), fn:false(), fn:true())
    return $var or fn:true()
  ),
  "The value of 'for $var in (fn:true(),fn:false(),fn:true() return $var or fn:true()' is:"
)
