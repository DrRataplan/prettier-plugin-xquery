declare default element namespace "http://www.example.com/";

let $i := element e {
    element b {
      ()
    }
  }
return (count(in-scope-prefixes($i/b)), count(in-scope-prefixes($i)))
