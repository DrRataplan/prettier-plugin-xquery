import module namespace mod1 = "http://www.w3.org/TestModules/cnc-module";

let $ns := mod1:one()
return ($ns is $ns, $ns is mod1:one())
