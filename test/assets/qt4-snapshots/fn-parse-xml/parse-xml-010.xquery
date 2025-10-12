parse-xml(
  "<!DOCTYPE a [<!ELEMENT a (#PCDATA)><!ENTITY foo SYSTEM 'parse-xml/foo.entity'>]><a>" ||
    codepoints-to-string(38) ||
    "foo;</a>"
)
