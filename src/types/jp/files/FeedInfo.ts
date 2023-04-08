/**
 * 提供情報(feed_info.txt)
 */
export type FeedInfo = {
  /** 提供組織名 */
  feedPublisherName: string;
  /** 提供組織URL */
  feedPublisherUrl: string;
  /** 提供言語 */
  feedLang: "ja";
  /** 有効期間開始日有効期間終了日 */
  feedStartDatefeedEndDate: string;
  /** 提供データバージョン */
  feedVersion: string;
};
