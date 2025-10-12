let $in := codepoints-to-string(
  (
    72,
    101,
    108,
    108,
    111,
    32,
    128512,
    128515,
    128516,
    32,
    128156,
    129446,
    32,
    252,
    228,
    246,
    36
  )
)
return replace($in, "\p{IsEmoticons}+", "") => string-to-codepoints()
