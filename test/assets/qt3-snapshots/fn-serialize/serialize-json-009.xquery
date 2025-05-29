let $params := map {"method": "json", "json-node-output-method": "xml"},
  $s := serialize(array{
      text {
        "a"
      }, processing-instruction {"a"} {
        "b"
      }, comment {
        "a"
      }, element {"a"} {
        "b"
      }, document {
        element {"a"} {
          "b"
        }
      }
    }, $params)
return matches($s, '\["a","<\?a b\?>","<!--a-->","<a>b<\\/a>","<a>b<\\/a>"\]')
