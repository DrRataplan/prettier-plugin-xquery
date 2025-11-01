declare function Q{http://www.example.com/ns/my}func (
  $a as xs:integer
) as xs:integer {
  $a + 2
};

<out>{ Q{http://www.example.com/ns/my}func(12) }</out>
