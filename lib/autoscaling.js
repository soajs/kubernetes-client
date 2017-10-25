'use strict';

const ApiGroup = require('./api-group');

class Autoscaling extends ApiGroup {
    constructor(options) {
        const genericTypes = [
            'horizontalpodautoscalers'
        ];
        options = Object.assign({}, options, {
            path: 'apis/autoscaling',
            version: options.version || 'v2alpha1',
            genericTypes: genericTypes
        });
        super(options);
    }
}

module.exports = Autoscaling;
