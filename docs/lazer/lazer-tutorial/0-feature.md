# Part 0: 功能对比

import { faXmark, faCheck, faFlag } from "@fortawesome/free-solid-svg-icons";

如果你曾经玩过 Stable，或者你比较好奇，可以看看下面的表格，了解 Lazer 有哪些酷炫的变化。

相比 stable，Lazer 的改变非常巨大，在功能上也有许多差异：

## 兼容性与性能

| **功能** | **stable** | **Lazer** |
| --- | :-: | :-: |
| 支持Windows 8.0及更老的系统 | <FontAwesomeIcon icon={faCheck} size="xl" style={{color: "#63E6BE"}} /> | <FontAwesomeIcon icon={faXmark} size="xl" style={{color: "#CC3378"}} /> |
| macOS / Linux支持 | <FontAwesomeIcon icon={faFlag} size="xl" style={{color: "#FFD43B"}} />（需要使用wine） | <FontAwesomeIcon icon={faCheck} size="xl" style={{color: "#63E6BE"}} /> |
| DirectX / Metal支持 | <FontAwesomeIcon icon={faFlag} size="xl" style={{color: "#FFD43B"}} />（兼容模式） | <FontAwesomeIcon icon={faCheck} size="xl" style={{color: "#63E6BE"}} /> |
| 移动端支持 | <FontAwesomeIcon icon={faXmark} size="xl" style={{color: "#CC3378"}} /> | <FontAwesomeIcon icon={faCheck} size="xl" style={{color: "#63E6BE"}} /> |
| 多线程结构 | <FontAwesomeIcon icon={faXmark} size="xl" style={{color: "#CC3378"}} /> | <FontAwesomeIcon icon={faCheck} size="xl" style={{color: "#63E6BE"}} /> |
| 视频硬件加速编码 | <FontAwesomeIcon icon={faXmark} size="xl" style={{color: "#CC3378"}} /> | <FontAwesomeIcon icon={faCheck} size="xl" style={{color: "#63E6BE"}} /> |
| 界面缩放 | <FontAwesomeIcon icon={faXmark} size="xl" style={{color: "#CC3378"}} /> | <FontAwesomeIcon icon={faCheck} size="xl" style={{color: "#63E6BE"}} /> |
| 自定义游戏模式 (Ruleset) | <FontAwesomeIcon icon={faXmark} size="xl" style={{color: "#CC3378"}} /> | <FontAwesomeIcon icon={faCheck} size="xl" style={{color: "#63E6BE"}} />[^ruleset] |
| 去重文件存储 | <FontAwesomeIcon icon={faXmark} size="xl" style={{color: "#CC3378"}} /> | <FontAwesomeIcon icon={faCheck} size="xl" style={{color: "#63E6BE"}} /> |
| 内置数位板驱动 | <FontAwesomeIcon icon={faXmark} size="xl" style={{color: "#CC3378"}} /> | <FontAwesomeIcon icon={faCheck} size="xl" style={{color: "#63E6BE"}} /> |
| 支持不同的宽高比 | <FontAwesomeIcon icon={faXmark} size="xl" style={{color: "#CC3378"}} /> | <FontAwesomeIcon icon={faCheck} size="xl" style={{color: "#63E6BE"}} /> |

[^ruleset]: 需要自行添加 `.dll` 文件

## 用户界面（UI）及自定义皮肤

| **功能** | **stable** | **Lazer** |
| --- | :-: | :-: |
| 支持皮肤 | <FontAwesomeIcon icon={faCheck} size="xl" style={{color: "#63E6BE"}} /> | <FontAwesomeIcon icon={faFlag} size="xl" style={{color: "#FFD43B"}} />（仅游玩界面） |
| 歌曲选择分组模式 | <FontAwesomeIcon icon={faCheck} size="xl" style={{color: "#63E6BE"}} /> | <FontAwesomeIcon icon={faXmark} size="xl" style={{color: "#CC3378"}} /> |
| 游戏内皮肤 / UI布局编辑 | <FontAwesomeIcon icon={faXmark} size="xl" style={{color: "#CC3378"}} /> | <FontAwesomeIcon icon={faCheck} size="xl" style={{color: "#63E6BE"}} /> |
| 自定义动态皮肤组件 | <FontAwesomeIcon icon={faXmark} size="xl" style={{color: "#CC3378"}} /> | <FontAwesomeIcon icon={faCheck} size="xl" style={{color: "#63E6BE"}} /> |

