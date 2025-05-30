---
enableComments: true
---

# Part 3: 界面介绍及使用

import { faXmark, faPlus } from "@fortawesome/free-solid-svg-icons";

## 工具栏

工具栏坐落在屏幕的最上方，呈长条形横跨整个显示界面。

![工具栏一览](img/topbar.png)

osu!lazer 将工具栏分为左右两部分，将依次进行介绍：

### 左栏

- <OsuIcon icon="settings" label="设置按钮" scale="0.025" invert="true" reverse="true" />：点击后可打开游戏设置面板，也可以使用 `Ctrl + O`。
- <OsuIcon icon="home" label="主页按钮" scale="0.025" invert="true" reverse="true" />：点击后可以回到主菜单。你也可以使用 `Alt + Home` 回到主菜单。
- ![游戏模式选择](img/modes.png)：展示了目前Lazer中可用的游戏模式。
  - 默认的四个内置游戏模式：osu!、osu!taiko、osu!catch 和 osu!mania 排列在左侧；右侧出现的其他图标代指已经安装的其他 Ruleset。

:::tip 小提示

你可以按照游戏模式顺序，按下 `Ctrl + 数字键`快速跳转到相应模式。

有关更多安装 Ruleset 的内容可以在[**这里**](/docs/lazer/tips/ruleset-man.md)获取详细信息。

:::

### 右栏

Lazer 已经将网站的大多数功能嵌入进了游戏。你可以使用右侧的按钮访问下列界面：

| 图标 | 功能 | 备注 |
| :-: | :-: | :-: |
| <OsuIcon icon="news" label="新闻" scale="0.25" invert="true" reverse="1" /> | 新闻 | 看看 osu! 社区最近发生了什么 |
| <OsuIcon icon="changelog-b" label="更新日志" scale="0.25" invert="true" reverse="1" /> | 更新日志 | osu! 最近的更新变化 |
| <OsuIcon icon="wiki" label="osu!wiki" scale="0.25" invert="true" reverse="1" /> | osu!wiki | 社区的共享知识库 |
| <OsuIcon icon="ranking" label="排名" scale="0.25" invert="true" reverse="1" /> | 排行榜 | 看看现在谁最强 |
| <OsuIcon icon="beatmap" label="谱面列表" scale="0.25" invert="true" reverse="1" /> | 谱面列表 | 也可以按下 `Ctrl + B` |
| <OsuIcon icon="chat" label="聊天面板" scale="0.25" invert="true" reverse="1" /> | 聊天面板 | 也可以按下 `F8` |
| <OsuIcon icon="global" label="个人资料" scale="0.25" invert="true" reverse="1" /> | 个人资料 | 显示你所有的好友，或者在这里搜索在线的任何用户 |
| <OsuIcon icon="music" label="正在播放" scale="0.25" invert="true" reverse="1" /> | 正在播放 | 查看并控制正在播放的歌曲 |

其中，“正在播放”的展开样式如图：

![正在播放面板](img/now-playing.png)

- ![用户栏](img/user-bar.png)：点击打开你的用户页。
  - 这一部分还可以在完成单次游戏后显示排名和 pp 信息。就像这样：
  ![排名下降了](img/rank-down.gif)
- ![时间栏](img/time-12.png)：显示时间信息。
  - 下面的 <FntColor color="#ff99cc">**running ##:##:##**</FntColor>展示了 Lazer 本次已经运行的时长。
  - 可以点击该区域切换时钟样式，一共四种：
    - ![模拟时钟](img/time-analog.png)
    - ![模拟+数字时钟+运行时间](img/time-12.png)
    - ![数字时钟+运行时间](img/time-digital-run.png)
    - ![数字时钟](img/time-digital.png)
- <OsuIcon icon="notification" label="通知栏按钮" scale="0.025" invert="true" reverse="true" />：**通知栏**。也可以使用 `Ctrl + N` 打开通知栏。

## 通知与通知栏

通知栏区域存放了 Lazer 的各种通知消息。

### 弹出通知

弹出通知会出现在屏幕右侧，从上到下排列。可以用以下方式与之互动：

- 按住鼠标左键向屏幕左侧拖放通知可以把通知*曹飞*，表示“已读”。

  ![滑动以清除](img/notify-slide2clear.gif)
- 点击通知右侧的对号也可以实现同样的操作。

  ![点击以清除](img/notify-click2clear.gif)
- 将通知向右侧滑动，会将通知收纳进通知栏。

  ![滑动以隐藏](img/notify-slide2hide.gif)

### 通知区

通知区会展示各种通知与任务的状态：

![通知区界面](img/notifications.png)

不同状态的通知使用不同颜色表示，这些颜色显示在左侧：

- 绿色：新通知
- 黄色：任务准备中（如连接服务器）
- 蓝色：任务进行中（如下载、导入）
- 红色：任务失败

对于运行中的任务，可以点击通知右侧的 <FontAwesomeIcon icon={faXmark} size="lg" /> 图标，或者右键单击通知停止任务进程。

