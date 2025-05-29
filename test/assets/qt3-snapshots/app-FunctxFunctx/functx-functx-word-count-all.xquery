declare namespace functx = "http://www.example.com/";

(:~ : The number of words : : @author Priscilla Walmsley, Datypic : @version 1.0 : @see http://www.xqueryfunctions.com/xq/functx_word-count.html : @param $arg the string to measure :)
declare function functx:word-count ($arg as xs:string?) as xs:integer {
  count(tokenize($arg, "\W+")[. != ""])
};

(
  functx:word-count("hello there world"),
  functx:word-count(" hello world "),
  functx:word-count("a.b.c")
)
