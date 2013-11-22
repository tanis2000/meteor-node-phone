Phone = function() {
    var self = this;
    self.version = '0.0.1';

    var nodePhone = Npm.require('phone');
    _.extend(self,nodePhone);
};