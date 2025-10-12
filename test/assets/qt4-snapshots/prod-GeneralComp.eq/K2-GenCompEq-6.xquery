declare variable $vA := (
  "B STRING", current-time(), string(<e>content</e>)
)[1] treat as xs:string;

declare variable $vB := (
  "b string", current-time(), string(<e>content</e>)
)[1] treat as xs:string;

(lower-case($vA) = upper-case($vB))
