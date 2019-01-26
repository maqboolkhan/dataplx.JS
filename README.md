Dataplx.JS
======

Dataplx is a JQUERY plugin which let you show or hide content with some nice effects without writting any JavaScript!!
Its a bare bones plugin without any `css` styling so its just provides funcationality and leave design to you.
Dataplx.js intended to use with message boxes! let starts how to use it..


# Installing

Add `dataplx.min.js` in your `head` section

```html
	<script src="dataplx.min.js"></script>
```
now you can start using `dataplx` :)

or you can install via **Bower** 

```
bower install dataplx.js
```

## Spices:

`dataplx` comes with two basic operations

1. Close
2. Toggle

`close` removes element from DOM and `toggle` let you hide and show your content!

`dataplx` comes with two animations which you can add with any operation!!

1. Fade
2. Shrink

## How to:

### Close:

```html
	<div>
		lorem ipsum solar moon eclipse
		<span data-plx-close>close</span>
	</div>
```

now if you click on `span` it will remove `div` (Parent element)!!
You can add `data-plx-close` to any element and when `click` will trigger on it `dataplx.JS` will remove its parent element.. Simple Enough

#### Specifying Action:

So you dont want to remove parent element ? You can specify which element to remove just set value of `data-plx-close` as

```html
	<span data-plx-close="div.a">close</span>
	<br/>
	<div class="a">
		lorem ipsum solar moon eclipse
	</div>
```

remember `data-plx-close` accept `selector` as it value and selects a first element if there would more than one element match for given selector!!

#### With Animation:

Example 1:

To use animation just add `data-plx-[animation-name]` as

With fade animation:

```html
	<span data-plx-close="div.a" data-plx-fade>close</span>
	<br/>
	<div class="a">
		lorem ipsum solar moon eclipse
	</div>
```

With shrink animation:

```html
	<div>
		lorem ipsum solar moon eclipse
		<span data-plx-close data-plx-shrink>close</span>
	</div>
```

You can also specify timing as

With shrink animation with timing:

```html
	<span data-plx-close="div.a" data-plx-shrink="2000">close</span>
	<br/>
	<div class="a">
		lorem ipsum solar moon eclipse
	</div>
```

With fade animation with timing:

```html
	<div>
		lorem ipsum solar moon eclipse
		<span data-plx-close data-plx-shrink="3000">close</span>
	</div>
```

`Remember` time will be pass in `milliseconds`!!

### Toggle:

`Toggle` is same as `Close` but it do not remove element while it hides element if visible or show element if hide!

`Remember` if you don't provide `action` then it will toggle its sibling element as

```html
	<span data-plx-toggle>Toggle</span>
	<div>
		lorem ipsum solar moon eclipse
	</div>
```

Please check `index.html` for more example and demos.
