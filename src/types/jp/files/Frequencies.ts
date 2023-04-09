/**
 * 運行間隔情報(frequencies.txt)
 */
export type Frequencies = Readonly<{
  /** 便ID */
  tripId: string;
  /** 開始時刻 */
  startTime: string;
  /** 終了時刻 */
  endTime: string;
  /** 運行間隔 */
  headwaySecs: number;
  /**
   * 案内精度
   *
   * @remarks
   * 0 - 時刻を案内しない /
   * 1 - 時刻を案内する
   */
  exactTimes?: 0 | 1;
}>;
