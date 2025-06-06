declare namespace fots = "http://www.w3.org/2010/09/qt-fots-catalog";

<r>
  {
    let $changes := doc("../changes.xml")//spec[contains(@name, "31")]/change
    let $changesid := $changes/@id/string()
    let $testfiles := //fots:test-set/@file/doc(resolve-uri(., base-uri(..)))
    let $testsets := $testfiles/fots:test-set
    for $token in distinct-values($changesid)
    let $relevant-testsets := $testsets[tokenize(@covers, " ") = $token]
    let $relevant-testcases :=
      $testsets/fots:test-case[tokenize(@covers, " ") = $token]
    let $count :=
      count($relevant-testsets/fots:test-case) + count($relevant-testcases)
    where $count lt 5
    return <out change="{
          $token
        }" names="{
          $relevant-testcases/@name
        }" spec="{
          $changes[@id = $token]/../@name
        }" tests="{
          $count
        }">{
          $changes[@id = $token]/text()
        }</out>
  }
</r>
