# ripples.js
A simple ripple effect helper in Javascript

## Setup

- Add this line after your `</body>` tag
```html
<script src="./js/ripples.js"></script>
```

## Sample Usage

```html
<button class="ripple" type="button" data-ripple="#fff" data-ripple-opacity="0.3" data-ripple-duration="0.4">Click Me</button>
```
```html
<div class="ripple">
  <input type="submit" />
</div>
```
If the html tag cannot append a child to it like `<input>`, you can do this in order for it to work

```html
<a href="#" class="ripple">Click Me</a>
```

Do not forget to add the class "ripple" so that the script will know where to put the ripple effect

## Parameters
This dataset should be added in the html tags to customize the usage

| Parameters             | Default | Description                           |
| ---------------------- |:-------:| ------------------------------------- |
| `data-ripple`          | `#FFF`  | The *background color* of the ripple. |
| `data-ripple-opacity`  | `0.2`   | The *opacity* of the ripple.          |
| `data-ripple-duration` | `0.3`   | The *duration* of the ripple effect.  |

## Bugs and Feature Requests
Encountered a bug? [Report bug](https://github.com/Ming-desu/ripples.js/issues/new?template=bug.md)

Have feature request? [Request feature](https://github.com/Ming-desu/ripples.js/issues/new?template=feature.md&labels=feature)


## Copyright and License
The source code and documentation copyright 2019-2020 the authors [Joshua Ming Ricohermoso](https://github.com/Ming-desu). Code released under the [MIT License](https://github.com/Ming-desu/ripples.js/blob/master/LICENSE)
Have a nice day and enjoy! :metal:
