const gulp = require('gulp')
const webpack = require('webpack-stream')
const path = require('path')
module.exports = function () {
    return gulp.src('src/index.js')
        .pipe(webpack({
            entry: {
                release: ["./src/index.js"]
            },
            output: {
                path: path.resolve(__dirname, "dist"),
                publicPath: "/dist",
                filename: "[name].js",
                library:'localdb',
                libraryTarget:'umd'
            },
            devtool:'source-map'
        }))
        .pipe(gulp.dest('dist/'))
}