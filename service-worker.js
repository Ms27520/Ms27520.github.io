if(!self.define){let e,i={};const d=(d,c)=>(d=new URL(d+".js",c).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(c,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let s={};const f=e=>d(e,a),n={module:{uri:a},exports:s,require:f};i[a]=Promise.all(c.map((e=>n[e]||f(e)))).then((e=>(r(...e),s)))}}define(["./workbox-b5e2a5cf"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404/index.html",revision:"bf475097039cba44bec321185c0fccba"},{url:"about/index.html",revision:"87aa3f4bad30c1a7df082665f18faf31"},{url:"archives/2021/09/index.html",revision:"91efbd473f18c19691d1b7e04cfb1fcf"},{url:"archives/2021/index.html",revision:"549d0f95dcd1f9415d9ba487650402eb"},{url:"archives/2022/09/index.html",revision:"84e6db10b0c1d062aaf764c6119f2ed8"},{url:"archives/2022/index.html",revision:"8d5af5df172c99426fe651ab5032b9aa"},{url:"archives/index.html",revision:"34a0eb05961c9b8ae8f97e2de8da21ee"},{url:"bb/index.html",revision:"13b849ba4840a697f80eb4682cdbb536"},{url:"categories/Hexo/index.html",revision:"1907cd283aad68fdc26121c081d28cef"},{url:"categories/index.html",revision:"a526b62ffc660a0d4cab6cb274fd973f"},{url:"categories/笔记/index.html",revision:"f65f45d23aa55de641b5e5364e7b52bd"},{url:"contact/index.html",revision:"531ac0e8442de391cfd47b6fa8d3efad"},{url:"css/index.css",revision:"965a516e599300df3abacc4459b4cbf8"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"friends/index.html",revision:"f31576dc2100e5583f2f7c516e4c78d9"},{url:"galleries/2021/index.html",revision:"966daa3f33c0b61c82e0eb0ef320092a"},{url:"galleries/2022/index.html",revision:"1850b3a0e50a225c6d76537991efce50"},{url:"galleries/index.html",revision:"06df0527fb5330045f2ea6b54a644784"},{url:"galleries/哈哈/index.html",revision:"1bceee7f5265d3d8e3a2753aa81caf3b"},{url:"go.html",revision:"10b4d8236c061128ace3d4c16e30f256"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"36f6c023c2db1d075512a401aff7bfc5"},{url:"js/main.js",revision:"fe88918ae3b0d986d877ba45f3ff3145"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"6a7944ab28140beee4e4bfe66099a325"},{url:"movies/index.html",revision:"07abc068d0275edf5594d357d925f240"},{url:"musics/index.html",revision:"39a7c066f009e1a86210318c58e7224e"},{url:"posts/3eeb/index.html",revision:"346cc6dc07378d3b29c81ca1384553a3"},{url:"posts/50aa/index.html",revision:"8d013177ace85f60426fa75724e2ea17"},{url:"tags/Hexo/index.html",revision:"6e96462a36285dd8d1eac6bc2c424817"},{url:"tags/index.html",revision:"23a1c69377a689ef6f025f0c7bf09646"},{url:"tags/Joplin/index.html",revision:"d16773b98fba977cd357d98ae8dcc58d"},{url:"tags/JoplinServer/index.html",revision:"37fcc04061a5429c261c392624855c95"},{url:"tags/笔记/index.html",revision:"d3be60c25325a4fa3d3036b39e188ffb"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
