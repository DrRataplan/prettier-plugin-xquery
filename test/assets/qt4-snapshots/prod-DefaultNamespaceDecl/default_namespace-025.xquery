declare default element namespace "##any";

let $in := parse-xml(
  "<a><n:b xmlns:n='http://www.example.com/test'>25</n:b><b>36</b><b xmlns='ex2'>49</b></a>"
)
return $in//b/string()
