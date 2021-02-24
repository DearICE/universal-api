import { isMiniApp, isWeChatMiniProgram, isWeb, isByteDanceMicroApp } from '@uni/env';
import aliMiniAppModule from './ali-miniapp/index';
import webModule from './web/index';
import weChatModule from './wechat-miniprogram/index';
import bytedanceModule from './bytedance-microapp/index';

export const showActionSheet = (args) => {
  if (isWeChatMiniProgram) {
    return weChatModule(args);
  } else if (isByteDanceMicroApp) {
    return bytedanceModule(args);
  } else if (isMiniApp) {
    return aliMiniAppModule(args);
  } else if (isWeb) {
    return webModule(args);
  } else {
    throw new Error('@uni/apis：showActionSheet暂不支持');
  }
};

export default showActionSheet;
