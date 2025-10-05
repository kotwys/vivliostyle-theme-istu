# vivliostyle-theme-istu

This theme for Vivliostyle is intended to create academic reports following the
GOST R 7.32–2018 standard.

## Usage

Refer to the [example document](./example/report.md) for basic markup.

If a figure with source code should be presented as a “listing”, `listing` class
should be added to the corresponding `figure` element.  Listing figures are
numbered separately from normal figures.

Cross-references are `a` elements with a `href` attribute pointing to the
required part of the document and one of the following classes:

- `h1ref`: `h1` heading,
- `h2ref`: `h2` heading,
- `figref`: figure number,
- `tblref`: table number,
- `lstref`: listing number.

To leave a section unnumbered, add `unnumbered` class to its heading.

Footnotes are elements with `fn` class, placed inline where the footnote call
should be.

If `major` class is placed on the `html` or `body` elements, then every
level 1 section would have page breaks before and after it, and unnumbered
section headings would be typeset in uppercase.

## Customization

By default, the font used is Times New Roman or, if available, its metric
equivalent PT Astra Serif.  The line height is adjusted to match one-and-a-half
spacing of Microsoft Word for these fonts. 

To change the font, you need to simply override the CSS property `font-family`
at `:root`.  If you also want to adjust line height to follow the selected
font's intrinsic parameters, set `--font-line-skip` property to the following
number (you need to examine the variables manually through software like
FontForge):

$$\frac{\textrm{Ascender Height} + \textrm{Line Skip}}{\textrm{Em Size}}$$
