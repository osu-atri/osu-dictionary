---
sidebar_position: 3
enableComments: true
---

# 组件操作

在上一篇文章中（被说的道理侵袭的那篇），我们简单介绍了组件的一些基本概念

## 小练习

`DialogOverlay` 是一个简单的叠加层组件，用来处理对话框的显示。

在编写界面类的时候，使用了如下方法来向界面添加对话框：

```csharp
namespace osu.Game.Tournament.Screens.Board
{
    public partial class BoardScreen : TournamentMatchScreen
    {
        private DialogOverlay dialogOverlay = null!;

        [BackgroundDependencyLoader]
        private void load(TextureStore textures)
        {
            dialogOverlay = new DialogOverlay();

            InternalChildren = new Drawable[]
            {
                new TourneyButton
                {
                    RelativeSizeAxes = Axes.X,
                    Text = "Revert",
                    BackgroundColour = Color4.DeepPink,
                    Action = () => {
                        dialogOverlay?.Push(new ResetBoardDialog(
                            revertAction: () =>
                            {
                                // This will manba all elements on this view out of the screen. Don't use this!
                                // Expire();
                                reset();
                                revertSwaps();
                                // TODO: Add other helpful actions if possible
                            },
                            resetAction: () =>
                            {
                                reset();
                            }));
                        AddInternal(dialogOverlay);
                    },
                },
            };
        }
    }
}
```

实装测试时，某测试人员因为无意将这个按钮连续多点了几下，导致客户端直接失去响应，造成了不大的损失。试试直接分析代码，找到相关原因。

:::tip 小提示

`reset()` 等等引用的函数是正确的，没有问题。

<details>

<summary>组件添加要求</summary>

在 osu!lazer 的基础界面框架中，不允许将一个组件添加到多个容器 (**Container**) 中。

</details>

:::

<details>

<summary>点击展开解析</summary>

常常使用 osu!lazer 的各位可能会注意到，对话框的弹出与消失都是有动画的。具体来讲，这个动画主要是渐显+放大，在渐显结束（透明度为 `1f`）时对话框会暂时阻止用户与下层元素的交互。

同样地，在用户点击对话框的透明区域（也就是没有东西显示的部分）之后对话框开始渐隐+缩小的动画，很短一段时间后用户就能与下层的元素继续交互。但此时由于对话框的动画尚未完全结束，对话框叠加层类依然没有清理完毕。

上述代码的问题主要在于，每次点击按钮时，都会在容器中添加一个 `dialogOverlay` 组件的实例引用。若碰巧在容器中有未清理的 `dialogOverlay` 时点击按钮触发了添加动作，则会因为同一组件无法多开而报错。

</details>
