try {
  validate { document {
      <a/>, <b/>
    } }
} catch err:XQDY0061 {
  "Invalid document."
}