## 界面

| **功能** | **stable** | **Lazer** |
| --- | :-: | :-: |
| 主页展示当前谱面的故事板 | <FontAwesomeIcon icon={faXmark} size="xl" style={{color: "#CC3378"}} /> | <FontAwesomeIcon icon={faCheck} size="xl" style={{color: "#63E6BE"}} />（仅 osu! 支持者可用） |
| 隐藏单个难度 | <FontAwesomeIcon icon={faXmark} size="xl" style={{color: "#CC3378"}} /> | <FontAwesomeIcon icon={faCheck} size="xl" style={{color: "#63E6BE"}} /> |
| 首次启动设置 | <FontAwesomeIcon icon={faXmark} size="xl" style={{color: "#CC3378"}} /> | <FontAwesomeIcon icon={faCheck} size="xl" style={{color: "#63E6BE"}} /> |
| 软删除[^del] | <FontAwesomeIcon icon={faXmark} size="xl" style={{color: "#CC3378"}} /> | <FontAwesomeIcon icon={faCheck} size="xl" style={{color: "#63E6BE"}} /> |
| 游玩时立即更改并应用设置 | <FontAwesomeIcon icon={faXmark} size="xl" style={{color: "#CC3378"}} /> | <FontAwesomeIcon icon={faCheck} size="xl" style={{color: "#63E6BE"}} /> |

[^del]: 在删除时，游戏会临时存储删除的谱面以及其他需要变更的设置数据。只有在游戏重启后，才会永久删除这些数据。

## 游玩体验

| **功能** | **stable** | **Lazer** |
| --- | :-: | :-: |
| 精准的pp显示 | <FontAwesomeIcon icon={faXmark} size="xl" style={{color: "#CC3378"}} />[^pp] | <FontAwesomeIcon icon={faCheck} size="xl" style={{color: "#63E6BE"}} /> |
| 调整谱面难度 | <FontAwesomeIcon icon={faXmark} size="xl" style={{color: "#CC3378"}} /> | <FontAwesomeIcon icon={faCheck} size="xl" style={{color: "#63E6BE"}} />（通过Difficulty Adjust模组） |
| 模组（Mods）预设 | <FontAwesomeIcon icon={faXmark} size="xl" style={{color: "#CC3378"}} /> | <FontAwesomeIcon icon={faCheck} size="xl" style={{color: "#63E6BE"}} /> |
| 调整模组参数 | <FontAwesomeIcon icon={faXmark} size="xl" style={{color: "#CC3378"}} /> | <FontAwesomeIcon icon={faCheck} size="xl" style={{color: "#63E6BE"}} /> |
| 娱乐性模组 | <FontAwesomeIcon icon={faXmark} size="xl" style={{color: "#CC3378"}} /> | <FontAwesomeIcon icon={faCheck} size="xl" style={{color: "#63E6BE"}} /> |
| 标准化连击色 | <FontAwesomeIcon icon={faXmark} size="xl" style={{color: "#CC3378"}} /> | <FontAwesomeIcon icon={faCheck} size="xl" style={{color: "#63E6BE"}} /> |
| 按住按键显示HUD | <FontAwesomeIcon icon={faXmark} size="xl" style={{color: "#CC3378"}} /> | <FontAwesomeIcon icon={faCheck} size="xl" style={{color: "#63E6BE"}} />（当HUD隐藏时按住ctrl） |
| 按谱面校准偏移值（offset） | <FontAwesomeIcon icon={faFlag} size="xl" style={{color: "#FFD43B"}} />（可以通过按键自行调整） | <FontAwesomeIcon icon={faCheck} size="xl" style={{color: "#63E6BE"}} />[^offset] |
| 光标拖动滑条时，滑条跟着滑条球逐渐消失 | <FontAwesomeIcon icon={faXmark} size="xl" style={{color: "#CC3378"}} /> | <FontAwesomeIcon icon={faCheck} size="xl" style={{color: "#63E6BE"}} />（可以选择关闭） |
| 物件锁（Notelock） | <FontAwesomeIcon icon={faXmark} size="xl" style={{color: "#CC3378"}} /> | <FontAwesomeIcon icon={faCheck} size="xl" style={{color: "#63E6BE"}} /> |
| 在Mania和std模式中基于时间轴给物件上色 | <FontAwesomeIcon icon={faXmark} size="xl" style={{color: "#CC3378"}} /> | <FontAwesomeIcon icon={faCheck} size="xl" style={{color: "#63E6BE"}} /> |
| 回放控制 | <FontAwesomeIcon icon={faXmark} size="xl" style={{color: "#CC3378"}} /> | <FontAwesomeIcon icon={faCheck} size="xl" style={{color: "#63E6BE"}} /> |
| 在回放中评论以弹幕形式出现 | <FontAwesomeIcon icon={faCheck} size="xl" style={{color: "#63E6BE"}} /> | <FontAwesomeIcon icon={faXmark} size="xl" style={{color: "#CC3378"}} /> |

