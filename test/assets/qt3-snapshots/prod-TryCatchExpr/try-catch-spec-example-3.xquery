let $x := ""
return try { $x cast as xs:integer } catch err:FORG0001|err:XPTY0004 { 0 }
