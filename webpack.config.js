module.exports = {
    //name of the top level file or set of files to include in build
    entry: ["./utils.js", "./app.js"],
    //an object that can have a few keys, in this case it's bundle.js
    output: {
        filename: "bundle.js"
    },
    //an object with a loader section (which is an array)
    module: {
        // loaders is an array and each is represented by an object
        loaders: [
            {
                //test is a regular expressions that tests what kind of files to run through this loader, .es6 in this case
                test: /\.es6$/,
                //reg exp that says what to exclude, here it's anything inside the node_modules folder
                exclude: /node_modules/,
                //loader to use, which is a string, here it's babel-loader which is the same thing installed in the devDependencies in package.json
                loader: 'babel-loader'
            }
        ]
    },
    // resolve is a section that specifies what kind of file types we can process without specifically giving them a file extension
    resolve: {
        //this is looking for anything starting with login (as in the app.js require) that ends in .js or .es6
        extensions: ['.js', '.es6']
    }
}