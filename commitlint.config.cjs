// eslint-disable-next-line no-undef
module.exports = {
  extends: ['@commitlint/config-conventional'],
  prompt: {
    alias: {},
    messages: {
      type: '选择你要提交的变更类型：',
      // scope: 'Denote the SCOPE of this change (optional):',
      // customScope: 'Denote the SCOPE of this change:',
      subject: '请简要描述本次提交（必填）：\n',
      body: '请详细描述本次提交（可选），使用 "|" 换行：\n',
      // breaking: 'List any BREAKING CHANGES (optional). Use "|" to break new line:\n',
      // footerPrefixesSelect: 'Select the ISSUES type of changeList by this change (optional):',
      // customFooterPrefix: 'Input ISSUES prefix:',
      // footer: 'List any ISSUES by this change. E.g.: #31, #34:\n',
      // generatingByAI: 'Generating your AI commit subject...',
      // generatedSelectByAI: 'Select suitable subject by AI generated:',
      confirmCommit: '确认要使用以上信息提交吗？(y/n)'
    },
    types: [
      { value: 'feat', name: 'feat:     ✨  新功能 | A new feature', emoji: ':sparkles:' },
      { value: 'fix', name: 'fix:      🐛  bug修复 | A bug fix', emoji: ':bug:' },
      {
        value: 'docs',
        name: 'docs:     📝  文档变更 | Documentation only changes',
        emoji: ':memo:'
      },
      {
        value: 'style',
        name: 'style:    💄  不影响代码含义的更改 | Changes that do not affect the meaning of the code',
        emoji: ':lipstick:'
      },
      {
        value: 'refactor',
        name: 'refactor: ♻️   既不修复错误也不增加功能的代码重构 | A code change that neither fixes a bug nor adds a feature',
        emoji: ':recycle:'
      },
      {
        value: 'chore',
        name: 'chore:    🔨 对构建过程或辅助工具的更改 | Changes that affect the build system or external dependencies',
        emoji: ':hammer:'
      },
      {
        value: 'perf',
        name: 'perf:     ⚡️  性能优化 | A code change that improves performance',
        emoji: ':zap:'
      },
      {
        value: 'test',
        name: 'test:     ✅  添加或修改测试用例 | Adding missing tests or correcting existing tests',
        emoji: ':white_check_mark:'
      },
      {
        value: 'ci',
        name: 'ci:       🎡  对CI配置文件和脚本的更改 | Changes to our CI configuration files and scripts',
        emoji: ':ferris_wheel:'
      },
      {
        value: 'revert',
        name: 'revert:   ⏪️  恢复之前的提交 | Revert to a commit',
        emoji: ':rewind:'
      }
    ],
    skipQuestions: ['scope', 'breaking', 'footer', 'footerPrefix'],
    maxSubjectLength: 100,
    minSubjectLength: 0,
    useEmoji: true,
    emojiAlign: 'center',
    useAI: false,
    aiNumber: 1,
    themeColorCode: '',
    scopes: [],
    allowCustomScopes: true,
    allowEmptyScopes: true,
    customScopesAlign: 'bottom',
    customScopesAlias: 'custom',
    emptyScopesAlias: 'empty',
    upperCaseSubject: false,
    markBreakingChangeMode: false,
    allowBreakingChanges: ['feat', 'fix'],
    breaklineNumber: 100,
    breaklineChar: '|',
    issuePrefixes: [{ value: 'closed', name: 'closed:   ISSUES has been processed' }],
    customIssuePrefixAlign: 'top',
    emptyIssuePrefixAlias: 'skip',
    customIssuePrefixAlias: 'custom',
    allowCustomIssuePrefix: true,
    allowEmptyIssuePrefix: true,
    confirmColorize: true,
    maxHeaderLength: Infinity,
    scopeOverrides: undefined,
    defaultBody: '',
    defaultIssues: '',
    defaultScope: '',
    defaultSubject: ''
  }
}
