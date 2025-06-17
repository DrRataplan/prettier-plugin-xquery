declare namespace fots = "http://www.w3.org/2010/09/qt-fots-catalog";

let $changes := doc("../changes.xml")//change/@id/string()
for $xq-test in //fots:test-set
let $testfile := $xq-test/@file/doc(resolve-uri(., base-uri(..)))
let $testset := $testfile/fots:test-set
let $testcases := $testset/fots:test-case
for $token in
  distinct-values(
    (
      tokenize($testset/@covers-30, " "),
      $testcases/@covers-30/tokenize(., " "),
      tokenize($testset/@covers, " "),
      $testcases/@covers/tokenize(., " ")
    )
  )
where not($token = $changes)
return <out
    bad-covers-value="{ $token }"
    test-set="{ string($testset/@name) }" />
