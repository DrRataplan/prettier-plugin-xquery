fn:trace(
  (
    for $var in (fn:true(), fn:false(), fn:true())
    return $var and fn:true()
  ),
  "The value of 'for $var in (fn:true(),fn:false(),fn:true() return $var and fn:true()' is:"
)
