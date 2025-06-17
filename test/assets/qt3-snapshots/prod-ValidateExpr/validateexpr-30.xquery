import schema default element namespace  "http://www.w3.org/XQueryTestOrderBy";

let $document as document-node(element(Strings)) :=
  document {
    (
      <!--comment-->,
      <Strings><orderData>one string</orderData></Strings>,
      <?processing instruction?>
    )
  }
let $validated as document-node(schema-element(Strings)) :=
  validate { $document }
return count($validated/node())
