declare namespace prefix = "http://example.com/";

declare variable $a := <e><a /><b /><c /></e>;

<a>{
    $a/prefix:* eq 1
  }</a>
