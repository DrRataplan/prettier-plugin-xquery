declare variable $codepoints := (
  9, 10, 13, 32 to 55295, 57344 to 65532, 65536 to 1114111
);

declare variable $count := count($codepoints);

declare variable $lineWidth := 70;

<allCodepoints><r>{
      codepoints-to-string($codepoints)
    }</r></allCodepoints>
(:<allCodepoints>{ 
            for $i in (1 to $count idiv $lineWidth) 
            let $startOffset := (($i - 1) * $lineWidth) + 1 
            return (<r s="{$codepoints[$startOffset]}" e="{$codepoints[$startOffset] + $lineWidth}"> { 
                codepoints-to-string(subsequence($codepoints, $startOffset, $lineWidth)) } </r>, "&#xA;") 
                } </allCodepoints>:)
