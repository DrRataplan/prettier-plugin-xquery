declare copy-namespaces no-preserve ,  inherit;

let $nested :=
  element outer {
    namespace out { "http://out.zorba-xquery.com/" },
    element inner { namespace in { "http://in.zorba-xquery.com/" } }
  },
  $elem :=
  element e { namespace new { "http://new.zorba-xquery.com/" }, $nested }
return $elem/outer/inner
