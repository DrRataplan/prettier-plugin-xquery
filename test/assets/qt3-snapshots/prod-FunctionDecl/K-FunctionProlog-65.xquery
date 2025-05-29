declare function local:myFunction () as empty-sequence() {
  fn:error()
};

QName("http://example.com/ANamespace", local:myFunction())
