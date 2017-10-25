'use strict';

const assume = require('assume');
const nock = require('nock');

const common = require('./common');
const beforeTesting = common.beforeTesting;

const testMetrics = {
  kind: 'PodMetricsList',
  apiVersion: 'metrics/v1alpha1',
  items: []
};

describe('lib.metrics', () => {
  describe('.Metrics', () => {
    const testMetricsKind = testMetrics.kind;

    beforeTesting('unit', () => {
      nock(common.metrics.url)
				.get(`${ common.metrics.path }/namespaces/${ common.currentName }/pods`)
				.reply(200, testMetrics);
    });

    common.only('unit', 'can GET pods metrics', done => {
      common.metrics.ns.po.get((err, result) => {
        assume(err).is.falsy();
        assume(result.kind).is.equal(testMetricsKind);
        done();
      });
    });
  });
});
