const fs = require('fs');

// بارگذاری هسته اصلی از index.html پروژه (یا قرار دادن توابع تبدیل)
// این تابع توکن‌ها یا فایل‌های NPVT را می‌خواند و استخراج می‌کند
function extractTokens(text) {
    const regex = /npvt:\/\/[a-zA-Z0-9+/=_-]+|NPVT1\s+[a-zA-Z0-9+/=_\s,-]+/gi;
    return text.match(regex) || [];
}

const inputPath = process.argv[2];
if (!inputPath || !fs.existsSync(inputPath)) {
    process.exit(0);
}

const content = fs.readFileSync(inputPath, 'utf8');
const linksRegex = /(?:vless|vmess|trojan|ss|hysteria2|hy2):\/\/[^\s<>"'`]+/gi;
const found = content.match(linksRegex) || [];

// خروجی تمیز به استاندارد خروجی
console.log(found.join('\n'));
