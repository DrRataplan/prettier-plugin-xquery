declare variable $e := <a b="content"><?b asd?><b /></a>;

<a>{ $e/processing-instruction() }</a>
