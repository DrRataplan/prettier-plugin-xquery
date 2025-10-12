declare namespace fots = "http://www.w3.org/2010/09/qt-fots-catalog";

let $testsets := //fots:test-set/@file/doc(resolve-uri(., base-uri(..))),
  $tests := $testsets//fots-test-case,
  $environments := (//fots:environment | $testsets//fots:environment)[@name],
  $refs := $testsets//fots:environment[@ref]
return $refs[not(@ref = $environments/@name)]
