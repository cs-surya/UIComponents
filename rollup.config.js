import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import autoprefixer from "autoprefixer";

export default {
  input: "src/index.ts", // your entry point
  output: [
    {
      file: "dist/index.js",
      format: "cjs", // CommonJS for Node/npm
      exports: "named",
    },
    {
      file: "dist/index.esm.js",
      format: "esm", // ES Modules for modern bundlers
    },
  ],
  plugins: [
    postcss({
      extract: true, // this creates a separate CSS file in dist
      minimize: true,
      plugins: [autoprefixer()],
    }),
    typescript({
      tsconfig: "./tsconfig.json",
      useTsconfigDeclarationDir: true,
    }),
  ],
  external: ["react", "react-dom"], // don’t bundle peer deps
};
