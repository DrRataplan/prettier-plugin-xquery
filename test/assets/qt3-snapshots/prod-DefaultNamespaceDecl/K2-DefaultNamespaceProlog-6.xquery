declare default element namespace "http://example.com/";

namespace-uri-from-QName(xs:QName("localName")), <e xmlns="">{
    " | ", namespace-uri-from-QName(xs:QName("localName"))
  }</e>, namespace-uri-from-QName(xs:QName("localName"))
