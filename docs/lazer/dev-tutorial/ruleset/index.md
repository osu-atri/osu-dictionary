---
sidebar_position: 1
enableComments: true
---

# Ruleset 开发

我们在 osu!lazer 入门指南中曾大概提过关于 Ruleset 的事情，相信玩过 osu!lazer 的大家应该也有一些基本的了解。

所谓 Ruleset 其实与 osu!stable 中的**游戏模式** (Gamemode) 概念差不多。具体来讲：

- Ruleset 定义了一个模式应有的“规则”（所以叫“规则集”）
- Ruleset 让玩家可以使用其游玩，或是扩充一些功能
- osu!lazer 内置了 4 个 Ruleset（经典的四个游戏模式）

## 基本组成

简而言之，一个 Ruleset 由如下的部分组成：

- 基本信息（如名称、描述、图标、切换声音等）
- 输入输出（如回放读取、谱面编辑等）
- 交互判定（如按键绑定、判定类型、难度计算等）
- 物件组成（如打击圈、滑条、转盘等）
- 界面结构（如游玩区域）

这些部分将会在余下的文章中详细阐述。

## 项目结构

总体来说，一个 osu!lazer Ruleset 项目大多使用 C# 语言编写，基本结构如下：

:::tip 说明

以下呈现的是一个 Ruleset 项目的基本（最小化）结构，如果想要扩展更多的功能，结构可能会更加复杂。

项目结构中的 `_` 字符代表你的 Ruleset 的简称（可以自己定一个；例如 Ruleset 全名为 `osu!typer`，那么 `_` 可以写成 `Typer`，`_Ruleset` 就代表 `TyperRuleset`），这种命名方式多是出于开发方便。

---

在项目开发后期，你也可以考虑给项目写一写测试来帮忙排错，以及确认代码逻辑上的运行情况。

:::

- Beatmaps/
  - _BeatmapConverter.cs
- Judgements/
  - _Judgement.cs
- Mods/
  - _ModAutoplay.cs
  - ...（更多其他的模组）
- Objects/
  - Drawables/
    - Drawable_HitObject.cs
  - _HitObject.cs
- Replays/
  - _AutoGenerator.cs
  - _FramedReplayInputHandler.cs
  - _ReplayFrame.cs
- Scoring/
  - _HitWindows.cs
- UI/
  - Drawable_Ruleset.cs
  - _Playfield.cs
- _DifficultyCalculator.cs
- _InputManager.cs
- _Ruleset.cs

:::note 创建方法

从头开始创建一个 Ruleset 的方法与创建 C# 类库项目的方法并无太大差别，建议使用你的编辑器的创建向导完成。

当然，你也可以从下面的[项目](#推荐项目)中选一个模仿一下。

:::

## 推荐项目

如果你觉得有些无从下手，可以看看下面的项目学习一下。

- [peppy/ruleset-typer](https://github.com/peppy/ruleset-typer)：简简单单的打字 Ruleset，有兴趣也可以看看[我做的分支](https://github.com/CloneWith/ruleset-typer)
- [GSculerlor/Cytosu](https://github.com/GSculerlor/Cytosu)：模仿 Cytus II 的 Ruleset，[我的分支](https://github.com/CloneWith/Cytosu)做了一些兼容性上的更改
- [MATRIX-feather/LLin](https://github.com/MATRIX-feather/LLin)：原名**Hikariii**，为 osu!lazer 提供 gosu 集成、谱面下载加速、播放器等功能，想深入学习可以参考这个
- [karaoke-dev/karaoke](https://github.com/karaoke-dev/karaoke)：在 osu!lazer 唱歌！未来可期的 Ruleset，当然也很复杂就是了（
