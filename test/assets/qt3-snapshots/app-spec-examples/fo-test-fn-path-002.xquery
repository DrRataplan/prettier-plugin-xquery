let $e := document {
    <p xmlns="http://example.com/one" xml:lang="de" author="Friedrich von Schiller">
Freude, schöner Götterfunken,<br/>
Tochter aus Elysium,<br/>
Wir betreten feuertrunken,<br/>
Himmlische, dein Heiligtum.</p>
  }

return fn:path($e/*:p)
