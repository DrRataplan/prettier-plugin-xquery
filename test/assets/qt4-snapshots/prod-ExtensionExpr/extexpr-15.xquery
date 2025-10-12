declare namespace ns1 = "http://example.org/someweirdnamespace";

(# ns1:you-do-not-know-me-as-index #){if (fn:true()) then
  "passed"
else
  "failed"}
