declare namespace fots = "http://www.w3.org/2010/09/qt-fots-catalog";

(: ask whether a test is XQuery-only :)
declare function local:needs-xq ($t as element(fots:test-case)) as xs:boolean {
  let $spec := $t/fots:dependency[@type = "spec"][1]
  return exists($spec) and
    contains($spec/@value, "XQ") and
    not(contains($spec/@value, "XP")) and
    not(
      starts-with(
        $t/@name,
        "fo-test-"
      (: special exemption for generated tests :) )
    )
};

let $testsets := //fots:test-set/@file/doc(resolve-uri(., base-uri(..)))
let $nsenvs :=
  for $t in ($testsets | .)
  for $e in $t//fots:environment[@name]
  where exists($e/fots:namespace)
  return concat($t/*/@name, "~", $e/@name/string())
let $xq-testcases := $testsets//fots:test-case[local:needs-xq(.)]
for $tc in
  $xq-testcases[concat(/*/@name, "~", fots:environment/@ref) = $nsenvs or
    fots:environment[fots:namespace]]
return $tc/@name/string()
