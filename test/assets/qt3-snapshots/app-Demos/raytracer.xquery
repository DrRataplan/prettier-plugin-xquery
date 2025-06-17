import module namespace raytracer = "http://www.xqsharp.com/raytracer";
import module namespace scene = "http://www.xqsharp.com/raytracer/scene";

declare variable $width := 64;

declare variable $height := 64;

declare variable $input-context := .;

declare variable $scene := scene:prepare-scene($input-context/scene);

string-join(
  (
    "P3",
    string-join((string($width), string($height)), " "),
    "255" (: : Now the pixel data. We take each pixel in the image, and recenter it, so that the : y co-ordinate ($y-recentered) ranges from -0.5 at the bottom of the image, to 0.5 : at the top of the image. : : The aspect ratio is used to "stretch" the range of x-coordinate values to stop the : image from being skewed. :),
    let $aspect-ratio := $width div $height
    for $y in 1 to $height
    let $y-recentered := ((-$y div $height) + 0.5)
    for $x in 1 to $width
    let $x-recentered := (($x div $width) - 0.5) * $aspect-ratio
    return (: plot-pixel returns us the rgb values of the color of this pixel.
        		  We convert these to an integer value in the range [0, 255], and output them. :) string-join(
        for $channel in
          raytracer:plot-pixel($scene, $x-recentered, $y-recentered)
        return string(floor($channel * 255)),
        " "
      )
  ),
  "&#xA;"
)
