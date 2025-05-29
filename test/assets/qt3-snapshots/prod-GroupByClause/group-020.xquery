declare
  variable $in := <Folder Name="root">
        <Folder Name="user">
          <File Name="Fred"/>
          <File Name="Bill"/>
          <File Name="Fred"/>
        </Folder>
        <Folder Name="manager">
          <File Name="Jane"/>
          <File Name="Mary"/>
          <File Name="Jane"/>
        </Folder>
      </Folder>;

declare function local:pathName ($resource as element()) as xs:string {
  string-join($resource/ancestor-or-self::*/@Name, "/")
};

for $resource in $in//(Folder | File)
let $path := local:pathName($resource)
group by $path
where count($resource) gt 1
return $path
