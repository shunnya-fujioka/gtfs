/**
 * 便情報(trips.txt)
 */
type Trips = Readonly<{
  /** 経路ID */
  routeId: string;
  /** 運行日ID */
  serviceId: string;
  /** 便ID */
  tripId: string;
  /** 便行先 */
  tripHeadsign?: string;
  /** 便名称 */
  tripShortName?: string;
  /**
   * 上下区分
   *
   * @remarks
   * 0 - 復路 /
   * 1 - 往路
   */
  directionId?: 0 | 1;
  /** 便結合区分 */
  blockId?: string;
  /** 描画ID */
  shapeId?: string;
  /**
   * 車いす利用区分
   *
   * @remarks
   * 0 - 車いすによる乗車可否の情報なし /
   * 1 - 少なくとも1台の車いすによる乗車可能 /
   * 2 - 車いすによる乗車不可
   */
  wheelchairAccessible?: 0 | 1 | 2;
  /**
   * 自転車持込区分
   *
   * @remarks
   * 0 - 自転車の持込可否の情報なし /
   * 1 - 少なくとも1台の自転車の持込可能 /
   * 2 - 自転車の持込不可
   */
  bikesAllowed?: 0 | 1 | 2;
  /** 便情報 */
  jpTripDesc?: string;
  /** 便記号 */
  jpTripDescSymbol?: string;
  /** 営業所ID */
  jpOfficeId?: string;
}>;
