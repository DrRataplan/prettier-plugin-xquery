declare namespace fots = "http://www.w3.org/2010/09/qt-fots-catalog";

trace(
  serialize(
    <r>
      {
        let $changes := doc("../changes.xml")//spec[contains(
          @name,
          "40"
        )]/change
        let $changesid := $changes/@id/string()
        let $testfiles := //fots:test-set/@file/doc(
          resolve-uri(., base-uri(..))
        )
        let $testsets := $testfiles/fots:test-set
        for $token in distinct-values($changesid)
        let $relevant-testsets := $testsets[tokenize(@covers-40, " ") = $token]
        let $relevant-testcases := $testsets/fots:test-case[tokenize(
          @covers-40,
          " "
        ) =
          $token]
        let $count := count($relevant-testsets/fots:test-case) +
          count($relevant-testcases)
        order by $token
        return <tests
            change="{ $token }"
            count="{ $count }"
            description="{ $changes[@id = $token]/text() }" />
      }
    </r>,
    map {"indent": true()}
  ),
  "result"
)
