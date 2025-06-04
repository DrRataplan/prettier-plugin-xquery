declare function local:tag ($arg) as element() {
  element {"tag"} {
    $arg
  }
};

<element>{
    processing-instruction {"pi"} {
      "content", local:tag("?&gt;")
    }
  }</element>
