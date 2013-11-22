meteor-node-phone
=================

Meteor package of node-phone. See https://github.com/AfterShip/node-phone

Installation
============
```shell
mrt add phone
```

Usage example
=============

On the server side:
```javascript
Meteor.methods({
    normalizePhone: function(phone) {
        var res = Phone(phone, '');
        return res;
    }
});
```

On the client side:
```javascript
var normalized = Meteor.call('normalizePhone', '+39 035 656098');
```