![停止任务或删除通知](img/notify-stopndel.gif)

:::info 你知道吗

1. 在 Windows 平台上，自动更新过程无法通过此方式取消，只能通过退出游戏中止。（怎么跟巨硬学了这个）
2. 已取消/失败的任务**无法**直接重试。

:::

## 选歌界面

终于要进入最核心的区域了。

![选歌界面概览](img/songselect.png)

选歌界面的左侧显示谱面信息，排行榜等信息，右侧则显示谱面列表。

### 谱面信息

![谱面信息显示](img/songselect-left.png)

转到左侧的显示区域，上方会显示谱面的基本信息，包含曲绘、难度名、歌名、作曲家、谱师等信息。

点击 **mapped by <FntColor color="#66CCFF">XXX</FntColor>** 中的蓝字可打开谱师的个人主页。

:::info 提示

即使蓝字显示的是谱面上传者的名称，点击客串难度的该位置也会跳转到客串难度谱师的主页。

:::

下方的五个数字分别表示**游玩长度、BPM、圆圈总数、滑条总数与转盘总数。**

下面显示有关当前难度的属性，包含圆圈大小、准度要求、难度星级、掉血速度与缩圈速度。

下面有五个选项，每个选项包含不同的信息显示。

<Tabs groupId="beatmapInfo">
  <TabItem value="Details">
  显示当前难度的具体信息，例如玩家评分、标签来源、失败位置等等。

  ![难度详细信息](img/songselect-info.png)
  </TabItem>
  <TabItem value="Local">
  显示本地所有分数的排行榜。

  ![本地排行榜](img/ranking-local.png)
  </TabItem>
  <TabItem value="Global">
  显示当前难度的全球分数排行榜。

  ![全球排行榜](img/ranking-global.png)
  </TabItem>
  <TabItem value="Country">
  显示当前难度的地区分数排行榜。你需要 osu! 支持者来使用该功能。

  ![地区排行榜](img/ranking-country.png)
  </TabItem>
  <TabItem value="Friend">
  显示当前难度的好友分数排行榜。你需要 osu! 支持者来使用该功能。

  ![好友排行榜](img/ranking-friend.png)
  </TabItem>
</Tabs>

在排行榜中，点击榜单右上角![模组限制开关](img/selectmod-toggle.png)按钮来显示当前选中mod的排行榜。例如你当前选中了 Hard Rock，那么勾选后就会显示当前难度下带 Hard Rock 成绩的排行榜。你同样需要 osu! 支持者来使用该功能。

### 功能区

左下角可以对谱面加mod，随机选择谱面，或者对谱面进行管理。

![底栏按钮](img/bottom-button.png)

:::info 提示

这里仅仅介绍mods菜单的使用方法和操作细节。有关mods的内容将在下面新开一个章节专门介绍。

:::

点击 <Highlight color="#FFCC22">**mods**</Highlight> 打开mod菜单：

![模组选择界面](img/mods-list.png)

看不懂 Lazer 的新mod什么意思？**鼠标悬停在mod上方可以显示预览**。

![显示的模组描述](img/mod-description.png)

当在设置中启用“在选择模组时自动聚焦搜索框”选项后，打开菜单后直接输入mod名称就可以筛选你想选择的mod，支持缩写。

![模组搜索](img/mods-search.png)

#### 模组预设

在最左侧你可以管理自己的模组预设。在选定mod的情况下，点击 <FontAwesomeIcon icon={faPlus} size="lg" /> 创建新的预设。

![新建模组预设](img/modset-new.png)

在预设中你可以输入预设的名称和描述。点击添加预设来保存你的mod预设。

![保存好的模组预设](img/modset-entry.png)

#### 模组设置

在 Lazer 中，一些mods允许你进行进一步的配置。比如 Double Time。点击左下角“自定义模组”按钮来详细配置mod。如果你选择了多个mod，则会在面板上显示所有可供配置的mod设置。

![模组设置](img/mod-setting.png)

---

![随机](img/random-button.png)按钮会让 Lazer 通过设置中的算法为你随机挑选一张谱面。

:::tip 小提示

不小心点到了 Random？按住 `Shift` 回到随机选择之前的那一张谱面。

:::

当按住 `Shift` 时，<Highlight color="#A5CC00">**random**</Highlight> 随机按钮会变成 <Highlight color="#A5CC00">**rewind**</Highlight> 撤销按钮。

---

点击 <Highlight color="#66CCFF">**options**</Highlight> 按钮打开谱面设置菜单。

![谱面设置组](img/options-group.png)

由左至右分别是：

- **管理收藏夹**，点击以管理你创建的所有收藏夹。
- **删除该谱面的所有难度**
- **标记为已玩过**
- **清除该谱面下所有难度的成绩**
- **编辑谱面**

### 搜索与筛选区

你可以使用右上方的搜索区找到你想玩的谱面。

![谱面搜索与筛选区](img/beatmap-search.png)

#### 搜索

:::info 信息

