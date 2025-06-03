declare namespace array = "http://www.w3.org/2005/xpath-functions/array";

declare variable $data := map {
  "color": "blue",
  "closed": true(),
  "points": [[10, 10], [20, 10], [20, 20], [10, 20]]
};

declare variable $stroke := attribute stroke {
  $data("color")
};

declare variable $points := attribute points {
  array:flatten($data("points"))
};

if ($data("closed")) then
  <svg><polygon>{
        $stroke, $points
      }</polygon></svg>
else
  <svg><polyline>{
        $stroke, $points
      }</polyline></svg>
