export interface SolarTerm {
  month: number;
  day: number;
  name: string;
  phrase: string;
  icon: string;
}

/**
 * 二十四节气固定日期表（误差 ±1 天，对问候语足够）。
 * icon 对应 Hero.astro 里 sprite 的 symbol id（#term-<icon>）。
 */
export const SOLAR_TERMS: [number, number, string, string, string][] = [
  [1, 5, '小寒', '朔风始凛', 'snow'], [1, 20, '大寒', '冰封岁暮', 'snow'],
  [2, 4, '立春', '东风解冻', 'sprout'], [2, 19, '雨水', '润物无声', 'rain'],
  [3, 5, '惊蛰', '春雷始鸣', 'zap'], [3, 20, '春分', '昼夜均分', 'cloud'],
  [4, 4, '清明', '天清地明', 'sun'], [4, 20, '谷雨', '雨生百谷', 'rain'],
  [5, 5, '立夏', '万物并秀', 'sun'], [5, 21, '小满', '麦穗初齐', 'sprout'],
  [6, 5, '芒种', '忙种时节', 'sprout'], [6, 21, '夏至', '日长至极', 'sun'],
  [7, 7, '小暑', '温风始至', 'sun'], [7, 22, '大暑', '炎蒸如炉', 'sun'],
  [8, 7, '立秋', '凉风渐起', 'leaf'], [8, 23, '处暑', '暑气将止', 'cloud'],
  [9, 7, '白露', '露凝为霜', 'drop'], [9, 22, '秋分', '秋色平分', 'leaf'],
  [10, 8, '寒露', '露气清冷', 'drop'], [10, 23, '霜降', '霜叶始红', 'snow'],
  [11, 7, '立冬', '水始成冰', 'snow'], [11, 22, '小雪', '初雪微落', 'snow'],
  [12, 7, '大雪', '雪盛时寒', 'snow'], [12, 21, '冬至', '阳气始生', 'snow'],
];

/** 取当前所处的节气（已过最近一个） */
export function getSolarTerm(date: Date = new Date()): SolarTerm {
  const m = date.getMonth() + 1;
  const d = date.getDate();
  let current = SOLAR_TERMS[SOLAR_TERMS.length - 1];
  for (const t of SOLAR_TERMS) {
    if (m > t[0] || (m === t[0] && d >= t[1])) current = t;
  }
  const [month, day, name, phrase, icon] = current;
  return { month, day, name, phrase, icon };
}
