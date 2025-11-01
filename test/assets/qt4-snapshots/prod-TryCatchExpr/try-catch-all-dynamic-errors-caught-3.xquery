try {
  element element1 { attribute a { "" }, attribute a { "" } }
} catch err:XQDY0025 { "Attribute name duplicate." }
