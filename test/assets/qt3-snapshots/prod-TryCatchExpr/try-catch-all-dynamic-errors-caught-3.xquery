try {
  element element {
    attribute a {
      ""
    }, attribute a {
      ""
    }
  }
} catch err:XQDY0025 {
  "Attribute name duplicate."
}
