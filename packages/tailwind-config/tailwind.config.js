export const tailwindConfig = {
  theme: {
    extend: {
      fontFamily: {
        pretendard: ["Pretendard", "sans-serif"],
      },
      fontSize: {
        16: "16px",
      },
      letterSpacing: {
        "tighter-03": "-0.3px",
        "tighter-032": "-0.32px",
      },
      lineHeight: {
        140: "140%",
        148: "148%",
      },
    },
    screens: {
      mobile: "376px",
      tab: "769px",
      pc: "1441px",
    },
  },
  variants: {},
  plugins: [],
};
