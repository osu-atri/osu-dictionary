# Part 0: 功能对比

如果你曾经玩过 Stable，或者你比较好奇，可以看看下面的表格，了解 Lazer 有哪些酷炫的变化。

相比 stable，Lazer 的改变非常巨大，在功能上也有许多差异：

## 兼容性与性能

| **功能** | **stable** | **Lazer** |
| --- | --- | --- |
| 支持Windows 8.0及更老的系统 | ![是](svg/check-MUI.svg) | ![否](svg/cross-MUI.svg) |
| macOS / Linux支持 | ![部分](svg/partial-MUI.svg)（需要使用wine） | ![是](svg/check-MUI.svg) |
| DirectX / Metal支持 | ![部分](svg/partial-MUI.svg)（兼容模式） | ![是](svg/check-MUI.svg) |
| 移动端支持 | ![否](svg/cross-MUI.svg) | ![是](svg/check-MUI.svg) |
| 多线程结构 | ![否](svg/cross-MUI.svg) | ![是](svg/check-MUI.svg) |
| 视频硬件加速编码 | ![否](svg/cross-MUI.svg) | ![是](svg/check-MUI.svg) |
| UI缩放 | ![否](svg/cross-MUI.svg) | ![是](svg/check-MUI.svg) |
| 自定义游戏模式 (Ruleset) | ![否](svg/cross-MUI.svg) | ![是](svg/check-MUI.svg)[^ruleset] |
| 去重文件存储 | ![否](svg/cross-MUI.svg) | ![是](svg/check-MUI.svg) |
| 内置数位板驱动 | ![否](svg/cross-MUI.svg) | ![是](svg/check-MUI.svg) |
| 支持不同的宽高比 | ![否](svg/cross-MUI.svg) | ![是](svg/check-MUI.svg) |

[^ruleset]: 需要自行添加 `.dll` 文件

## 用户界面（UI）及自定义皮肤

| **功能** | **stable** | **Lazer** |
| --- | --- | --- |
| 支持皮肤 | ![是](svg/check-MUI.svg) | ![部分](svg/partial-MUI.svg)（仅游玩界面） |
| 歌曲选择分组模式 | ![是](svg/check-MUI.svg) | ![否](svg/cross-MUI.svg) |
| 游戏内皮肤 / UI布局编辑 | ![否](svg/cross-MUI.svg) | ![是](svg/check-MUI.svg) |
| 自定义动态皮肤组件 | ![否](svg/cross-MUI.svg) | ![是](svg/check-MUI.svg) |

## 界面

| **功能** | **stable** | **Lazer** |
| --- | --- | --- |
| 主页展示当前谱面的故事板 | ![否](svg/cross-MUI.svg) | ![是](svg/check-MUI.svg)（仅 osu! 支持者可用） |
| 隐藏单个难度 | ![否](svg/cross-MUI.svg) | ![是](svg/check-MUI.svg) |
| 首次启动设置 | ![否](svg/cross-MUI.svg) | ![是](svg/check-MUI.svg) |
| 软删除[^del] | ![否](svg/cross-MUI.svg) | ![是](svg/check-MUI.svg) |
| 游玩时立即更改并应用设置 | ![否](svg/cross-MUI.svg) | ![是](svg/check-MUI.svg) |

[^del]: 在删除时，游戏会临时存储删除的谱面以及其他需要变更的设置数据。只有在游戏重启后，才会永久删除这些数据。

## 游玩体验

| **功能** | **stable** | **Lazer** |
| --- | --- | --- |
| 精准的pp显示 | ![否](svg/cross-MUI.svg)[^pp] | ![是](svg/check-MUI.svg) |
| 调整谱面难度 | ![否](svg/cross-MUI.svg) | ![是](svg/check-MUI.svg)（通过Difficulty Adjust模组） |
| 模组（Mods）预设 | ![否](svg/cross-MUI.svg) | ![是](svg/check-MUI.svg) |
| 调整模组参数 | ![否](svg/cross-MUI.svg) | ![是](svg/check-MUI.svg) |
| 娱乐性模组 | ![否](svg/cross-MUI.svg) | ![是](svg/check-MUI.svg) |
| 标准化连击色 | ![否](svg/cross-MUI.svg) | ![是](svg/check-MUI.svg) |
| 按住按键显示HUD | ![否](svg/cross-MUI.svg) | ![是](svg/check-MUI.svg)（当HUD隐藏时按住ctrl） |
| 按谱面校准偏移值（offset） | ![部分](svg/partial-MUI.svg)（可以通过按键自行调整） | ![是](svg/check-MUI.svg)[^offset] |
| 光标拖动滑条时，滑条跟着滑条球逐渐消失 | ![否](svg/cross-MUI.svg) | ![是](svg/check-MUI.svg)（可以选择关闭） |
| 物件锁（Notelock） | ![否](svg/cross-MUI.svg) | ![是](svg/check-MUI.svg) |
| 在Mania和std模式中基于时间轴给物件上色 | ![否](svg/cross-MUI.svg) | ![是](svg/check-MUI.svg) |
| 回放控制 | ![否](svg/cross-MUI.svg) | ![是](svg/check-MUI.svg) |
| 在回放中评论以弹幕形式出现 | ![是](svg/check-MUI.svg) | ![否](svg/cross-MUI.svg) |