关于谱面搜索功能，详见 [osu!wiki](https://osu.ppy.sh/wiki/zh/Beatmap_search)。

:::

搜索框不仅可以执行常规的字符串匹配搜索，还可以使用下面的比较符和关键词进行高级搜索。

这些是在 Lazer 中可以使用的比较符：

| **比较符** | **描述** |
| :-: | :-: |
| `=` | 等于 |
| `:` | 等于 |
| `<` | 小于 |
| `>` | 大于 |
| `<=` | 小于等于 |
| `>=` | 大于等于 |

这些是在Lazer中可以使用的关键词：

| **比较符** | **描述** |
| :-: | :-: |
| `artist` | 曲师 |
| `title` | 歌名 |
| `creator` | 谱面难度作者 |
| `diff` | 谱面难度名称 |
| `ar` | 缩圈速度 |
| `cs` | 圆圈大小 |
| `od` | 判定严度 |
| `hp`,`dr` | 掉血速度 |
| `key`,`keys` | 按键数量（仅限 osu!mania） |
| `star`,`stars` | 星数 |
| `bpm` | 歌曲速度 |
| `length` | 游玩时间（单位为秒） |
| `status` | 谱面状态  |
| `played`,`lastplayed` | 距上次游玩的时间 |
| `divisor` | 音符时值的分母 |

:::tip 搜索

谱面状态 `status` 的值可以是 `ranked`/`approved`/`pending`/`notsubmitted`/`unknown`/`loved` 其一，或者简写为 `r`/`a`/`p`/`n`/`u`/`l`。多个值可用英文逗号 (`,`) 分隔。

距上次游玩的时间可以按 `#y#M#d#h#m#s` 格式输入（年月日时分秒）。比如 `2d5s` 表示“2天5秒”。

:::

例如，要搜索处于已上架 (Ranked) 与社区喜爱 (Loved) 状态的谱面：`status=r,l`

#### 筛选

- 拖动![星数筛选条](img/star-filter.png)两边的手柄来按照星级难度搜索谱面。
- 使用![收藏夹筛选](img/collection-filter.png)下拉菜单来根据收藏夹检索谱面。
- 使用这里列出的排序方式：![排序方式选择](img/beatmap-sort.png)来对下面列表里所有的谱面排序。
- 在除osu!以外的所有模式中，勾选![显示转谱](img/convert-toggle.png)后，谱面列表中会显示由 osu! 模式转化来的难度。

### 谱面操作

![完整的谱面卡片](img/beatmapset-card-full.png)

在谱面标题上，会显示歌名、曲师、谱面状态及包含的谱面难度信息。

在单个谱面set中，所有难度会按照难度星级由上至下进行排序。已经玩过并且设下等级的难度，会在难度前显示评级。

鼠标悬停在set标题上的图标![谱面难度图标](img/beatmapset-symbol.png)来显示具体的难度星级：![谱面难度星级显示](img/difficon-description.png)

如果选择的set包含不同游戏模式的谱面难度，则会在谱面标题上显示该信息。

![带有不同模式难度的谱面](img/beatmapset-card.png)

在上面的例子中，osu!taiko 游戏模式的难度图标被暗化了。这是因为当前选择的游戏模式为 osu! 模式，并非 osu!taiko 模式。

:::tip 小提示

除所选模式不同外，当同一谱面中的难度不符合筛选条件时，对应图标也会变暗

点击变灰的难度后，会自动调整条件，以选中该难度：

- 若模式不同，则会切换到对应模式；
- 若筛选条件不符，则会清除筛选；

:::

#### 右键菜单

在谱面上点击右键会展开右键菜单：

![难度对应菜单](img/diff-menu.png)

- **开始游玩** 会开始游玩当前选择的谱面。双击当前难度或者点击右下角的粉饼也可以开始游戏。
- **编辑** 会将该谱面使用编辑器打开。
- **Details** 会在游戏内置网页上打开谱面主页。
- 鼠标悬停在 **Collections** 会展开收藏夹列表。可以选择收藏夹并将该谱面添加到收藏夹中。
- **隐藏** 将会隐藏该难度。
  - 如果当前set下存在隐藏过的难度，那么点击右键会显示 **"Restore all hidden"** 选项。点击以取消隐藏当前set下的所有隐藏了的难度。

### 开始游玩

**点击右下角跳动的 osu! Cookie（或者按下 `Enter`），享受速通腱鞘炎的快感！**

![osu! 粉饼](img/cookie-corner.png)

使用键盘上的 `Z` 键和 `X` 键击打物件，使用你的鼠标/数位板/手柄/触摸屏等位置输入设备来精准定位要击打的物件！你也可以在设置中，绑定适合自己的键位设定。

下面的教程假设你已经知道如何游玩 osu! 主模式。如果你还不清楚 osu! 怎么玩，推荐你获取[这张谱面](https://osu.ppy.sh/beatmapsets/1011011#osu/2116202)来学习一下！

![新手教程卡](img/beginner-card.png)
