/**
 * 从 markdown 正文里取一句纯文本预览，用于导航悬浮面板这类窄空间。
 * 只取第一段非空内容，去掉图片、链接语法与标记符号。
 */
export function markdownPreview(body: string = '', max = 18): string {
  const firstLine =
    body
      .replace(/```[\s\S]*?```/g, '')
      .split('\n')
      .map((line) => line.trim())
      .find((line) => line.length > 0) ?? '';

  const text = firstLine
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[\\*_~`#>]/g, '')
    .trim();

  return text.length > max ? `${text.slice(0, max)}…` : text;
}
