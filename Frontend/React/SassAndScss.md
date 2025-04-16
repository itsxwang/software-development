[**Sass** stand for ***"Syntactically Awesome Style Sheets"*** and **Scss** stand for ***"Sassy CSS"***](https://youtu.be/akDIJa0AP5c?si=Ntrl6pbPjMD9zKMc)

### What are Sass and SCSS?
**Sass** (Syntactically Awesome Style Sheets) is a CSS pre-processor that enhances CSS by adding features like:
- **Variables**: Store reusable values.
- **Nesting**: Write cleaner, hierarchical styles.
- **Mixins**: Reuse blocks of styles.

**SCSS** (Sassy CSS) is a newer syntax for Sass that extends CSS syntax. Key differences include:
- SCSS is fully compatible with CSS, allowing any valid CSS file to be renamed with a `.scss` extension.
- SCSS uses **semicolons** and **curly braces**, similar to CSS.
- Sass uses a minimalistic, **indentation-based syntax** without brackets and semicolons.

Both Sass and SCSS share the same features and specifications, so learning one helps you understand the other.

### Examples

#### Sass Example
```sass
$primary-color: #3498db

body
    font-family: Arial, sans-serif
    background-color: $primary-color

nav
    ul
        margin: 0
        padding: 0
        list-style: none
    li
        display: inline-block
        margin-right: 10px
```

#### SCSS Example
```scss
$primary-color: #3498db;

body {
    font-family: Arial, sans-serif;
    background-color: $primary-color;
}

// Note: ul and li must be inside the nav element for this to apply.
// same as `nav ul`  and `nav li` of css
nav {
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    li {
        display: inline-block;
        margin-right: 10px;
    }
}

// ---------------------------------------------------
// Note: ul and li must be inside the nav element for this to apply.
nav:hover {
    ul {
        list-style: none;
    }
    li {
        display: inline-block;
        margin-right: 10px;
    }
}
// ---------------------------------------------------

// mixins example
@mixin buttonPrimary($color) {
    background-color: $color;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.primary-button {
    @include buttonPrimary(#3498db);
}
```

[See how you can make use `if-else`](https://youtu.be/akDIJa0AP5c?si=ePeoTGAP3ohcAbBe&t=97)

```scss
$primary-color: #3498db;

@function buttonPrimary($color) {
    @if $color == $primary-color {
        background-color: $color;
        color: #fff;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    } @else {
        background-color: $color;
        color: #fff;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
}
```

[Create array of values then loop over them with each ](https://youtu.be/akDIJa0AP5c?si=AsTitJbZs9UBitWO&t=107)
```scss
$colors: #ff0000, #00ff00, #0000ff;
@each $color in $colors {
    .color-#{$color} {
        background-color: $color;
    }
}
// html
<div class="color-#ff0000"></div>
<div class="color-#00ff00"></div>
<div class="color-#0000ff"></div>
```

[Sass functions](https://youtu.be/akDIJa0AP5c?si=jVayagPQKSg8rX64&t=110)

[Sass builtin function](https://youtu.be/akDIJa0AP5c?si=astqHADO1OSE4R6_&t=117)


----
## Pseudo classes difference

```css
.btn:hover {}
.btn:active {}
.btn:focus {}
```

```scss
.btn {
    &:hover {}
    &:active {}
    &:focus {}
}
```