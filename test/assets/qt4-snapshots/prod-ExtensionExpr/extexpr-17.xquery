declare namespace ns1 = "http://example.org/someweirdnamespace";

(# ns1:you-do-not-know-me-as-index #){typeswitch ("A String")
  case $i as xs:decimal return
    "test failed"
  case $i as xs:integer return
    "test failed"
  case $i as xs:string return
    "test passed"

  default return
    "test failed"}
