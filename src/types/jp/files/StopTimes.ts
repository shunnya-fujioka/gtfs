/**
 * 通過時刻情報(stop_times.txt)
 */
export type StopTimes = {
  /** 便ID */
  tripId: string;
  /** 到着時刻 */
  arrivalTime: string;
  /** 出発時刻 */
  departureTime: string;
  /** 標柱ID */
  stopId: string;
  /** 通過順位 */
  stopSequence: number;
  /** 停留所行先 */
  stopHeadsign?: string;
  /**
   * 乗車区分
   *
   * @remarks
   * 0 - 通常の乗車地 /
   * 1 - 乗車不可能 /
   * 2 - 交通機関に乗車予約の電話が必要 /
   * 3 - 運転手への事前連絡が必要
   */
  pickupType?: 0 | 1 | 2 | 3;
  /**
   * 降車区分
   *
   * @remarks
   * 0 - 通常の降車地（ブザーを押して申告する一般的な停留所を含む） /
   * 1 - 乗車不可能 /
   * 2 - 交通機関に乗車予約の電話が必要 /
   * 3 - 乗車時に運転手への事前連絡が必要
   */
  dropOffType?: 0 | 1 | 2 | 3;
  /** 通算距離 */
  shapeDistTraveled?: number;
  /** 発着時間精度 */
  timePoint?: null;
};
