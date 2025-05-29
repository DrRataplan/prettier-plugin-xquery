declare variable $vA := (
  "B STRING", current-time(), string(<e>content</e>)
)[1] treat as xs:string;

declare variable $vB := (
  "no match", current-time(), string(<e>content</e>)
)[1] treat as xs:string;

(lower-case($vA) eq lower-case($vB))
