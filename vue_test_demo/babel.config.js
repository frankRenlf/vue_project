module.exports = {
    presets: [
        '@vue/cli-plugin-babel/preset',
        ["@babel/preset-env", {"modules": false}]
        //@babel/preset-env
    ],
    "plugins": [
        [
            "component",
            {
                "libraryName": "element-ui",
                "styleLibraryName": "theme-chalk"
            }
        ]
    ]
}
