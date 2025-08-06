let $module-ns :=
"http://www.w3.org/fots/fn/load-xquery-module/functions/module"
return fn:load-xquery-module($module-ns)("functions")(
  QName($module-ns, "func")
)(1)("abc")
