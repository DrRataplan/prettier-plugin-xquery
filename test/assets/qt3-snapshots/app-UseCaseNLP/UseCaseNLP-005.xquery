declare function local:words-only ($s) {
  for $w in $s
  where not($w(2) = (".", ",", ";", ":"))
  return $w(1)
};

for sliding window $w in local:words-only(
  json-doc("speech-representation.json")?*
)
  start at $i when true()
  only end at $j when $j - $i eq 2
return array{ $w }
