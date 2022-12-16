# Custom-Slider
This is an [easy-to-use](#basic-manifestation) custom range slider with [14 configurable options](#customizable-attributes). It is developed using HTML, CSS, and Vanilla JS with no additional modules required.

## Basic Manifestation:
First, add this script tag in the ending of your body:
```
<script src="https://themyth1710.github.io/Custom-Slider/slider.js"></script>
```
Next, for a simple use add the HTML snippet anywhere you wish to create a slider:
```
<custom-slider></custom-slider>
```
_Note: This is a default slider which can be [customized](#customizable-attributes)_

## Customizable Attributes:

- [`min`](#min): The minimum value of the range. _(Default is `0`)_
- [`max`](#max): The maximum value of the range. _(Default is `100`)_
- [`value`](#value): The default value of the range. _(Default is `0`)_
- [`step`](#step): The step of the range. _(Default is `1`)_
- [`width`](#width): The width of the slider. _(Default is `100%`)_
- [`height`](#height): The height of the slider. _(Default is `8px`)_
- [`thumbWidth`](#thumbWidth): The width of the thumb. _(Default is `8px`_
- [`thumbHeight`](#thumbHeigh): The height of the thumb. _(Default is `18px`)_
- [`thumbColor`](#thumbColor): The color of the thumb. _(Default is ![#EDEDEE](https://placehold.co/15x15/EDEDEE/EDEDEE.png) `#EDEDEE`)_
- [`textColor`](#textColor): The color of the displayed value. _(Default is ![#0084C2](https://placehold.co/15x15/0084c2/0084c2.png) `#0084C2`)_
- [`fillColor`](#fillColor): The color of the track that is covered. _(Default is ![#0084C2](https://placehold.co/15x15/0084c2/0084c2.png) `#0084C2`)_
- [`trackColor`](#trackColor): The color of the track. _(Default is ![#494949](https://placehold.co/15x15/494949/494949.png) `#494949`)_
- [`doneColor`](#doneColor): The color of the track when max value is reached. 
- [`transition`](#transition): The common transitional change in the slider. _(Default is `0s` or instant)_

_(Default values are appicable if nothing is passed or when the passed input is invalid)_
<br>
### `min`:
**Default Value:** `0`<br>
**Acceptable Value Type:** `int`<br>
**Usage:**<br>
### `width`:
**Default Value:** `100%`<br>
**Acceptable Value Types:** `percentage`, `CSS measurement unit` (such as `px`, `rem`)<br>
**Usage:**<br>
This sets the width of the slider to `500px` _(Both `500` and `500px` will return the same output)_.
```
<custom-slider width="500"></custom-slider>
```
This sets the width of the slider to `50%` of the screen size.
```
<custom-slider width="50%"></custom-slider>
```
### `height`:
**Default Value:** `18px`<br>
**Acceptable Value Types:** `percentage`, `CSS measurement unit` (such as `px`, `rem`)<br>
**Usage:**<br>
```
<custom-slider height="50"></custom-slider>
```
This sets the height of the slider to `50px` _(Both `50` and `50px` will return the same output)_.
```
<custom-slider height="50%"></custom-slider>
```
This sets the height of the slider to `50%` of the screen size.
