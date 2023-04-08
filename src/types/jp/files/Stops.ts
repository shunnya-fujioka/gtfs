/**
 * 停留所・標柱情報(stops.txt)
 */
type Stops = {
  /** 停留所・標柱ID */
  stopId: string;
  /** 停留所・標柱番号 */
  stopCode?: string;
  /** 停留所・標柱名称 */
  stopName: string;
  /** 停留所・標柱付加情報 */
  stopDesc?: string;
  /** 緯度 */
  stopLat: string;
  /** 経度 */
  stopLon: string;
  /** 運賃エリアID */
  zoneId?: string;
  /** 停留所・標柱URL */
  stopUrl?: string;
  /**
   * 停留所・標柱区分
   *
   * @remarks
   * 0 - 標柱 /
   * 1 - 停留所
   */
  locationType?: 0 | 1;
  /** 親駅情報 */
  parentStation?: string;
  /** タイムゾーン */
  stopTimezone?: null;
  /** 車椅子情報 */
  wheelchairBoarding?: string;
  /** のりば情報 */
  platformCode?: string;
};
