declare default order empty greatest;

declare namespace test = "http://www.w3.org/fots/fn/load-xquery-module/test";

declare function test:func ($seq as item()*) {
  for $i in 1 to 5
  let $x := subsequence($seq, $i, 1)
  order by $x
  return count($x)
};

let $module-ns :=
"http://www.w3.org/fots/fn/load-xquery-module/functions/module"
return (
  fn:load-xquery-module($module-ns)("functions")(QName($module-ns, "func"))(1)(
    (1, 2, 3)
  ),
  test:func((1, 2, 3))
)
