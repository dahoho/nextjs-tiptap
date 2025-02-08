import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // 他の設定オプションをここに記述
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // 全ての 'yjs' のインポートが同一のインスタンスを参照するようにする
      config.resolve.alias["yjs"] = path.resolve(__dirname, "node_modules/yjs");
    }
    return config;
  },
};

export default nextConfig;