[^pp]: 不直接支持，需要借助外部工具或插件显示
[^offset]: re图时可以根据上一次游玩自动调整偏移，或在设置中手动调节

## 线上系统

| **功能** | **stable** | **Lazer** |
| --- | :-: | :-: |
| 提交分数 | <FontAwesomeIcon icon={faCheck} size="xl" style={{color: "#63E6BE"}} /> | <FontAwesomeIcon icon={faCheck} size="xl" style={{color: "#63E6BE"}} /> |
| 谱面排行榜 | <FontAwesomeIcon icon={faCheck} size="xl" style={{color: "#63E6BE"}} /> | <FontAwesomeIcon icon={faCheck} size="xl" style={{color: "#63E6BE"}} /> |
| 主页统计数据 | <FontAwesomeIcon icon={faCheck} size="xl" style={{color: "#63E6BE"}} /> | <FontAwesomeIcon icon={faCheck} size="xl" style={{color: "#63E6BE"}} /> |
| 奖章（成就） | <FontAwesomeIcon icon={faCheck} size="xl" style={{color: "#63E6BE"}} /> | <FontAwesomeIcon icon={faCheck} size="xl" style={{color: "#63E6BE"}} /> |
| 表现分 (pp) | <FontAwesomeIcon icon={faCheck} size="xl" style={{color: "#63E6BE"}} /> | <FontAwesomeIcon icon={faCheck} size="xl" style={{color: "#63E6BE"}} /> |
| 实时聊天 | <FontAwesomeIcon icon={faFlag} size="xl" style={{color: "#FFD43B"}} />（有 15 秒的间隔来接收新消息） | <FontAwesomeIcon icon={faCheck} size="xl" style={{color: "#63E6BE"}} /> |
| Wiki / 新闻 / 更新日志 / 总排行榜等 | <FontAwesomeIcon icon={faXmark} size="xl" style={{color: "#CC3378"}} /> | <FontAwesomeIcon icon={faCheck} size="xl" style={{color: "#63E6BE"}} />[^wiki-locale] |
| 玩家主页 | <FontAwesomeIcon icon={faXmark} size="xl" style={{color: "#CC3378"}} /> | <FontAwesomeIcon icon={faFlag} size="xl" style={{color: "#FFD43B"}} />（没有网页版功能完整[^user]） |
| 谱面列表 | <FontAwesomeIcon icon={faFlag} size="xl" style={{color: "#FFD43B"}} />（通过osu! Supporter可用的osu! Direct） | <FontAwesomeIcon icon={faCheck} size="xl" style={{color: "#63E6BE"}} />（可以选择关闭） |
| 无限制的多人游戏房间大小 | <FontAwesomeIcon icon={faXmark} size="xl" style={{color: "#CC3378"}} />（最多 16 个玩家） | <FontAwesomeIcon icon={faCheck} size="xl" style={{color: "#63E6BE"}} /> |
| 多人游戏观赛 | <FontAwesomeIcon icon={faXmark} size="xl" style={{color: "#CC3378"}} /> | <FontAwesomeIcon icon={faCheck} size="xl" style={{color: "#63E6BE"}} /> |
| 倒计时器 | <FontAwesomeIcon icon={faFlag} size="xl" style={{color: "#FFD43B"}} /> | <FontAwesomeIcon icon={faCheck} size="xl" style={{color: "#63E6BE"}} /> |
| 队列模式 | <FontAwesomeIcon icon={faXmark} size="xl" style={{color: "#CC3378"}} /> | <FontAwesomeIcon icon={faXmark} size="xl" style={{color: "#CC3378"}} /> |
| 多人游戏指令 | <FontAwesomeIcon icon={faCheck} size="xl" style={{color: "#63E6BE"}} /> | <FontAwesomeIcon icon={faXmark} size="xl" style={{color: "#CC3378"}} /> |
| 合作模式 (Tag co-op) | <FontAwesomeIcon icon={faCheck} size="xl" style={{color: "#63E6BE"}} /> | <FontAwesomeIcon icon={faXmark} size="xl" style={{color: "#CC3378"}} /> |
| 课题模式 | <FontAwesomeIcon icon={faXmark} size="xl" style={{color: "#CC3378"}} /> | <FontAwesomeIcon icon={faCheck} size="xl" style={{color: "#63E6BE"}} /> |
| 直接更新官网上改动过的谱面 | <FontAwesomeIcon icon={faFlag} size="xl" style={{color: "#FFD43B"}} />（只更新谱面文件） | <FontAwesomeIcon icon={faCheck} size="xl" style={{color: "#63E6BE"}} />（更新所有谱面文件） |

