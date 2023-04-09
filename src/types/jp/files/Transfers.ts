/**
 * 乗継情報(transfers.txt)
 */
export type Transfers = Readonly<{
  /** 乗継元標柱ID */
  fromStopId: string;
  /** 乗継先標柱ID */
  toStopId: string;
  /**
   * 乗継タイプ
   *
   * @remarks
   * 0 - 2 つのルート間の推奨乗継地点 /
   * 1 - 2 つのルート間の時間が考慮された乗継地点 /
   * 2 - 乗継には、最低限の乗継時間が必要 /
   * 3 - ルート間の乗り継ぎが不可能
   */
  transferType: 0 | 1 | 2 | 3;
  /** 乗継時間 */
  minTransferTime: number;
}>;
