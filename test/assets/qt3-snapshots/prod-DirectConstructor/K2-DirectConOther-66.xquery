declare namespace a = "http://example.com/NotThis";
declare namespace g = "http://example.com/NotThis2";

<a
  xmlns:a="http://example.com/NotThis" xmlns:b="http://example.com"
  > <b
    xmlns:a="http://example.com/" xmlns:c="http://example.com/c"
    > <c xmlns:d="http://example.com/d" /> {
      for $i in in-scope-prefixes(<e />)
      order by $i
      return $i,
      "|",
      for $i in in-scope-prefixes(element e {
            ()
          })
      order by $i
      return $i
    } <d xmlns:e="http://example.com/d" /> </b> </a>
