module.exports = {
    root: true,
    modules: {
        "bem-tools": {
            plugins: {
                create: {
                techs: ["data.pug", "pug", "scss", "js"],
                    levels: {
                        "src/blocks/modules": {
                            default: true
                        }
                    }
                }
            }
        }
    }
};