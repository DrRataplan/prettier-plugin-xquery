declare variable $span := <root><span
    class="ocr_word" title="bbox 1388 430 1461 474"
    >the</span>
<span
    class="ocr_word" title="bbox 1514 433 1635 476"
    >other</span>
<span
    class="ocr_word" title="bbox 133 498 317 554"
    >pcssible</span>
<span
    class="ocr_word" title="bbox 354 498 590 541"
    >derivation</span>
<span
    class="ocr_word" title="bbox 631 497 738 538"
    >from</span>
<span
    class="ocr_word" lang="grc" title="bbox 772 495 799 547" xml:lang="grc"
    >?</span>
<span
    class="ocr_word" lang="grc" title="bbox 835 495 1019 538" xml:lang="grc"
    >???????</span>
<span
    class="ocr_word" title="bbox 134 567 220 607"
    >dies</span>
<span
    class="ocr_word" title="bbox 257 566 462 607"
    >erastinus</span></root>;

declare function local:extract-text ($spans) {
  for $s in $spans//span
  return string($s)
};

local:extract-text($span)
