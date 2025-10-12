declare namespace fots = "http://www.w3.org/2010/09/qt-fots-catalog";

let $testsets := //fots:test-set/@file/doc(resolve-uri(., base-uri(..)))
for $test in $testsets//fots:test-case
where not(exists($test/(@covers | ../@covers)))
where exists(
  $test/(
    (fots:dependency | ../fots:dependency)[@type = "spec" and
      contains(@value, "31")]
  )
)
where not(
  starts-with(
    $test/@name,
    "fo-test-"
  (: special exemption for generated tests :) )
)
(: no point keeping this requirement any longer :)
where xs:date($test/created/@on) le xs:date("2018-01-01")
return <out test="{ $test/@name }" />
