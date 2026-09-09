declare variable $vA as xs:string := (
  "B STRING", current-time(), string(<e>content</e>)
)[1] treat as xs:string;

declare variable $vB as xs:string := (
  "b string", current-time(), string(<e>content</e>)
)[1] treat as xs:string;

(lower-case($vA) = lower-case($vB))
