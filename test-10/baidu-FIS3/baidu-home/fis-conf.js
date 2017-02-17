fis.match('::packager', {
  spriter: fis.plugin('csssprites')
});

fis.match('*.{js,css,jpg,png}', {
  useHash: true
});

fis.match('*.js', {
  optimizer: fis.plugin('uglify-js')
});

fis.match('*.css', {
  useSprite: true,
  optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
  optimizer: fis.plugin('png-compressor')
});

// fis.match('文件'，{配置信息：使用了什么插件，以及对插件的配置})


// 压缩html文件配置内容
// You need install it.
// npm i fis-optimizer-html-minifier [-g]
//
fis.match('*.html', {
  //invoke fis-optimizer-html-minifier
  optimizer: fis.plugin('html-minifier')
});