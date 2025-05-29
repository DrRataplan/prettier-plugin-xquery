let $doc := <html><head/><body><p>Hello World!</p></body></html>
let $params := map {"method": "html", "html-version": 5.0}
return serialize($doc, $params)
