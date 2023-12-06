---
title: Images & Videos
description: An in-depth process overview of how images and videos should be included into web properties managed by Megabyte Labs or sites that adhere to Megabyte Labs principles.
sidebar_label: Images & Videos
slug: /code/images-videos
---

When including images and videos into any web property or application, it is important that they are sized appropriately, compressed, and included in a way that allows browsers to take advantage of image and video formats that only new browsers can handle.

## Images

When including images in any project, ensure that the resolution of the image is the maximum size that will be used. Prefer the PNG format whenever possible and also include a WEBP variant for modern browsers. The WEBP format is much smaller in size so it loads faster over the internet but PNG is widely supported so it is included a fallback.

### Creating WEBP from PNG / JPG

Creating WEBP variants of PNG / JPG images can be done easily using the [`sharp-cli`](https://www.npmjs.com/package/sharp-cli) NPM package. To convert a single image, run the following:

```shell
npm install -g sharp-cli
sharp -i mypicture.png -o mypicture.webp
```

You can loop through all the PNG files in a directory and convert them to the WEBP format by running:

```shell
find dirToSearch -type f -name "*.png" | while read PNGFILE; do sharp -i "$PNGFILE" -o "$(echo "$PNGFILE" | sed 's/.png$//').webp"; done
```

### Image Compression

All of the PNG and WEBP images included in a projects source (or uploaded anywhere) should be compressed using TinyPNG or the TinyPNG API. TinyPNG offers free image compression services and, sadly, there are no really great image compression libraries that do as good a job as TinyPNG. If you have just a few images to compress, you can use the [TinyPNG web GUI](https://tinypng.com/) to compress and download the compressed images.

If you have more than a few images to compress, you should use the TinyPNG API. You can get a free API key by submitting your e-mail address after clicking, "Login," at the top right of the [TinyPNG website](https://tinypng.com/). Once you are signed in, you can acquire the API key by clicking, "Add API key," on the [API dashboard](https://tinify.com/dashboard/api).

With the API key in hand, you can compress images from the command-line by leveraging the [`tinypng-cli`](https://www.npmjs.com/package/tinypng-cli) available on NPM. Run the following to compress a single image (which you should already have saved in both PNG and WEBP format):

```shell
npm install -g tinypng-cli
tinypng -k API-Key-Here-XxXxXx myimage.png
tinypng -k API-Key-Here-XxXxXx myimage.webp
```

You can loop through all PNG and WEBP files in a directory and compress them with the TinyPNG API by running:

```shell
find imageDir -type f -name "*.png" | while read FILE; do tinypng -k API-Key-Here-XxXxXx "$FILE"; done
find imageDir -type f -name "*.webp" | while read FILE; do tinypng -k API-Key-Here-XxXxXx "$FILE"; done
```

### Including Images via HTML

After ensuring your images are compressed and properly sized, you should include them in HTML using the `<picture>` element to support WEBP. An example of doing this is:

```html
<picture>
  <source srcset="img/image.webp" type="image/webp" />
  <img src="img/image.jpg" alt="Alt Text!" width="100" height="100" />
</picture>
```

**Note:** Every `<img />` tag should include an `alt` description and preferrably also the target `width` and `height` which is sometimes used for things like pre-rendering or cases where CSS rules are not handling the sizing of the image.

### Including Responsive Images via HTML

If possible, leverage responsive images (i.e. create images at multiple sizes that will be used based on the target screen). Responsive images will help web assets load faster if you are including them in HTML. An example of loading a responsive image with WEBP support is:

```html
<picture>
  <!-- load webp images if supported -->
  <source
    type="image/webp"
    srcset="
      https://images.ctfassets.net/.../paris.jpg?w=100&fm=webp 100w,
      https://images.ctfassets.net/.../paris.jpg?w=200&fm=webp 200w,
      ...
    "
    sizes="
      (max-width: 768px) calc(100vw - 3em),
      (max-width: 1376px) calc(50vw - 8em),
      550px"
  />
  <!-- load traditional supported image format -->
  <img
    srcset="
      https://images.ctfassets.net/.../paris.jpg?w=100&fm=jpg&fl=progressive 100w,
      https://images.ctfassets.net/.../paris.jpg?w=200&fm=jpg&fl=progressive 200w,
      ...
    "
    sizes="
      (max-width: 768px) calc(100vw - 3em),
      (max-width: 1376px) calc(50vw - 8em),
      550px"
    src="https://images.ctfassets.net/.../paris.jpg"
    alt="Buildings of Paris"
    loading="lazy"
    decoding="async"
    width="1243"
    height="1500"
  />
</picture>
```

The example above was retrieved from [A picture element to load correctly resized webp images in HTML](https://www.stefanjudis.com/snippets/a-picture-element-to-load-correctly-resized-webp-images-in-html/) which you can reference for a more detailed walkthrough on implementing responsive images with WEBP support.

## Videos

While including a video anywhere, include both a video in `webm` format as well as the same video in `mp4` format. This allows us to support browsers that may not support the more modern `webm` format. Also, ensure the video is not very high resolution. Although it is nice to have pixel-perfection, high-resolution videos can increase in size dramatically the longer they are. Make a video as small in resolution as possible without sacrificing the clarity of the video.

### Video Compression

Before including any videos, be sure to compress the video in both formats. While we continue searching for a more ideal CLI-based approach, using [https://videocandy.com/compress-video.html](https://videocandy.com/compress-video.html) for video compression is recommended. It is a free service that you can leverage for both `webm` and `mp4` compression.

### Including Videos via HTML

Include videos specifying both a source for `webm` and `mp4`. The following is an example of doing this (while autoplaying the video):

```html
<video autoplay loop muted playsinline>
  <source src="/video/github-feature-request.mp4" type="video/mp4" />
  <source src="/video/github-feature-request.webm" type="video/webm" />
</video>
```
