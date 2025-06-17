let $x as xs:integer := ""
return try { $x } catch err:XPTY0004 { 0 }
