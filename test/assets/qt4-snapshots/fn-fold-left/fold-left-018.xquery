let $text :=
"Peter Piper picked a peck of pickled peppers A peck of pickled peppers Peter Piper picked"
let $tokens := tokenize($text, "\s")
let $counter := function ($result, $word) {
  let $word-count := $result[@value = $word]
  return if (empty($word-count)) then (
      $result, <word count="1" value="{ $word }" />
    ) else (
      $result except $word-count,
      <word
        count="{ number($word-count/@count) + 1 }"
        value="{ $word-count/@value }" />
    )
}
let $words := fold-left($tokens, (), $counter)
return (
    number($words[@value = "Peter"]/@count),
    number($words[@value = "Piper"]/@count),
    number($words[@value = "pickled"]/@count)
  )
