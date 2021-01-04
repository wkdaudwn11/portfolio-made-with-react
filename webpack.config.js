/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const banner = require("./banner.js");

module.exports = {
  entry: {
    app: path.join(__dirname, "src", "index.tsx"), // 웹팩을 실행할 대상 파일
  },
  output: {
    // 웹팩의 결과물에 대한 정보를 입력하는 속성
    filename: "[name].bundle.js",
    chunkFilename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"), // 결과물 경로
    publicPath: "/", // HTML등 다른 파일에서 생성된 번들을 참조할 때, /을 기준으로 참조.
  },
  resolve: {
    // 웹팩이 모듈을 처리하는 방식을 설정하는 속성으로 확장자를 생략해도 인식하게 만든다.
    extensions: [".ts", ".tsx", ".js"],
  },
  devtool: "eval-cheap-source-map", // source-map을 설정하는 부분으로 에러가 발생했을 때 번들링된 파일에서 어느 부분에 에러가 났는지를 쉽게 확인할 수 있게 해주는 도구
  devServer: {
    contentBase: path.join(__dirname, "/"),
    publicPath: "/",
    compress: true,
    port: 3000,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          process.env.NODE_ENV === "production"
            ? MiniCssExtractPlugin.loader // 프로덕션 환경
            : "style-loader", // 개발 환경
          "css-loader",
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/, // image 관련 확장자로 마치는 모든 파일
        loader: "file-loader", // 파일 로더를 적용한다
        options: {
          // publicPath: './dist/', // prefix를 아웃풋 경로로 지정 (image 엑박 이슈 때문에 주석. 2020-11-30)
          name: "[name].[ext]?[hash]",
        },
      },
      // Image 엑박 이슈 때문에 url-loader 주석 (2020-11-30)
      // {
      // 	test: /\.(png|jpg|jpeg|gif)$/,
      // 	use: {
      // 		loader: 'url-loader', // url 로더를 설정한다
      // 		options: {
      // 			publicPath: './dist/', // file-loader와 동일
      // 			name: '[name].[ext]?[hash]', // file-loader와 동일
      // 			limit: 5000, // 5kb 미만 파일만 data url로 처리
      // 		},
      // 	},
      // },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      templateParameters: {
        env: process.env.NODE_ENV === "production" ? "" : "[DEV]", // 개발환경 일 때 title에 [DEV]를 붙여줌
      },
      hash: true, // 캐시 때문에 브라우저 반영이 안될 때를 대비해서 항상 반영이 되게끔 스크립트 주소에 해시값을 붙여줌.
      minify:
        process.env.NODE_ENV === "production"
          ? {
              collapseWhitespace: true, // 빈칸 제거
              removeComments: true, // 주석 제거
            }
          : false,
    }),
    new CleanWebpackPlugin(), // 빌드 이전 결과물 제거해주는 플러그인.
    new webpack.BannerPlugin(banner), // 빌드된 js파일 맨 위에 주석으로 정보 입력해주는 플러그인.
    new webpack.DefinePlugin({}), // process.env.NODE_ENV 값을 쓸 수 있게끔 해주는 플러그인.
    ...(process.env.NODE_ENV === "production"
      ? [new MiniCssExtractPlugin({ filename: "[name].css" })] // 운영 환경일 땐 min버전의 css로 세팅 해줌.
      : []),
  ],
};
