let $e :=
  document {
    <p
      xmlns="http://example.com/one"
      author="Friedrich von Schiller"
      xml:lang="de"
    >
Freude, schöner Götterfunken,<br />
Tochter aus Elysium,<br />
Wir betreten feuertrunken,<br />
Himmlische, dein Heiligtum.</p>
  }

return fn:path($e)
