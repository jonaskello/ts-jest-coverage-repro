

function process(src, path, config) {
    console.log("To remove your cache directory run: rm -rf " + config.cacheDirectory);
    return src;
}
exports.process = process;
