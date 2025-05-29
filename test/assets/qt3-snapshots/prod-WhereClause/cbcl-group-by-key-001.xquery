declare function local:get-words () {
  tokenize("she sells sea shells by the sea shore", "\s+")
};

let $words := local:get-words()
let $distinct-words := distinct-values($words)
for $word in $distinct-words
return <word word="{
    $word
  }" count="{
    count($words[. = $word])
  }" />
