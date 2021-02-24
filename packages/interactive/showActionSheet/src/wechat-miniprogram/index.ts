import { initApi } from '../common';

export default initApi((args) => wx.showActionSheet({
  ...args,
  fail: (err) => {
    if (err && err.errMsg === 'showActionSheet:fail cancel') {
      args.success({tapIndex: -1});
    } else {
      args.fail(err);
    }
  }
}));
