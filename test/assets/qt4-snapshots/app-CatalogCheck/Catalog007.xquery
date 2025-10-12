xquery version "3.0";

(: output the non-unique test names. There should be none :)
declare namespace fots = "http://www.w3.org/2010/09/qt-fots-catalog";

let $testsets := //fots:test-set/@file/doc(resolve-uri(., base-uri(..)))
for $xq-testcase in $testsets//fots:test-case
let $testname := $xq-testcase/@name
group by $testname
where count($xq-testcase) gt 1
return ($testname || "(" || count($xq-testcase) || ")")
