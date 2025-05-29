declare namespace fots = "http://www.w3.org/2010/09/qt-fots-catalog";

let $testsets := //fots:test-set/@file/doc(resolve-uri(., base-uri(..)))
for $test in $testsets//fots:test-case[contains(test, "import schema")]
where empty(
  $test/(fots:dependency | ../fots:dependency)[@type = "feature" and
    @value = "schemaImport"]
)
return $test
