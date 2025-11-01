import module namespace cmp = "http://www.w3.org/qt4cg/compare";

cmp:compare(
  parse-html(unparsed-text("HtmlTestSuite/files/test-1351.html")), doc(
    "HtmlTestSuite/results/test-1351.xhtml"
  )
)
