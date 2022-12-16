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
- [`value`](#value): The starting value of the range. _(Default is `0`)_
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
This sets the minimum value of the slider to `10`.
```
<custom-slider min=10></custom-slider>
```

### `max`:
**Default Value:** `100`<br>
**Acceptable Value Type:** `int`<br>
**Usage:**<br>
```
<custom-slider max=50></custom-slider>
```
This sets the maximum value of the slider to `50`.

### `value`:
**Default Value:** `min` (value of `min`)<br>
**Acceptable Value Type:** `int > 0`<br>
**Usage:**<br>
```
<custom-slider value=10></custom-slider>
```
This sets the starting value of the slider to `10`. _(If value passed is outside the `min` and `max` bounds, the closest bound is applied)_

### `step`:
**Default Value:** `1`<br>
**Acceptable Value Type:** `int`<br>
**Usage:**<br>
```
<custom-slider step=5></custom-slider>
```
This sets the step of the slider to `5`. _(If value passed is negative, the absolute is applied)_

### `width`:
**Default Value:** `100%`<br>
**Acceptable Value Types:** `percentage`, `CSS measurement unit` (such as `px`, `rem`)<br>
**Usage:**<br>
```
<custom-slider width="500"></custom-slider>
```
This sets the width of the slider to `500px` _(Both `500` and `500px` will return the same output)_.
```
<custom-slider width="50%"></custom-slider>
```
This sets the width of the slider to `50%` of the available area.

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
This sets the height of the slider to `50%` of the available area.

### `thumbWidth`:
**Default Value:** `8px`<br>
**Acceptable Value Types:** `percentage`, `CSS measurement unit` (such as `px`, `rem`)<br>
**Usage:**<br>
```
<custom-slider thumbWidth="10"></custom-slider>
```
This sets the width of the thumb to `10px` _(Both `10` and `10px` will return the same output)_.
```
<custom-slider thumbWidth="10%"></custom-slider>
```
This sets the width of the thumb to `10%` of the available area.

### `thumbHeight`:
**Default Value:** `height + 7px` (`7px` more than the value of `height`) <br>
**Acceptable Value Types:** `percentage`, `CSS measurement unit` (such as `px`, `rem`)<br>
**Usage:**<br>
```
<custom-slider height="50"></custom-slider>
```
This sets the height of the slider to `50px` _(Both `50` and `50px` will return the same output)_.
```
<custom-slider thumbHeight="5%"></custom-slider>
```
This sets the height of the thumb to `5%` of the available area.
