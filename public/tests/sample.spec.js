var assert = require('power-assert');

describe('doneの有無による動作の変更', function() {
  it('同期', function() {
    assert('abc' === 'abc');
  });

  it('非同期', function(done) {
    setTimeout(function() {
      assert('abc' === 'a' + 'b' + 'c');
      done();
    }, 500);
  });
});
