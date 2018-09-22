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

## Usage

```
require('packenv')(targetDirectory, optionsObject)
```
### Target Directory
Supply a target directory is highly recommended as PackEnv will assume your webpack configuration directory automatically as the directory your shell is running from. This can often cause issues so you can simply supply \_\_dirname (the directory of the  current script)

### Options Object
You can supply an options object. It currently supports the following properties
```js
{
	warnings: Boolean
}
```
