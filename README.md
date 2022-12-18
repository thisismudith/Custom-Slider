# Custom-Slider
This is an [easy-to-use](#installation) custom range slider with [19 configurable options](#customizable-attributes). It is developed using HTML, CSS, and Vanilla JS with no additional modules required.

## Installation:
Add this script tag in the ending of your body:
```
<script src="https://themyth1710.github.io/Custom-Slider/slider.js"></script>
```
For a simple use add the HTML snippet anywhere you wish to create a slider:
```
<custom-slider></custom-slider>
```
_Note: This is a default slider which can be [customized](#customizable-attributes)_

## Customizable Attributes:

- [`min`](#min): The minimum value of the range.
- [`max`](#max): The maximum value of the range.
- [`value`](#value): The starting value of the range.
- [`step`](#step): The step of the range.
- [`width`](#width): The width of the slider.
- [`height`](#height): The height of the slider.
- [`trackRadius`](#trackradius): The border-radius of the track.
- [`thumbRadius`](#thumbradius): The border-radius of the thumb.
- [`thumbWidth`](#thumbwidth): The width of the thumb.
- [`thumbHeight`](#thumbheight): The height of the thumb.
- [`thumbColor`](#thumbcolor): The color of the thumb.
- [`textColor`](#textcolor): The color of the displayed value.
- [`fillColor`](#fillcolor): The color of the track that is covered.
- [`trackColor`](#trackcolor): The color of the track.
- [`doneColor`](#donecolor): The color of the track when max value is reached. 
- [`transition`](#transition): The common transitional change in the slider.
- [`hideValue`](#hidevalue): This hides the slider value from being displayed.
- [`forceContinue`](#forcecontinue): This continues with the slider parameters passed, irrespective of proportionality. [Learn more](#the-concept-of-proportionality)
- [`smooth`](#smooth): This makes your range slider more smoother. [Learn more](#why-smooth)
- [`onchange`](#onchange): This allows you to run custom functions on value change. [Learn more](#use-for-devs)

_(Default values are appicable if nothing is passed or when the passed input is not acceptable)_
<br>
### `min`:
**Default Value:** `0`<br>
**Acceptable Value:** `float`, `int`<br>
**Usage:**<br>
This sets the minimum value of the slider to `10`.
```
<custom-slider min=10></custom-slider>
```

### `max`:
**Default Value:** `100`<br>
**Acceptable Value:** `float`, `int`<br>
**Usage:**<br>
```
<custom-slider max=50></custom-slider>
```
This sets the maximum value of the slider to `50`.

### `value`:
**Default Value:** `min` (value of `min`)<br>
**Acceptable Value:** `float`, `int > 0`<br>
**Usage:**<br>
```
<custom-slider value=10></custom-slider>
```
This sets the starting value of the slider to `10`. _(If value passed is outside the `min` and `max` bounds, the closest bound is applied)_

### `step`:
**Default Value:** `1`<br>
**Acceptable Value:** `float`, `int`<br>
**Usage:**<br>
```
<custom-slider step=5></custom-slider>
```
This sets the step of the slider to `5`. _(If value passed is negative, the absolute is applied)_

### `width`:
**Default Value:** `100%`<br>
**Acceptable Values:** `float`, `int`, `percentage`, `px`<br>
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
**Acceptable Values:** `float`, `int`, `percentage`, `px`<br>
**Usage:**<br>
```
<custom-slider height="50"></custom-slider>
```
This sets the height of the slider to `50px` _(Both `50` and `50px` will return the same output)_.
```
<custom-slider height="50%"></custom-slider>
```
This sets the height of the slider to `50%` of the available area.

### `trackRadius`:
**Default Value:** `4px`<br>
**Acceptable Values:** `float`, `int`, `percentage`, `px`<br>
**Usage:**<br>
```
<custom-slider trackRadius="60"></custom-slider>
```
This sets the border-radius of the track to `60px` _(Both `60` and `60px` will give the same output)_.<br>
_Note: `trackRadius` values more than `60` or `60px` (not percentage) will lead the same output due to CSS border-radius styling.__

### `thumbRadius`:
**Default Value:** `1px`<br>
**Acceptable Values:** `float`, `int`, `percentage`, `px`<br>
**Usage:**<br>
```
<custom-slider thumbRadius="60"></custom-slider>
```
This sets the border-radius of the thumb to `60px` _(Both `60` and `60px` will return the same output)_.

### `thumbWidth`:
**Default Value:** `8px`<br>
**Acceptable Values:** `float`, `int`, `percentage`, `px`<br>
**Usage:**<br>
```
<custom-slider thumbWidth="12"></custom-slider>
```
This sets the width of the thumb to `12px` _(Both `12` and `12px` will return the same output)_.
```
<custom-slider thumbWidth="10%"></custom-slider>
```
This sets the width of the thumb to `10%` of the available area.

### `thumbHeight`:
**Default Value:** `height + 7px` (`7px` more than the value of `height`) <br>
**Acceptable Values:** `float`, `int`, `percentage`, `px`<br>
**Usage:**<br>
```
<custom-slider thumbHeight="50"></custom-slider>
```
This sets the height of the slider to `50px` _(Both `50` and `50px` will return the same output)_.
```
<custom-slider thumbHeight="5%"></custom-slider>
```
This sets the height of the thumb to `5%` of the available area.

### `thumbColor`:
**Default Value:** ![#EDEDEE](https://placehold.co/15x15/EDEDEE/EDEDEE.png) `#EDEDEE`<br>
**Acceptable Value:** `color value` (such as `white`, `#ffffff`)<br>
**Usage:**
```
<custom-slider thumbColor="#ff00000"></custom-slider>
```
This sets the background color of the thumb to `#ff000000` (red).

### `textColor`:
**Default Value:** ![#0084c2](https://placehold.co/15x15/0084c2/0084c2.png) `#0084c2`<br>
**Acceptable Value:** `color value` (such as `white`, `#ffffff`)<br>
**Usage:**
```
<custom-slider textColor="blue"></custom-slider>
```
This sets the background color of the thumb to `blue`.

### `fillColor`:
**Default Value:** ![#0084c2](https://placehold.co/15x15/0084c2/0084c2.png) `#0084c2`<br>
**Acceptable Value:** `color value` (such as `white`, `#ffffff`)<br>
**Usage:**
```
<custom-slider fillColor="rgb(0, 255, 0)"></custom-slider>
```
This sets the background color of the thumb to `rgb(0, 255, 0)` (light green).

### `trackColor`:
**Default Value:** ![#494949](https://placehold.co/15x15/494949/494949.png) `#494949`<br>
**Acceptable Value:** `color value` (such as `white`, `#ffffff`)<br>
**Usage:**
```
<custom-slider trackColor="hsl(39, 100%, 50%)"></custom-slider>
```
This sets the background color of the thumb to `hsl(39, 100%, 50%)` (orange).

### `doneColor`:
**Default Value:** `fillColor` (same value as of `fillColor`)<br>
**Acceptable Value:** `color value` (such as `white`, `#ffffff`)<br>
**Usage:**
```
<custom-slider doneColor="#80008080"></custom-slider>
```
This sets the background color of the thumb to `#80008080` (purple with 0.5 opacity).

### `transition`:
**Default Value:** `0s`
**Acceptable Value:** `float`, `int`, `seconds value`
**Usage:**
```
<custom-slider transition="1"</custom-slider>
```
This sets the transition of all changes in the slider's CSS to `1 second` _(Both `1` and `1s` will return the same output)_.

### `hideValue`:
This is a **no-value** attribute.
**Usage:**
```
<custom-slider hideValue></custom-slider>
```
This hides the slider value from being shown.<br>
Note: If this value is not passed, the slider value will be shown by default.

### `forceContinue`:
This is a **beta** feature and can give unexpected outputs. _(Pass this attribute for normal functionality)_
This is a **no-value** attribute.<br>
**Usage:**<br>
```
<custom-slider forceContinue></custom-slider>
```
This continues with the slider parameters passed, irrespective of proportionality.<br>
Note: If this paramenter is not passed, the code will update `step` to the nearest value _(from original `step`)_ to make it proportional
### The Concept of Proportionality:
In this sense, proportionality means that your slider will be complete. For example, your inclusive bounds are `0.1 - 100` with a step of `1`. This is not proportional since sliding would just increase the minimum value from 1. (i.e sliding once makes `0.1 + 1 = 1.1`). In the end, the last possible value will be `99.9` which is not equal to `100` (max value) hence it is not proportional.<br>
In layman's language, proportionality checks if the slider will ever reach the `max` value by the current parameters passed.<br><br>
Here are a few examples of **not proportional parameters**:
```
<custom-slider min="10" max="98.1" step="2"></custom-slider>
```
**This is not proportional**. The code will override `step` to make it proportional _(since `forceContinue` is not passed)_
```
<custom-slider min="0.2" max="100" step="1" forceContinue></custom-slider>
```
**This is not proportional**. However, the code won't override here. _(since `forceContinue` is passed)_ which will change the `step` to `0.2`<br><br>
Here are a few examples of **proportional parameters**:
```
<custom-slider min="50" max="100" step="5"></custom-slider>
```
**This is proportional**.
```
<custom-slider min="1" max="5" step="0.1" forceContinue></custom-slider>
```
**This is proportional**. The code won't override even if `forceContinue` is passed. _(since the slider is proportional)_<br>

### `smooth`:
**Default Value:** `0`<br>
**Acceptable Values:** `float`, `int`<br>
**Usage:**<br>
```
<custom-slider smooth></custom-slider>
```
This will update `step` to make the slider move smoothly.
```
<custom-slider smooth="10"></custom-slider>
```
This will update `step` to make the slider move smoothly with minium 10 ranges in between.<br>
For example the range bound is `0 -50` with default step `1`. This makes the slider have 50 internal range values. Using `smooth="10"` will calculate a value such that the internal ranges are closest to at least `10` since it can't be always `10` _([learn more about proportionality](#the-concept-of-proportionality))_. In this case, the new step would be `5`.<br>
**Did You Know?** This is the only JS framework that has this feature to such a flexible extent.<br>
### Why Smooth?
- Makes your slider look so much better.
- No extra calculations needed, just enter your bounds (min-max) and the number of internal ranges _(if you explicitly need them)_.<br>
- Improves user interface and makes your website so cool.<br>

### `onchange`:
This is a **beta-feature** and will be improved in the future.<br>
**Default Value:** `null`<br>
**Acceptable Value:** `javascript function` _(only proper javascript function with syntaxes can run)_<br>
**Usage:**
```
<custom-slider onchange="logger(this.getAttribute('sliderValue'))"></custom-slider>
<script>
logger(val){
    console.log(val)
}
</script>
```
This keeps on logging the new value of the slider in console. [_(learn more about sliderValue)_](#how-to-do-it)<br>
**Note:** This attribute only supports calling function with the args, and not creating functions inside. [Learn more](#use-for-devs)

### Use For Devs:
This JS framework provides support for developers to easily fetch the value of the slider for custom usage.<br>
#### How to do it?
```
// If you have only 1 slider
var sliderValue = document.querySelector("custom-slider").getAttribute("sliderValue")

// If you have multiple sliders
var sliderValues = {};
document.querySelectorAll("custom-slider").forEach(slider => sliderValues[slider.id] = slider.getAttribute("sliderValue"))

// If you want value of a specific slider
var querySelector = "" // your query selector here
var customValue = document.querySelector(querySelector).getAttribute("sliderValue")
```
## Upcoming Patches/Updates for Version 2.0 _(high - low priority)_:
- [ ] Fix v1 code bugs _(not discovered as of yet)_
- [ ] New attributes for an even better configuration.
- [ ] A new system for attribute management.
- [ ] New scale to display `min` and `max` values.
- [ ] Improved design configuration to support all web designs.
