declare copy-namespaces preserve ,  inherit;

import module namespace mod1 = "http://www.w3.org/TestModules/cnc-module";

let $nested := mod1:nested(),
  $elem :=
  element e { namespace new { "http://new.zorba-xquery.com/" }, $nested }
return $elem/outer/inner
