var path = require('path');

module.exports = {
    //sets a relative root directory for the entry key
    context: path.resolve('js'),
    //name of the top level file or set of files to include in build
    entry: ["./utils", "./app"],
    //an object that can have a few keys, in this case it's bundle.js
    output: {
        //as above, tells where to put the bundle.js file, in this case build (which i think is the root) /js
        path: path.resolve('build/js/'),
        //this is the where the directory will be on the web server
        //this matches where we told the index.html file to look for the bundle.js file
        //this setting applies to the webpack-dev-server, so that it knows that the contents of build/js
        //are actually going to be requested thru the web-server from public/assets/js, so whenever a request comes
        //in for public/assets/js/whatever, it'll look for that file inside the build/js directory
        publicPath: '/public/assets/js',
        filename: "bundle.js"
    },
    //key that tells web-server that when someone requests index.html from the root, it needs to look in public dir
    devServer: {
        //name of the directory to use as it's base directory
        contentBase: 'public',
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
            },
        // loaders is an array and each is represented by an object[
            {
                //test is a regular expressions that tests what kind of files to run through this loader, .es6 in this case
                test: /\.es6$/,
                //reg exp that says what to exclude, here it's anything inside the node_modules folder
                exclude: /node_modules/,
                //loader to use, which is a string, here it's babel-loader which is the same thing installed in the devDependencies in package.json
                use: {
                    loader: 'babel-loader'
                }
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