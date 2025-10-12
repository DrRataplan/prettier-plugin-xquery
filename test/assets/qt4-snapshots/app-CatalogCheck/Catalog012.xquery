declare namespace fots = "http://www.w3.org/2010/09/qt-fots-catalog";

let $testsets := //fots:test-set/@file/doc(resolve-uri(., base-uri(..)))
return $testsets//fots:test-case[.//fots:assert-xml[starts-with(., "<?xml")]]
