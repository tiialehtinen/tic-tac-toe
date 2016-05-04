module.exports = {
    context: "./src",
    entry: "",
    output: {
        path: "./dist",
        // Make sure to use [name] or [id] in output.filename
        //  when using multiple entry points
        filename: "[name].bundle.js",
        chunkFilename: "[id].bundle.js"
    }

};