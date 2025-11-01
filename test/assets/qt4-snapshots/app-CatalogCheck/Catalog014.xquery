declare namespace fots = "http://www.w3.org/2010/09/qt-fots-catalog";

<tests-with-no-covers-40-attribute>
  {
    let $testsets := //fots:test-set/@file/doc(resolve-uri(., base-uri(..)))
    for $test in $testsets//fots:test-case
    where not(exists($test/(@covers-40 | ../@covers-40)))
    where exists(
      $test/(
        (fots:dependency | ../fots:dependency)[@type = "spec" and
          contains(@value, "40")]
      )
    )
    where not(
      starts-with(
        $test/@name,
        "fo-test-"
      (: special exemption for generated tests :) )
    )
    (: where xs:date($test/created/@on) le xs:date('2018-01-01')  (: no point keeping this requirement any longer :) :)
    return <out
        test="{ $test/@name }"
        test-set="{ $test/ancestor::fots:test-set/@name }" />
  }
</tests-with-no-covers-40-attribute>
