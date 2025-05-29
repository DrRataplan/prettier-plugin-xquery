declare namespace map = "http://www.w3.org/2005/xpath-functions/map";
declare namespace array = "http://www.w3.org/2005/xpath-functions/array";

let $input := json-doc("http://www.w3.org/qt3/app/UseCaseR31/employees-json")
for $k in map:keys($input)
order by $k descending
return <department name="{
    $k
  }">
    {
    let $array := $input($k)
    for $i in 1 to array:size($array)
    let $emp := $array($i)
    return <employee>
        <firstName>{
        $emp("firstName")
      }</firstName>
        <lastName>{
        $emp("lastName")
      }</lastName>
        <age>{
        $emp("age")
      }</age>
      </employee>
  }
  </department>
