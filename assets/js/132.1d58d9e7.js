(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{709:function(t,e,s){"use strict";s.r(e);var a=s(36),v=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"git分支-变基"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git分支-变基"}},[t._v("#")]),t._v(" Git分支-变基")]),t._v(" "),s("p",[t._v("在 Git 中整合来自不同分支的修改主要有两种方法："),s("code",[t._v("merge")]),t._v(" 以及 "),s("code",[t._v("rebase")]),t._v("。 在本节中我们将学习什么是“变基”，怎样使用“变基”，并将展示该操作的惊艳之处，以及指出在何种情况下你应避免使用它。")]),t._v(" "),s("h2",{attrs:{id:"变基的基本操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#变基的基本操作"}},[t._v("#")]),t._v(" 变基的基本操作")]),t._v(" "),s("p",[t._v("请回顾之前在 "),s("a",{attrs:{href:"https://git-scm.com/book/zh/v2/ch00/_basic_merging",target:"_blank",rel:"noopener noreferrer"}},[t._v("分支的合并"),s("OutboundLink")],1),t._v(" 中的一个例子，你会看到开发任务分叉到两个不同分支，又各自提交了更新。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://git-scm.com/book/en/v2/images/basic-rebase-1.png",alt:"分叉的提交历史。"}})]),t._v(" "),s("p",{attrs:{align:"center"}},[t._v("图0.   分叉的提交历史 ▲")]),t._v(" "),s("p",[t._v("之前介绍过，整合分支最容易的方法是 "),s("code",[t._v("merge")]),t._v(" 命令。 它会把两个分支的最新快照（"),s("code",[t._v("C3")]),t._v(" 和 "),s("code",[t._v("C4")]),t._v("）以及二者最近的共同祖先（"),s("code",[t._v("C2")]),t._v("）进行"),s("strong",[t._v("三方合并")]),t._v("，合并的结果是生成一个新的快照（并提交）。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://git-scm.com/book/en/v2/images/basic-rebase-2.png",alt:"通过合并操作来整合分叉了的历史。"}})]),t._v(" "),s("p",{attrs:{align:"center"}},[t._v("图1.   通过合并操作来整合分叉的历史 ▲")]),t._v(" "),s("h3",{attrs:{id:"概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[t._v("#")]),t._v(" 概念")]),t._v(" "),s("p",[s("strong",[t._v("变基就是：将某一分支上的所有修改复制到另一分支上")])]),t._v(" "),s("p",[t._v("除了"),s("code",[t._v("merge")]),t._v("，还有一种方法：你可以提取在 "),s("code",[t._v("C4")]),t._v(" 中引入的补丁和修改，然后在 "),s("code",[t._v("C3")]),t._v(" 的基础上应用一次。 在 Git 中，这种操作就叫做 "),s("strong",[t._v("变基（rebase）")]),t._v("。 你可以使用 "),s("code",[t._v("rebase")]),t._v(" 命令将提交到某一分支上的所有修改都移到另一分支上，就好像“重新播放”一样。")]),t._v(" "),s("p",[t._v("在这个例子中，你可以检出 "),s("code",[t._v("experiment")]),t._v(" 分支，然后将它变基到 "),s("code",[t._v("master")]),t._v(" 分支上：")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout experiment\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" rebase master "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将experiment上的修改变基到master分支上（将experiment的提交移动到master上。）")]),t._v("\nFirst, rewinding "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("head")]),t._v(" to replay your work on "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("top")]),t._v(" of it"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\nApplying: added staged "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("command")]),t._v("\n")])])]),s("p",[t._v("它的原理是首先找到这两个分支（即当前分支 "),s("code",[t._v("experiment")]),t._v("、变基操作的目标基底分支 "),s("code",[t._v("master")]),t._v("） 的最近共同祖先 "),s("code",[t._v("C2")]),t._v("，然后对比当前分支相对于该祖先的历次提交，提取相应的修改并存为临时文件， 然后将当前分支指向目标基底 "),s("code",[t._v("C3")]),t._v(", 最后以此将之前另存为临时文件的修改依序应用。 （译注：写明了 commit id，以便理解，下同）")]),t._v(" "),s("h3",{attrs:{id:"原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[t._v("#")]),t._v(" 原理")]),t._v(" "),s("ol",[s("li",[s("p",[s("strong",[t._v("找到当前分支和目标分支的最近共同祖先")])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("对比当前分支相对于该共同祖先的历次提交")])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("提取相应的修改并存为临时文件")])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("将当前分支指向目标分支")])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("将之前临时文件的修改依序应用")])])])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://git-scm.com/book/en/v2/images/basic-rebase-3.png",alt:"将  中的修改变基到  上。"}})]),t._v(" "),s("p",{attrs:{align:"center"}},[t._v("图2.将 C4 中的修改变基到 C3 上 ▲")]),t._v(" "),s("p",[t._v("现在回到 "),s("code",[t._v("master")]),t._v(" 分支，进行一次快进合并。")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout master\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge experiment\n")])])]),s("p",[s("img",{attrs:{src:"https://git-scm.com/book/en/v2/images/basic-rebase-4.png",alt:" 分支的快进合并。"}})]),t._v(" "),s("p",{attrs:{align:"center"}},[t._v("图3.master 分支的快进合并 ▲")]),t._v(" "),s("h3",{attrs:{id:"步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#步骤"}},[t._v("#")]),t._v(" 步骤")]),t._v(" "),s("p",[s("strong",[t._v("先检出源分支，将源分支的修改变基到目标分支。切回目标分支，进行一次快进合并")])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 示意：")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("源分支"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("源分支的修改"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("rebase"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("到"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("目标分支"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("目标分支"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("源分支"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("p",[t._v("此时，"),s("code",[t._v("C4'")]),t._v(" 指向的快照就和 "),s("a",{attrs:{href:"https://git-scm.com/book/zh/v2/ch00/ebasing-merging-example",target:"_blank",rel:"noopener noreferrer"}},[t._v("the merge example"),s("OutboundLink")],1),t._v(" 中 "),s("code",[t._v("C5")]),t._v(" 指向的快照一模一样了。 这两种整合方法的最终结果没有任何区别，但是 "),s("strong",[t._v("变基使得提交历史更加整洁")]),t._v("。 你在查看一个经过变基的分支的历史记录时会发现，尽管实际的开发工作是并行的， 但它们看上去就像是串行的一样，提交历史是一条直线没有分叉。")]),t._v(" "),s("p",[t._v("一般我们这样做的目的是为了确保在向远程分支推送时能保持提交历史的整洁——"),s("strong",[t._v("例如向某个其他人维护的项目贡献代码时。 在这种情况下，你首先在自己的分支里进行开发，当开发完成时你需要先将你的代码变基到 "),s("code",[t._v("origin/master")]),t._v(" 上，然后再向主项目提交修改")]),t._v("。 这样的话，该项目的维护者就不再需要进行整合工作，只需要快进合并便可。")]),t._v(" "),s("p",[t._v("请注意，无论是通过变基，还是通过三方合并，整合的最终结果所指向的快照始终是一样的，只不过提交历史不同罢了。 变基是将一系列提交按照原有次序依次应用到另一分支上，而合并是把最终结果合在一起。")]),t._v(" "),s("h3",{attrs:{id:"优点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[t._v("#")]),t._v(" 优点")]),t._v(" "),s("p",[s("strong",[t._v("变基的优点： 使提交记录更加整洁。")])]),t._v(" "),s("h2",{attrs:{id:"更有趣的变基例子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更有趣的变基例子"}},[t._v("#")]),t._v(" 更有趣的变基例子")]),t._v(" "),s("p",[t._v("在对两个分支进行变基时，所生成的“重放”并不一定要在目标分支上应用，你也可以指定另外的一个分支进行应用。 就像 "),s("a",{attrs:{href:"https://git-scm.com/book/zh/v2/ch00/bdiag_e",target:"_blank",rel:"noopener noreferrer"}},[t._v("从一个主题分支里再分出一个主题分支的提交历史"),s("OutboundLink")],1),t._v(" 中的例子那样。 你创建了一个主题分支 "),s("code",[t._v("server")]),t._v("，为服务端添加了一些功能，提交了 "),s("code",[t._v("C3")]),t._v(" 和 "),s("code",[t._v("C4")]),t._v("。 然后从 "),s("code",[t._v("C3")]),t._v(" 上创建了主题分支 "),s("code",[t._v("client")]),t._v("，为客户端添加了一些功能，提交了 "),s("code",[t._v("C8")]),t._v(" 和 "),s("code",[t._v("C9")]),t._v("。 最后，你回到 "),s("code",[t._v("server")]),t._v(" 分支，又提交了 "),s("code",[t._v("C10")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"更有趣的变基例子-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更有趣的变基例子-2"}},[t._v("#")]),t._v(" 更有趣的变基例子")]),t._v(" "),s("p",[t._v("在对两个分支进行变基时，所生成的“重放”并不一定要在目标分支上应用，你也可以指定另外的一个分支进行应用。 就像 "),s("a",{attrs:{href:"https://git-scm.com/book/zh/v2/ch00/bdiag_e",target:"_blank",rel:"noopener noreferrer"}},[t._v("从一个主题分支里再分出一个主题分支的提交历史"),s("OutboundLink")],1),t._v(" 中的例子那样。 你创建了一个主题分支 "),s("code",[t._v("server")]),t._v("，为服务端添加了一些功能，提交了 "),s("code",[t._v("C3")]),t._v(" 和 "),s("code",[t._v("C4")]),t._v("。 然后从 "),s("code",[t._v("C3")]),t._v(" 上创建了主题分支 "),s("code",[t._v("client")]),t._v("，为客户端添加了一些功能，提交了 "),s("code",[t._v("C8")]),t._v(" 和 "),s("code",[t._v("C9")]),t._v("。 最后，你回到 "),s("code",[t._v("server")]),t._v(" 分支，又提交了 "),s("code",[t._v("C10")]),t._v("。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://git-scm.com/book/en/v2/images/interesting-rebase-1.png",alt:"从一个主题分支里再分出一个主题分支的提交历史。"}})]),t._v(" "),s("p",{attrs:{align:"center"}},[t._v("图4.从一个主题分支里再分出一个主题分支的提交历史 ▲")]),t._v(" "),s("p",[t._v("假设你希望将 "),s("code",[t._v("client")]),t._v(" 中的修改合并到主分支并发布，但暂时并不想合并 "),s("code",[t._v("server")]),t._v(" 中的修改， 因为它们还需要经过更全面的测试。这时，你就可以使用 "),s("code",[t._v("git rebase")]),t._v(" 命令的 "),s("strong",[s("code",[t._v("--onto")]),t._v(" 选项， 选中在 "),s("code",[t._v("client")]),t._v(" 分支里但不在 "),s("code",[t._v("server")]),t._v(" 分支里的修改（即 "),s("code",[t._v("C8")]),t._v(" 和 "),s("code",[t._v("C9")]),t._v("），将它们在 "),s("code",[t._v("master")]),t._v(" 分支上重放")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" rebase --onto master server client\n")])])]),s("p",[t._v("以上命令的意思是：“取出 "),s("code",[t._v("client")]),t._v(" 分支，找出它从 "),s("code",[t._v("server")]),t._v(" 分支分歧之后的补丁， 然后把这些补丁在 "),s("code",[t._v("master")]),t._v(" 分支上重放一遍，让 "),s("code",[t._v("client")]),t._v(" 看起来像直接基于 "),s("code",[t._v("master")]),t._v(" 修改一样”。这理解起来有一点复杂，不过效果非常酷。")]),t._v(" "),s("h3",{attrs:{id:"onto选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#onto选项"}},[t._v("#")]),t._v(" --onto选项")]),t._v(" "),s("p",[s("strong",[t._v("选中C分支中的但不在B分支里的修改，应用到A分支。")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://git-scm.com/book/en/v2/images/interesting-rebase-2.png",alt:"截取主题分支上的另一个主题分支，然后变基到其他分支。"}})]),t._v(" "),s("p",{attrs:{align:"center"}},[t._v("图5.截取主题分支上的另一个主题分支，然后变基到其他分支 ▲")]),t._v(" "),s("p",[t._v("现在可以快进合并 "),s("code",[t._v("master")]),t._v(" 分支了。（如图 "),s("a",{attrs:{href:"https://git-scm.com/book/zh/v2/ch00/bdiag_g",target:"_blank",rel:"noopener noreferrer"}},[t._v("快进合并 "),s("code",[t._v("master")]),t._v(" 分支，使之包含来自 "),s("code",[t._v("client")]),t._v(" 分支的修改"),s("OutboundLink")],1),t._v("）：")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout master\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge client\n")])])]),s("p",[s("img",{attrs:{src:"https://git-scm.com/book/en/v2/images/interesting-rebase-3.png",alt:"快进合并  分支，使之包含来自  分支的修改。"}})]),t._v(" "),s("p",{attrs:{align:"center"}},[t._v("图6.快进合并 `master` 分支，使之包含来自 `client` 分支的修改 ▲")]),t._v(" "),s("h3",{attrs:{id:"省去先切换到源分支的步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#省去先切换到源分支的步骤"}},[t._v("#")]),t._v(" 省去先切换到源分支的步骤")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" rebase "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("目标"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("当前"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("分支"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("源分支"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将源分支变基到目标分支。执行此命令后会自动切换到源分支")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("目标分支"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("源分支"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("p",[s("strong",[t._v("注意：使用这个方法要确保源分支上的代码是最新的。")])]),t._v(" "),s("p",[t._v("接下来你决定将 "),s("code",[t._v("server")]),t._v(" 分支中的修改也整合进来。 使用 "),s("code",[t._v("git rebase <basebranch> <topicbranch>")]),t._v(" 命令可以直接将主题分支 （即本例中的 "),s("code",[t._v("server")]),t._v("）变基到目标分支（即 "),s("code",[t._v("master")]),t._v("）上。 这样做能省去你先切换到 "),s("code",[t._v("server")]),t._v(" 分支，再对其执行变基命令的多个步骤。")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" rebase master server\n")])])]),s("p",[t._v("如图 "),s("a",{attrs:{href:"https://git-scm.com/book/zh/v2/ch00/bdiag_h",target:"_blank",rel:"noopener noreferrer"}},[t._v("将 "),s("code",[t._v("server")]),t._v(" 中的修改变基到 "),s("code",[t._v("master")]),t._v(" 上"),s("OutboundLink")],1),t._v(" 所示，"),s("code",[t._v("server")]),t._v(" 中的代码被“续”到了 "),s("code",[t._v("master")]),t._v(" 后面。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://git-scm.com/book/en/v2/images/interesting-rebase-4.png",alt:"将  中的修改变基到  上。"}})]),t._v(" "),s("p",{attrs:{align:"center"}},[t._v("图7.将 `server` 中的修改变基到 `master` 上 ▲")]),t._v(" "),s("p",[t._v("然后就可以快进合并主分支 "),s("code",[t._v("master")]),t._v(" 了：")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout master\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge server\n")])])]),s("p",[t._v("至此，"),s("code",[t._v("client")]),t._v(" 和 "),s("code",[t._v("server")]),t._v(" 分支中的修改都已经整合到主分支里了， 你可以删除这两个分支，最终提交历史会变成图 "),s("a",{attrs:{href:"https://git-scm.com/book/zh/v2/ch00/bdiag_i",target:"_blank",rel:"noopener noreferrer"}},[t._v("最终的提交历史"),s("OutboundLink")],1),t._v(" 中的样子：")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -d client\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -d server\n")])])]),s("p",[s("img",{attrs:{src:"https://git-scm.com/book/en/v2/images/interesting-rebase-5.png",alt:"最终的提交历史。"}})]),t._v(" "),s("p",{attrs:{align:"center"}},[t._v("图8. 最终的提交历史 ▲")]),t._v(" "),s("h2",{attrs:{id:"变基的风险"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#变基的风险"}},[t._v("#")]),t._v(" 变基的风险")]),t._v(" "),s("h3",{attrs:{id:"金科玉律"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#金科玉律"}},[t._v("#")]),t._v(" 金科玉律")]),t._v(" "),s("p",[t._v("呃，奇妙的变基也并非完美无缺，要用它得遵守一条准则：")]),t._v(" "),s("p",[s("strong",[t._v("如果提交存在于你的仓库之外，而别人可能基于这些提交进行开发，那么不要执行变基。")])]),t._v(" "),s("p",[t._v("如果你遵循这条金科玉律，就不会出差错。 否则，人民群众会仇恨你，你的朋友和家人也会嘲笑你，唾弃你。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[s("strong",[t._v("例如：几个人同时在一个主题分支上进行开发和提交时，你不要中途执行变基，只有在大家都完成工作之后才可以执行变基。")])])]),t._v(" "),s("h3",{attrs:{id:"变基的实质"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#变基的实质"}},[t._v("#")]),t._v(" 变基的实质")]),t._v(" "),s("p",[s("strong",[t._v("变基操作的实质是丢弃一些现有的提交，然后相应地新建一些内容一样但实际上不同的提交。")]),t._v(" 如果你已经将提交推送至某个仓库，而其他人也已经从该仓库拉取提交并进行了后续工作，此时，如果你用 "),s("code",[t._v("git rebase")]),t._v(" 命令重新整理了提交并再次推送，你的同伴因此将不得不再次将他们手头的工作与你的提交进行整合，如果接下来你还要拉取并整合他们修改过的提交，事情就会变得一团糟。")]),t._v(" "),s("p",[t._v("让我们来看一个在公开的仓库上执行变基操作所带来的问题。 假设你从一个中央服务器克隆然后在它的基础上进行了一些开发。 你的提交历史如图所示：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://git-scm.com/book/en/v2/images/perils-of-rebasing-1.png",alt:"克隆一个仓库，然后在它的基础上进行了一些开发。"}})]),t._v(" "),s("p",{attrs:{align:"center"}},[t._v("图9. 克隆一个仓库，然后在它的基础上进行了一些开发 ▲")]),t._v(" "),s("p",[t._v("然后，某人又向中央服务器提交了一些修改，其中还包括一次合并。 你抓取了这些在远程分支上的修改，并将其合并到你本地的开发分支，然后你的提交历史就会变成这样：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://git-scm.com/book/en/v2/images/perils-of-rebasing-2.png",alt:"抓取别人的提交，合并到自己的开发分支。"}})]),t._v(" "),s("p",{attrs:{align:"center"}},[t._v("图10. 抓取别人的提交，合并到自己的开发分支 ▲")]),t._v(" "),s("p",[t._v("接下来，这个人又决定把合并操作回滚，改用变基；继而又用 "),s("code",[t._v("git push --force")]),t._v(" 命令覆盖了服务器上的提交历史。 之后你从服务器抓取更新，会发现多出来一些新的提交。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://git-scm.com/book/en/v2/images/perils-of-rebasing-3.png",alt:"有人推送了经过变基的提交，并丢弃了你的本地开发所基于的一些提交。"}})]),t._v(" "),s("p",{attrs:{align:"center"}},[t._v("图11. 有人推送了经过变基的提交，并丢弃了你的本地开发所基于的一些提交 ▲")]),t._v(" "),s("p",[t._v("结果就是你们两人的处境都十分尴尬。 如果你执行 "),s("code",[t._v("git pull")]),t._v(" 命令，你将合并来自两条提交历史的内容，生成一个新的合并提交，最终仓库会如图所示：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://git-scm.com/book/en/v2/images/perils-of-rebasing-4.png",alt:"你将相同的内容又合并了一次，生成了一个新的提交。"}})]),t._v(" "),s("p",{attrs:{align:"center"}},[t._v("图12. 你将相同的内容又合并了一次，生成了一个新的提交 ▲")]),t._v(" "),s("p",[t._v("此时如果你执行 "),s("code",[t._v("git log")]),t._v(" 命令，你会发现有两个提交的作者、日期、日志居然是一样的，这会令人感到混乱。 此外，如果你将这一堆又推送到服务器上，你实际上是将那些已经被变基抛弃的提交又找了回来，这会令人感到更加混乱。 很明显对方并不想在提交历史中看到 "),s("code",[t._v("C4")]),t._v(" 和 "),s("code",[t._v("C6")]),t._v("，因为之前就是他把这两个提交通过变基丢弃的。")]),t._v(" "),s("h2",{attrs:{id:"用变基解决变基"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用变基解决变基"}},[t._v("#")]),t._v(" 用变基解决变基")]),t._v(" "),s("p",[t._v("如果你 "),s("strong",[t._v("真的")]),t._v(" 遭遇了类似的处境，Git 还有一些高级魔法可以帮到你。 如果团队中的某人强制推送并覆盖了一些你所基于的提交，你需要做的就是检查你做了哪些修改，以及他们覆盖了哪些修改。")]),t._v(" "),s("p",[t._v("实际上，Git 除了对整个提交计算 SHA-1 校验和以外，也对本次提交所引入的修改计算了校验和——即 “patch-id”。")]),t._v(" "),s("p",[t._v("如果你拉取被覆盖过的更新并将你手头的工作基于此进行变基的话，一般情况下 Git 都能成功分辨出哪些是你的修改，并把它们应用到新分支上。")]),t._v(" "),s("p",[t._v("举个例子，如果遇到前面提到的 "),s("a",{attrs:{href:"https://git-scm.com/book/zh/v2/ch00/_pre_merge_rebase_work",target:"_blank",rel:"noopener noreferrer"}},[t._v("有人推送了经过变基的提交，并丢弃了你的本地开发所基于的一些提交"),s("OutboundLink")],1),t._v(" 那种情境，如果我们不是执行合并，而是执行 "),s("code",[t._v("git rebase teamone/master")]),t._v(", Git 将会：")]),t._v(" "),s("ul",[s("li",[t._v("检查哪些提交是我们的分支上独有的（C2，C3，C4，C6，C7）")]),t._v(" "),s("li",[t._v("检查其中哪些提交不是合并操作的结果（C2，C3，C4）")]),t._v(" "),s("li",[t._v("检查哪些提交在对方覆盖更新时并没有被纳入目标分支（只有 C2 和 C3，因为 C4 其实就是 C4'）")]),t._v(" "),s("li",[t._v("把查到的这些提交应用在 "),s("code",[t._v("teamone/master")]),t._v(" 上面")])]),t._v(" "),s("p",[t._v("从而我们将得到与 "),s("a",{attrs:{href:"https://git-scm.com/book/zh/v2/ch00/_merge_rebase_work",target:"_blank",rel:"noopener noreferrer"}},[t._v("你将相同的内容又合并了一次，生成了一个新的提交"),s("OutboundLink")],1),t._v(" 中不同的结果，如图 "),s("a",{attrs:{href:"https://git-scm.com/book/zh/v2/ch00/_rebase_rebase_work",target:"_blank",rel:"noopener noreferrer"}},[t._v("在一个被变基然后强制推送的分支上再次执行变基"),s("OutboundLink")],1),t._v(" 所示。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://git-scm.com/book/en/v2/images/perils-of-rebasing-5.png",alt:"在一个被变基然后强制推送的分支上再次执行变基。"}})]),t._v(" "),s("p",{attrs:{align:"center"}},[t._v("图13. 在一个被变基然后强制推送的分支上再次执行变基 ▲")]),t._v(" "),s("p",[t._v("要想上述方案有效，还需要对方在变基时确保 "),s("code",[t._v("C4'")]),t._v(" 和 "),s("code",[t._v("C4")]),t._v(" 是几乎一样的。 否则变基操作将无法识别，并新建另一个类似 "),s("code",[t._v("C4")]),t._v(" 的补丁（而这个补丁很可能无法整洁的整合入历史，因为补丁中的修改已经存在于某个地方了）。")]),t._v(" "),s("p",[t._v("在本例中另一种简单的方法是使用 "),s("code",[t._v("git pull --rebase")]),t._v(" 命令而不是直接 "),s("code",[t._v("git pull")]),t._v("。 又或者你可以自己手动完成这个过程，先 "),s("code",[t._v("git fetch")]),t._v("，再 "),s("code",[t._v("git rebase teamone/master")]),t._v("。")]),t._v(" "),s("p",[t._v("如果你习惯使用 "),s("code",[t._v("git pull")]),t._v(" ，同时又希望默认使用选项 "),s("code",[t._v("--rebase")]),t._v("，你可以执行这条语句 "),s("code",[t._v("git config --global pull.rebase true")]),t._v(" 来更改 "),s("code",[t._v("pull.rebase")]),t._v(" 的默认配置。")]),t._v(" "),s("p",[t._v("如果你只对不会离开你电脑的提交执行变基，那就不会有事。 如果你对已经推送过的提交执行变基，但别人没有基于它的提交，那么也不会有事。 如果你对已经推送至共用仓库的提交上执行变基命令，并因此丢失了一些别人的开发所基于的提交， 那你就有大麻烦了，你的同事也会因此鄙视你。")]),t._v(" "),s("p",[t._v("如果你或你的同事在某些情形下决意要这么做，请一定要通知每个人执行 "),s("code",[t._v("git pull --rebase")]),t._v(" 命令，这样尽管不能避免伤痛，但能有所缓解。")]),t._v(" "),s("h2",{attrs:{id:"变基-vs-合并"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#变基-vs-合并"}},[t._v("#")]),t._v(" 变基 vs. 合并")]),t._v(" "),s("p",[t._v("至此，你已在实战中学习了变基和合并的用法，你一定会想问，到底哪种方式更好。 在回答这个问题之前，让我们退后一步，想讨论一下提交历史到底意味着什么。")]),t._v(" "),s("p",[t._v("有一种观点认为，仓库的提交历史即是 "),s("strong",[t._v("记录实际发生过什么")]),t._v("。 它是针对历史的文档，本身就有价值，不能乱改。 从这个角度看来，改变提交历史是一种亵渎，你使用 "),s("em",[t._v("谎言")]),t._v(" 掩盖了实际发生过的事情。 如果由合并产生的提交历史是一团糟怎么办？ 既然事实就是如此，那么这些痕迹就应该被保留下来，让后人能够查阅。")]),t._v(" "),s("p",[t._v("另一种观点则正好相反，他们认为提交历史是 "),s("strong",[t._v("项目过程中发生的事")]),t._v("。 没人会出版一本书的第一版草稿，软件维护手册也是需要反复修订才能方便使用。 持这一观点的人会使用 "),s("code",[t._v("rebase")]),t._v(" 及 "),s("code",[t._v("filter-branch")]),t._v(" 等工具来编写故事，怎么方便后来的读者就怎么写。")]),t._v(" "),s("p",[t._v("现在，让我们回到之前的问题上来，到底合并还是变基好？希望你能明白，这并没有一个简单的答案。 Git 是一个非常强大的工具，它允许你对提交历史做许多事情，但每个团队、每个项目对此的需求并不相同。 既然你已经分别学习了两者的用法，相信你能够根据实际情况作出明智的选择。")]),t._v(" "),s("p",[s("strong",[t._v("总的原则是，只对尚未推送或分享给别人的本地修改执行变基操作清理历史， 从不对已推送至别处的提交执行变基操作，这样，你才能享受到两种方式带来的便利。")])])])}),[],!1,null,null,null);e.default=v.exports}}]);