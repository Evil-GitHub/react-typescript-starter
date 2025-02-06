import { ProLayoutProps } from "@ant-design/pro-components";

/**
 * @name
 */
const defaultSettings: ProLayoutProps & {
  pwa?: boolean;
  logo?: string;
  BASE_URL?: string;
  API_ADDRESS?: string; // openApi地址
  REQUEST_ADDRESS?: string; // 请求地址
  TOKEN_KEY: string;
} = {
  BASE_URL: "",
  breakpoint: "xxl",
  navTheme: "light",
  // 明青 Cyan-6
  colorPrimary: "#13c2c2",
  layout: "mix",
  contentWidth: "Fluid",
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: "XXXX系统",
  pwa: true,
  logo: "/images/logo.png",
  iconfontUrl: "",
  token: {
    sider: {
      colorTextMenuSelected: "#13c2c2",
      colorTextMenuActive: "#13c2c2",
      colorTextMenuItemHover: "#13c2c2",
      colorMenuBackground: "#fff",
    },
    header: {
      colorTextRightActionsItem: "rgba(0, 0, 0, 0.88)",
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
  API_ADDRESS: "http://192.168.100.102:32355", // api 文档地址
  REQUEST_ADDRESS: "http://192.168.100.102:32355", // 请求地址
  TOKEN_KEY: "RKLINK_TOKEN",
};

export default defaultSettings;
