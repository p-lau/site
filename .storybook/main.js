const path = require('path')
console.log(path.resolve(__dirname, "../stories/"))

module.exports = {
    "stories": [
        "../stories/**/*.stories.mdx",
        "../stories/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    "addons": [
        "@storybook/addon-actions",
        "@storybook/addon-essentials"
    ],
    "webpackFinal": (config) => {
        config.module.rules.find((rule) => rule.test.toString() === '/\\.css$/').exclude = /\.module\.css$/
        config.module.rules.push({
            "test": /\.module\.css$/,
            "include": path.resolve(__dirname, "../stories/"),
            "use": [
                'style-loader', {
                    "loader": "css-loader",
                    "options": {
                        "importLoaders": 1,
                        "modules": true
                    }
                }
            ]
        })
        return config
    }
}