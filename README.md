# kbyakuya

```tree
.
├── index.md            主页
├── interview.md        其他页面
├── LICENSE             license
├── package.json        无须关心
├── pnpm-lock.yaml      无须关心
├── public              公共文件存放路径
│   ├── favicon.ico     无须关心
│   ├── img             图片存放路径
│   │   ├── home2.jpg   图片都放这里 然后在 markdown 里使用这种格式 ![a](/img/home2.jpg)
│   │   └── home.jpg
│   └── logo            无须关心
├── README.md           项目介绍
└── zh                  多语言中文版
    ├── index.md
    └── interview.md
```

页面关系为

```tree
.
├── index.md            英文版主页 https://kbyakuya.github.io
├── page1.md            测试页1 https://kbyakuya.github.io/page1
├── page2.md            测试页2 https://kbyakuya.github.io/page2
├── dir1
│   ├── page3.md        测试页3 https://kbyakuya.github.io/dir1/page3
│   └── page4.md        测试页4 https://kbyakuya.github.io/dir1/page3
└── zh
    ├── index.md        中文版主页 https://kbyakuya.github.io/zh
    ├── page1.md        测试页1 https://kbyakuya.github.io/zh/page1
    ├── page2.md        测试页2 https://kbyakuya.github.io/zh/page2
    └── dir1
        ├── page3.md    测试页3 https://kbyakuya.github.io/zh/dir1/page3
        └── page4.md    测试页4 https://kbyakuya.github.io/zh/dir1/page4
```

中文文件夹[`zh`](./zh/)里的层级要跟根目录里的层级保持一致，如上所示  
