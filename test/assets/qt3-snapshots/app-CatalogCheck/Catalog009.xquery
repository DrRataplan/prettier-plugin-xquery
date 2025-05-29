xquery version "3.0";

declare namespace fots = "http://www.w3.org/2010/09/qt-fots-catalog";

let $testsets := //fots:test-set/@file/doc(resolve-uri(., base-uri(..)))
for $dependencyTS in $testsets//fots:dependency
let $name := $dependencyTS/@type
let $value := $dependencyTS/@value
group by $name, $value
order by $name , $value
return <dependency type='{
    $name
  }' value='{
    $value
  }' />
