declare namespace fots = "http://www.w3.org/2010/09/qt-fots-catalog";

for $xq-testcase in //fots:test-set
let $testname := $xq-testcase/@name
let $testfile := $xq-testcase/@file/doc(resolve-uri(., base-uri(..)))
let $file-testname := $testfile/fots:test-set/@name
where $testname != $file-testname
return <out
    catalog-name="{ string($testname) }"
    test-name="{ string($file-testname) }" />
