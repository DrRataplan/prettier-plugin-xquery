declare namespace map = "http://www.w3.org/2005/xpath-functions/map";

let $dbj := json-doc("http://www.w3.org/qt3/app/UseCaseR31/users2-json")[.(
  "name"
) =
  "Deadbeat Jim"]
return map:put($dbj, "status", "credit card declined")
