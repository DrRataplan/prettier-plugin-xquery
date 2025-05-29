import schema  "http://www.w3.org/2005/xpath-functions";

analyze-string(
  "banana",
  "(b)(anana)"
) instance of schema-element(fn:analyze-string-result)
