let $html :=
  <html>
    <body>
      <div id="main"><p class="para">Hello World!</p></div>
      <p class="para">Goodbye!</p>
    </body>
  </html>
let $css-selectors := <selectors><id>main</id><class>para</class></selectors>/*
let $interpreter :=
  function ($ctx, $selector) {
    typeswitch ($selector)
      case $a as element(id) return
        $ctx//*[@id = $a/text()]
      case $a as element(class) return
        $ctx//*[@class = $a/text()]

      default return
        ()
  }
let $result := fold-left($css-selectors, $html, $interpreter)
return $result/text()
