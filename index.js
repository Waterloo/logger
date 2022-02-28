const shaLogger = new Proxy({ enabled: true }, {
    get(target, name) {
        if (name === "enabled") {
            return target.enabled
        }

        if (target.enabled) {
            return console[name]
        }
        else if (typeof console[name] === "function") {
            return () => { }
        }
    }
})

export default shaLogger