[^wiki-locale]: wiki 的显示语言与游戏语言设置同步
[^user]: 目前只支持关注用户，还不支持关注作图动态，可在浏览器中打开

## 编辑器

| **功能** | **stable** | **Lazer** |
| --- | :-: | :-: |
| osu! 编辑器 | <FontAwesomeIcon icon={faCheck} size="xl" style={{color: "#63E6BE"}} /> | <FontAwesomeIcon icon={faCheck} size="xl" style={{color: "#63E6BE"}} /> |
| osu!taiko 编辑器 | <FontAwesomeIcon icon={faXmark} size="xl" style={{color: "#CC3378"}} /> | <FontAwesomeIcon icon={faCheck} size="xl" style={{color: "#63E6BE"}} /> |
| osu!catch 编辑器 | <FontAwesomeIcon icon={faXmark} size="xl" style={{color: "#CC3378"}} /> | <FontAwesomeIcon icon={faCheck} size="xl" style={{color: "#63E6BE"}} /> |
| osu!mania 编辑器 | <FontAwesomeIcon icon={faCheck} size="xl" style={{color: "#63E6BE"}} /> | <FontAwesomeIcon icon={faCheck} size="xl" style={{color: "#63E6BE"}} /> |
| 打开一个难度作为参考 | <FontAwesomeIcon icon={faCheck} size="xl" style={{color: "#63E6BE"}} /> | <FontAwesomeIcon icon={faXmark} size="xl" style={{color: "#CC3378"}} /> |
| 按物件设定变速和音量 | <FontAwesomeIcon icon={faXmark} size="xl" style={{color: "#CC3378"}} /> | <FontAwesomeIcon icon={faCheck} size="xl" style={{color: "#63E6BE"}} /> |
| 分段调整滑条的曲线类型 | <FontAwesomeIcon icon={faXmark} size="xl" style={{color: "#CC3378"}} /> | <FontAwesomeIcon icon={faCheck} size="xl" style={{color: "#63E6BE"}} /> |
| 分割、合并滑条 | <FontAwesomeIcon icon={faXmark} size="xl" style={{color: "#CC3378"}} /> | <FontAwesomeIcon icon={faCheck} size="xl" style={{color: "#63E6BE"}} /> |
| 旋转物件 | <FontAwesomeIcon icon={faCheck} size="xl" style={{color: "#63E6BE"}} /> | <FontAwesomeIcon icon={faCheck} size="xl" style={{color: "#63E6BE"}} /> |
| 调整物件大小 | <FontAwesomeIcon icon={faXmark} size="xl" style={{color: "#CC3378"}} /> | <FontAwesomeIcon icon={faCheck} size="xl" style={{color: "#63E6BE"}} /> |
| 提交谱面 | <FontAwesomeIcon icon={faCheck} size="xl" style={{color: "#63E6BE"}} /> | <FontAwesomeIcon icon={faXmark} size="xl" style={{color: "#CC3378"}} /> |
| 故事板编辑器 | <FontAwesomeIcon icon={faCheck} size="xl" style={{color: "#63E6BE"}} /> | <FontAwesomeIcon icon={faXmark} size="xl" style={{color: "#CC3378"}} /> |
| 交叉兼容性 | <FontAwesomeIcon icon={faCheck} size="xl" style={{color: "#63E6BE"}} /> | <FontAwesomeIcon icon={faFlag} size="xl" style={{color: "#FFD43B"}} />（可能存在向前兼容问题） |
