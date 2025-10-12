import schema namespace fots =  "http://www.w3.org/2010/09/qt-fots-catalog";

let $testsets := //fots:test-set/@file/(
  validate { doc(resolve-uri(., base-uri(..))) }
)
for $test in
  $testsets//fots:test-case[not(fots:result/fots:error)][contains(
    test,
    "declare variable"
  ) or
    contains(test, "declare function") or
    matches(test, "<.+>") or
    contains(test, "typeswitch")]
where empty($test/(fots:dependency | ../fots:dependency)) or
  exists($test/(fots:dependency | ../fots:dependency)[contains(., "XP")])
return $test
