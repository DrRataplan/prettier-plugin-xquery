for $x as xs:integer in (0, 1, "")
return try { $x } catch err:XPTY0004 { 0 }
