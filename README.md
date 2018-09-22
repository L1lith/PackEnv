# PackEnv
PackEnv allows you to easily setup environment based webpack configurations.

Simply setup a file structure like this:
```
/- webpack.config.js
|- webpack.common.js
|- webpack.development.js
|- webpack.production.js
```
Where webpack.config.js contains the following code:
```
module.exports = packEnv(__dirname)
```
PackEnv automatically detects the common configuration and the configuration for your specific environment and merges them.
