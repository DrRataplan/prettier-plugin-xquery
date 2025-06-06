declare function local:myFunc () {
  attribute n2 {
    "content"
  }
};

<b>{
    local:myFunc()
  }{
    attribute name {
      "content"
    }
  }</b>
