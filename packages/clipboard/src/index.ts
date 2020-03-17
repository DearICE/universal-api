import { isWeb, isWeex, isMiniApp, isWeChatMiniProgram ,isQuickApp} from 'universal-env';
import webModule from './web/index';
import weexModule from './weex/index';
import miniAppModule from './miniapp/ali/index';
import weChatModule from './miniapp/wechat/index';
import quickappModule from './quickapp/index';
import { Clipboard } from './types';

let Clipboard: Clipboard;

if (isWeb) {
  Clipboard = webModule;
}

if (isWeex) {
  Clipboard = weexModule;
}

if (isMiniApp) {
  Clipboard = miniAppModule;
}

if (isWeChatMiniProgram) {
  Clipboard = weChatModule;
}

if (isQuickApp) {
  Clipboard = quickappModule;
}

export default Clipboard;
