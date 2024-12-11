---
sidebar_position: 2
enableComments: true
---

# 基本信息

每个 Ruleset 都有一些确定其属性的基本信息，这些信息会为 osu!lazer 所利用，并呈现在用户界面层次上。

:::info

为了演示与撰写方便，这个系列教程的多数内容会以 [CloneWith/ruleset-typer](https://github.com/clonewith/ruleset-typer) 为原型进行讲述与展开（或者是作为模版进行改写），主要因为这个项目相对简单、结构也比较清晰，是比较容易入手的。

对于其他的项目，实际情况可能有所不同，但主要结构都是差不多的。

:::

## 示例代码

由于基本信息都集成在一个类里，并且类型多样，初见时可能会觉得无所适从。不过可以尝试将这些信息分为几个类别单独去了解学习。

这里先给出示例 Ruleset `Ottoman` 的核心代码，接下来将会分开说明。目前我们假定：

- Ottoman 是一个简单的 Ruleset
- Ottoman 没有自己的专谱，将 osu!std 谱面进行转换而游玩
- Ottoman 使用的是**水平滚动式**布局（也就是与太鼓之类的差不多）
- Ottoman 实现了一些常见的模组

```csharp title="osu.Game.Rulesets.Ottoman/OttomanRuleset.cs"
namespace osu.Game.Rulesets.Ottoman
{
    public class OttomanRuleset : Ruleset
    {
        public override string Description => "Play with Short Dolly?";

        public override DrawableRuleset CreateDrawableRulesetWith(IBeatmap beatmap, IReadOnlyList<Mod> mods = null) => new DrawableOttomanRuleset(this, beatmap, mods);

        public override IBeatmapConverter CreateBeatmapConverter(IBeatmap beatmap) => new OttomanBeatmapConverter(beatmap, this);

        public override DifficultyCalculator CreateDifficultyCalculator(IWorkingBeatmap beatmap) => new OttomanDifficultyCalculator(RulesetInfo, beatmap);

        public override IEnumerable<Mod> GetModsFor(ModType type)
        {
            switch (type)
            {
                case ModType.DifficultyReduction:
                    return new Mod[]
                    {
                        new OttomanModEasy(),
                        new OttomanModNoFail(),
                        new MultiMod(new OttomanModHalfTime(), new OttomanModDaycore()),
                    };

                case ModType.DifficultyIncrease:
                    return new Mod[]
                    {
                        new OttomanModHardRock(),
                        new MultiMod(new OttomanModSuddenDeath(), new OttomanModPerfect()),
                        new MultiMod(new OttomanModDoubleTime(), new OttomanModNightcore()),
                        new OttomanModHidden(),
                        new OttomanModFlashlight(),
                        new ModAccuracyChallenge(),
                    };

                case ModType.Automation:
                    return new Mod[]
                    {
                        new MultiMod(new OttomanModAutoplay(), new OttomanModCinema()),
                    };

                case ModType.Conversion:
                    return new Mod[]
                    {
                        new OttomanModDifficultyAdjust(),
                        new OttomanModConstantSpeed(),
                    };

                case ModType.Fun:
                    return new Mod[]
                    {
                        new MultiMod(new ModWindUp(), new ModWindDown()),
                        new OttomanModMuted(),
                        new ModAdaptiveSpeed(),
                    };

                default:
                    return Array.Empty<Mod>();
            }
        }

        public override string ShortName => "ottoman";

        public override string PlayingVerb => "Showing Dolly";

        public override IEnumerable<KeyBinding> GetDefaultKeyBindings(int variant = 0) => new[]
        {
            new KeyBinding(InputKey.A, OttomanAction.ButtonA),
            new KeyBinding(InputKey.B, OttomanAction.ButtonB),
        };

        public override Drawable CreateIcon() => new SpriteText
        {
            Anchor = Anchor.Centre,
            Origin = Anchor.Centre,
            Text = ShortName[0].ToString(),
            Font = OsuFont.Default.With(size: 18),
        };

        // Leave this line intact. It will bake the correct version into the ruleset on each build/release.
        public override string RulesetAPIVersionSupported => CURRENT_RULESET_API_VERSION;
    }
}
```

## 属性

### `ShortName`

```csharp
public override string ShortName => "ottoman";
```

`ShortName` 可以理解为 Ruleset 的名称，会在鼠标悬停在顶栏的对应 Ruleset 图标上时，作为“标题”显示（当然没有相对应的 `LongName` 就是了）。

### `Description`

```csharp
public override string Description => "Play with Short Dolly?";
```

`Description` 会作为“副标题”显示在 Ruleset 信息的第二行，起到描述说明的作用。

### `PlayingVerb`

```csharp
public override string PlayingVerb => "Showing Dolly";
```

`PlayingVerb` 会在玩家游玩这个 Ruleset 时，显示在`正在游玩`面板、顶栏右侧个人档案等等的用户卡片上（例如玩 osu!std 时会显示的 `Clicking Circles`）。

### `RulesetAPIVersionSupported`

```csharp
// Leave this line intact. It will bake the correct version into the ruleset on each build/release.
public override string RulesetAPIVersionSupported => CURRENT_RULESET_API_VERSION;
```

`RulesetAPIVersionSupported` 会定义这个版本 Ruleset 需要的**最低**版本。低于这个版本的 osu!lazer 无法加载这个 Ruleset，而高于此版本的*一般*可以加载。

这个数值一般不需要更改（因为 `CURRENT_RULESET_API_VERSION` 是随依赖的 `osu.Game` 版本变化的），修改了反而可能出一些奇怪的问题。

:::info 兼容性问题

在不同版本号的 osu!lazer 之间（尤其是大版本之间，如 `2023` 与 `2024`）可能会引入一些 Ruleset API 相关的更改，从而会导致 Ruleset 的部分或所有功能无法正常使用。遇到这种情况时，osu!lazer 一般会显示错误通知，并会记录到 `runtime` 日志中。

因此在开发 Ruleset 时，要注意不同版本 osu!lazer（NuGet 包）的变化，并勤看看更新日志（在 osu! 官网或者 GitHub 仓库的提交记录），找找可能的破坏性更改。

:::

## 方法

### `GetModsFor()`

```csharp
public override IEnumerable<Mod> GetModsFor(ModType type)
{
    switch (type)
    {
        case ModType.DifficultyReduction:
            return new Mod[]
            {
                new OttomanModEasy(),
                new OttomanModNoFail(),
                new MultiMod(new OttomanModHalfTime(), new OttomanModDaycore()),
            };

        case ModType.DifficultyIncrease:
            return new Mod[]
            {
                new OttomanModHardRock(),
                new MultiMod(new OttomanModSuddenDeath(), new OttomanModPerfect()),
                new MultiMod(new OttomanModDoubleTime(), new OttomanModNightcore()),
                new OttomanModHidden(),
                new OttomanModFlashlight(),
                new ModAccuracyChallenge(),
            };

        case ModType.Automation:
            return new Mod[]
            {
                new MultiMod(new OttomanModAutoplay(), new OttomanModCinema()),
            };

        case ModType.Conversion:
            return new Mod[]
            {
                new OttomanModDifficultyAdjust(),
                new OttomanModConstantSpeed(),
            };

        case ModType.Fun:
            return new Mod[]
            {
                new MultiMod(new ModWindUp(), new ModWindDown()),
                new OttomanModMuted(),
                new ModAdaptiveSpeed(),
            };

        default:
            return Array.Empty<Mod>();
    }
}
```

获取 Ruleset 可以使用的模组，按不同的模组分类呈现在选歌页面可以唤起的模组菜单中。此部分的更多内容将在单独的文章<!-- TODO -->中展示。

### `GetDefaultKeyBindings()`

```csharp
public override IEnumerable<KeyBinding> GetDefaultKeyBindings(int variant = 0) => new[]
{
    new KeyBinding(InputKey.A, OttomanAction.ButtonA),
    new KeyBinding(InputKey.B, OttomanAction.ButtonB),
};
```

获取默认的键位绑定设置。在首次加载 Ruleset 时，会使用对应的 `InputKey` 设置初始化按键设置；同样地，在重置键位时也会用到这里的配置。

建议你在这个函数中定义好所有玩家要用到的键位，以免使用上的不便。

:::tip 开发者提示

如果你在测试键位设置，碰巧又改了这部分代码（在首次测试之后），那么新的默认键位设置不会立刻生效，需要你在设置中手动恢复默认值。

:::

### `CreateIcon()`

```csharp
public override Drawable CreateIcon() => new SpriteText
{
    Anchor = Anchor.Centre,
    Origin = Anchor.Centre,
    Text = ShortName[0].ToString(),
    Font = OsuFont.Default.With(size: 18),
};
```

生成 Ruleset 的图标，会在各种能用到的地方（多见于顶栏模式列表，以及选歌页面）显示。

在这段代码中使用的是以元素/组件为单位**手动生成图标**的方式，将 Ruleset 名称的首字母作为图标显示了。对于组件设计的更多内容，会在<!-- TODO -->单独的系列文章中提及。

除此之外，你也可以选择使用 `FontAwesome`（osu!lazer 有引用这个图标库），或者使用材质库（`TextureStore`，这样就能够使用自定义图像）中的东西来显示图标。

### `CreateDrawableRulesetWith()`

```csharp
public override DrawableRuleset CreateDrawableRulesetWith(IBeatmap beatmap, IReadOnlyList<Mod> mods = null) => new DrawableOttomanRuleset(this, beatmap, mods);
```

生成一个表面完整的游戏实例（包括游戏界面、输入处理等等），`Drawable` 就在暗示这部分要处理的东西与用户界面有关。

这个函数需要带上谱面与模组设置作为参数，以便游戏界面进一步处理。

### `CreateBeatmapConverter()`

```csharp
public override IBeatmapConverter CreateBeatmapConverter(IBeatmap beatmap) => new OttomanBeatmapConverter(beatmap, this);
```

用于转换已有谱面到本 Ruleset 的形式（物件等等），需要带上谱面作为参数，用于转换。

### `CreateDifficultyCalculator()`

```csharp
public override DifficultyCalculator CreateDifficultyCalculator(IWorkingBeatmap beatmap) => new OttomanDifficultyCalculator(RulesetInfo, beatmap);
```

用于计算谱面的难度，需要带上谱面作为参数。

:::note 提示

后面的三个方法基本上是对对应处理类的包装，使用了一些接口来简化工作流程。

对于这些类的详细信息会在后续文章中讲述。

:::
