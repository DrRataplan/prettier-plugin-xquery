declare namespace functx = "http://www.example.com/";

declare function functx:left-trim ($arg as xs:string?) as xs:string {
  replace($arg, "^\s+", "")
};

(
  functx:left-trim(" xyz"),
  functx:left-trim(" xyz    x"),
  functx:left-trim("xyz")
)
