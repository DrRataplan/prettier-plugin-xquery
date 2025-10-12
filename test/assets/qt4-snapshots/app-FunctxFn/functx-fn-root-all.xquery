let $in-xml := <a><x>123</x></a>
return document { (root((/)//item[1]), root($in-xml/x)) }
