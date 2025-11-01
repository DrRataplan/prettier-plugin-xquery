import module namespace cmp = "http://www.w3.org/qt4cg/compare";

cmp:compare(
  parse-html(unparsed-text("HtmlTestSuite/files/test-1261.html")), doc(
    "HtmlTestSuite/results/test-1261.xhtml"
  )
)
