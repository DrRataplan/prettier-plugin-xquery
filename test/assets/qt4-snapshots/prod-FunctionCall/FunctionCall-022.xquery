declare function local:unique ($in as xs:integer*) as xs:boolean {
  count($in) = count(distinct-values($in))
};

(local:unique([1, 2, 3, 4, 5]), local:unique([1, 2, 3, 4, 4]))
