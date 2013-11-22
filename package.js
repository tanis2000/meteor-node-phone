Package.describe({
    summary: "Meteor package wrapping node-phone for phone number normalization. See https://github.com/AfterShip/node-phone"
});

Npm.depends({
    'phone': '0.0.4'
});

Package.on_use(function (api, where) {
    api.add_files("phone.js", "server");
    api.export("Phone", "server");
});