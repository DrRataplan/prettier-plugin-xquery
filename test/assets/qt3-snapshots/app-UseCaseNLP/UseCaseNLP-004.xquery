for $word in json-doc("speech-representation.json")?*
let $pos := $word(2)
let $lexeme := $word(1)
where $pos = ("JJ", "NN", "RB", "VB")
group by $pos
order by $pos
return <pos name="{
      $pos
    }">
    {
      for $l in distinct-values($lexeme)
      return <lexeme>{
            $l
          }</lexeme>
    }
  </pos>
