declare function Q{http://www.example.com/ns/my}fn (
  $a as xs:integer
) as xs:integer {
  $a + 2
};

<out>{ Q{http://www.example.com/ns/my}fn(12) }</out>
