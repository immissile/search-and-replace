var replaces = require('../index');

// 新广告法违禁词
var target = [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '技术',
    '科学',
    '国际产品',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '工艺',
    '科学',
    '技术',
    '加工工艺',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ''
];

replaces({
    target: target, // 目标关键词，可以是数组批量处理
    replacement: '', // 替换成
    exclude: '*.less,*.css', // 不检索
    paths: ['.'] // 指定目标文件所在位置
});

