declare default element namespace "http://example.com/";

<e xmlns:p="http://example.com/"> {
  count(in-scope-prefixes(<e/>)), count(in-scope-prefixes(element e {
        ()
      }))
} </e>
