/**
 * 翻訳情報(translations.txt)
 */
export type Translations = Readonly<{
  /** 翻訳元日本語 */
  transId: string;
  /** 言語 */
  lang: string;
  /** 翻訳先言語 */
  translation: string;
}>;
