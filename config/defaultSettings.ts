import { ProLayoutProps } from '@ant-design/pro-components';
import { ENV_CONFIG } from './env';

/**
 * @name 默认设置配置
 * @description 使用环境变量进行配置，支持多环境部署
 */
const defaultSettings: ProLayoutProps & {
  pwa?: boolean;
  logo?: string;
  BASE_URL?: string;
  API_ADDRESS?: string; // openApi地址
  REQUEST_ADDRESS?: string; // 请求地址
  TOKEN_KEY: string;
} = {
  BASE_URL: '',
  breakpoint: 'xxl',
  navTheme: 'light',
  // 明青 Cyan-6
  colorPrimary: '#13c2c2',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: ENV_CONFIG.APP_TITLE,
  pwa: ENV_CONFIG.ENABLE_PWA,
  logo: ENV_CONFIG.LOGO_PATH,
  iconfontUrl: '',
  token: {
    sider: {
      colorTextMenuSelected: '#13c2c2',
      colorTextMenuActive: '#13c2c2',
      colorTextMenuItemHover: '#13c2c2',
      colorMenuBackground: '#fff',
    },
    header: {
      colorTextRightActionsItem: 'rgba(0, 0, 0, 0.88)',
    },
    pageContainer: {
      paddingBlockPageContainerContent: 24,
      paddingInlinePageContainerContent: 24,
    },
  },
  menu: {
    autoClose: false,
    locale: false,
  },
  API_ADDRESS: ENV_CONFIG.API_BASE_URL, // api 文档地址
  REQUEST_ADDRESS: ENV_CONFIG.REQUEST_BASE_URL, // 请求地址
  TOKEN_KEY: ENV_CONFIG.TOKEN_KEY,
};

export default defaultSettings;
