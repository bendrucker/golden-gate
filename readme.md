# golden-gate [![Build Status](https://travis-ci.org/bendrucker/golden-gate.svg?branch=master)](https://travis-ci.org/bendrucker/golden-gate)

> Get a live photo of the Golden Gate Bridge in San Francisco

Streams JPG data for a live photo from [goldengatebridge75.org](http://goldengatebridge75.org/news/webcam.html).

## Install

```
# API
npm install --save golden-gate

# CLI
npm install --global golden-gate
```


## Usage


### API

```js
var goldenGate = require('golden-gate')

goldenGate()
  .pipe(fs.createWriteStream('ggb.jpg'))
```

### CLI

```sh
golden-gate > ggb.jpg
```

Or using [iTerm 2's image support](https://www.iterm2.com/documentation-images.html):

```sh
golden-gate | imgcat
# => prints image
```


## License

MIT © [Ben Drucker](http://bendrucker.me)
