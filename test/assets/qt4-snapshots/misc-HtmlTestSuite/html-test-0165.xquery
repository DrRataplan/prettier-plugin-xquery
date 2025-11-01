import module namespace cmp = "http://www.w3.org/qt4cg/compare";

cmp:compare(
  parse-html(unparsed-text("HtmlTestSuite/files/test-0165.html")), doc(
    "HtmlTestSuite/results/test-0165.xhtml"
  )
)
