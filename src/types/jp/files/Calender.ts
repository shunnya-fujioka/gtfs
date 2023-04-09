/**
 * 運行区分情報(calendar.txt)
 */
export type Calendar = Readonly<{
  /** 運行日ID */
  serviceId: string;
  /**
   * 月曜日
   *
   * @remarks
   * 0 - 非運行 /
   * 1 - 運行
   */
  monday: 0 | 1;
  /**
   * 火曜日
   *
   * @remarks
   * 0 - 非運行 /
   * 1 - 運行
   */
  tuesday: 0 | 1;
  /**
   * 水曜日
   *
   * @remarks
   * 0 - 非運行 /
   * 1 - 運行
   */
  wednesday: 0 | 1;
  /**
   * 木曜日
   *
   * @remarks
   * 0 - 非運行 /
   * 1 - 運行
   */
  thursday: 0 | 1;
  /**
   * 金曜日
   *
   * @remarks
   * 0 - 非運行 /
   * 1 - 運行
   */
  friday: 0 | 1;
  /**
   * 土曜日
   *
   * @remarks
   * 0 - 非運行 /
   * 1 - 運行
   */
  saturday: 0 | 1;
  /**
   * 日曜日
   *
   * @remarks
   * 0 - 非運行 /
   * 1 - 運行
   */
  sunday: 0 | 1;
  /** サービス開始日 */
  startDate: string;
  /** サービス終了日 */
  endDate: string;
}>;

/**
 * 運行日情報(calendar_dates.txt)
 */
export type CalendarDates = Readonly<{
  /** サービスID */
  serviceId: string;
  /** 日付 */
  date: string;
  /**
   * 利用タイプ
   *
   * @remarks
   * 1 - 運行区分適用 /
   * 2 - 運行区分非適用
   */
  exceptionType: 1 | 2;
}>;