[^pp]: 不直接支持，需要借助外部工具或插件显示
[^offset]: re图时可以根据上一次游玩自动调整偏移，或在设置中手动调节

## 线上系统

| **功能** | **stable** | **Lazer** |
| --- | --- | --- |
| 提交分数 | ![是](svg/check-MUI.svg) | ![是](svg/check-MUI.svg) |
| 谱面排行榜 | ![是](svg/check-MUI.svg) | ![是](svg/check-MUI.svg) |
| 主页统计数据 | ![是](svg/check-MUI.svg) | ![是](svg/check-MUI.svg) |
| 奖章（成就） | ![是](svg/check-MUI.svg) | ![是](svg/check-MUI.svg) |
| 表现分 (pp) | ![是](svg/check-MUI.svg) | ![是](svg/check-MUI.svg) |
| 实时聊天 | ![部分](svg/partial-MUI.svg)（有 15 秒的间隔来接收新消息） | ![是](svg/check-MUI.svg) |
| Wiki / 新闻 / 更新日志 / 总排行榜等 | ![否](svg/cross-MUI.svg) | ![是](svg/check-MUI.svg)[^wiki-locale] |
| 玩家主页 | ![否](svg/cross-MUI.svg) | ![部分](svg/partial-MUI.svg)（没有网页版功能完整[^user]） |
| 谱面列表 | ![部分](svg/partial-MUI.svg)（通过osu! Supporter可用的osu! Direct） | ![是](svg/check-MUI.svg)（可以选择关闭） |
| 无限制的多人游戏房间大小 | ![否](svg/cross-MUI.svg)（最多 16 个玩家） | ![是](svg/check-MUI.svg) |
| 多人游戏观赛 | ![否](svg/cross-MUI.svg) | ![是](svg/check-MUI.svg) |
| 倒计时器 | ![部分](svg/partial-MUI.svg) | ![是](svg/check-MUI.svg) |
| 队列模式 | ![否](svg/cross-MUI.svg) | ![否](svg/cross-MUI.svg) |
| 多人游戏指令 | ![是](svg/check-MUI.svg) | ![否](svg/cross-MUI.svg) |
| 合作模式 (Tag co-op) | ![是](svg/check-MUI.svg) | ![否](svg/cross-MUI.svg) |
| 课题模式 | ![否](svg/cross-MUI.svg) | ![是](svg/check-MUI.svg) |
| 直接更新官网上改动过的谱面 | ![部分](svg/partial-MUI.svg)（只更新谱面文件） | ![是](svg/check-MUI.svg)（更新所有谱面文件） |

[^wiki-locale]: Lazer 目前只支持显示英文 wiki
[^user]: Lazer 目前还不支持直接关注用户，可在浏览器中打开

## 编辑器

| **功能** | **stable** | **Lazer** |
| --- | --- | --- |
| osu! 编辑器 | ![是](svg/check-MUI.svg) | ![是](svg/check-MUI.svg) |
| osu!taiko 编辑器 | ![否](svg/cross-MUI.svg) | ![是](svg/check-MUI.svg) |
| osu!catch 编辑器 | ![否](svg/cross-MUI.svg) | ![是](svg/check-MUI.svg) |
| osu!mania 编辑器 | ![是](svg/check-MUI.svg) | ![是](svg/check-MUI.svg) |
| 打开一个难度作为参考 | ![是](svg/check-MUI.svg) | ![否](svg/cross-MUI.svg) |
| 按物件设定变速和音量 | ![否](svg/cross-MUI.svg) | ![是](svg/check-MUI.svg) |
| 分段调整滑条的曲线类型 | ![否](svg/cross-MUI.svg) | ![是](svg/check-MUI.svg) |
| 分割、合并滑条 | ![否](svg/cross-MUI.svg) | ![是](svg/check-MUI.svg) |
| 旋转物件 | ![是](svg/check-MUI.svg) | ![是](svg/check-MUI.svg) |
| 调整物件大小 | ![否](svg/cross-MUI.svg) | ![是](svg/check-MUI.svg) |
| 提交谱面 | ![是](svg/check-MUI.svg) | ![否](svg/cross-MUI.svg) |
| 故事板编辑器 | ![是](svg/check-MUI.svg) | ![否](svg/cross-MUI.svg) |
| 交叉兼容性 | ![是](svg/check-MUI.svg) | ![部分](svg/partial-MUI.svg)（可能存在向前兼容问题） |
