module.exports = {
    //name of the top level file or set of files to include in build
    entry: ["./utils.js", "./app.js"],
    //an object that can have a few keys, in this case it's bundle.js
    output: {
        filename: "bundle.js"
    },
    //an object with a loader section (which is an array)
    module: {
        // preloaders run before loaders, such as checking files for linting errors
        // Had to change name from preLoaders in tutorial to rules as below, due to webpack 2 i believe
        rules: [
            {
                // enforce key is part of rules?  tells it to run 'pre' or before, guess this replaces preloaders
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'jshint-loader'
            }
        ],
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
    // for instance, in app.js require('./login') was originally ./login.js
    resolve: {
        //this is looking for anything starting with login (BECAUSE ITS 'require' IN app.js *I THINK*) that ends in .js or .es6
        // tutorial originally had a '' as the first element in the array but there was an error when running webpack-dev-server
        // re: the empty string in the first element, FYI
        extensions: ['.js', '.es6']
    }
};