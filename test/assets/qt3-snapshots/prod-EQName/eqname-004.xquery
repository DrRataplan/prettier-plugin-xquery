declare function local:fn (
  $a as Q{http://www.w3.org/2001/XMLSchema}integer
) as element(Q{http://www.example.com/ns/my}e) {
  <e xmlns="http://www.example.com/ns/my">{
      $a
    }</e>
};

<out>{
    local:fn(12)
  }</out>
