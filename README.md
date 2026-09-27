# to - 言いあえる関係について

「言いにくいことも、お互いに言える関係」をつくるためのコツを、1枚ずつ図解で集めるサイト。
Astro で静的生成し、GitHub Actions で GitHub Pages（https://craftpaperbag.github.io/to/）へデプロイします。

## 開発

```sh
npm install
npm run dev      # http://localhost:4321/to/
npm run build    # dist/ に出力
```

## Tipsを1件追加する

1. `src/content/tips/<slug>.json` を作る（`id` は並び順。`category` は `src/data/categories.json` のいずれか）。
2. `src/visuals/<slug>.svg` に図を置く。
   - keyframes は SVG 内の `<style>` に書く（名前は他の図と重ならないように）。
   - 役割に応じて `data-r` を付ける（`sf` `sl` `sb` `st` `lf` `ll` `lb` `shf` `sht` `shl` `sha`）。色に頼らない表示で置き換わる。
   - 詳細ページだけで出すキャプションは `<g class="tv-cap">` で囲む。
   - `role` と `aria-label` は JSON の `visualLabel` から自動で付く。
   - アニメーションを止めたときの基本属性が、そのまま意味の伝わる静止画になるように描く。

一覧・件数・前後ナビ・ランダムには自動で反映されます。

デザインの参照は `design/` にあります。
