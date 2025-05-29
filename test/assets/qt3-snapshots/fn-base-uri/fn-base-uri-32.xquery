declare base-uri "http://example.org";

fn:string((document {
      <aDocument>some content</aDocument>
    })/base-uri())
