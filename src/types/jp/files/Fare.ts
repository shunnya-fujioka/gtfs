/**
 * 運賃属性情報(fare_attributes.txt)
 */
export type FareAttributes = Readonly<{
  /** 運賃ID */
  fareId: string;
  /** 運賃 */
  price: number;
  /** 通貨 */
  currencyType: "JPY";
  /**
   * 支払いタイミング
   *
   * @remarks
   * 0 - 乗車後に支払う /
   * 1 - 乗車前に支払う
   */
  paymentMethod: 0 | 1;
  /**
   * 乗換
   *
   * @remarks
   * 0 - この料金で乗り換えることはできません /
   * 1 - 1 度の乗り換えが可能 /
   * 2 - 2 度の乗り換えが可能 /
   * undefined - 乗り換え回数に制限がなし
   */
  transfers: 0 | 1 | 2 | undefined;
  /** 乗換有効期限 */
  transferDuration?: number;
}>;

/**
 * 運賃定義情報(fare_rules.txt)
 */
export type FareRules = Readonly<{
  /** 運賃ID */
  fareId: string;
  /** 経路ID */
  routeId?: string;
  /** 乗車地ゾーン */
  originId?: string;
  /** 降車地ゾーン */
  destinationId?: string;
  /** 通過ゾーン */
  containsId?: undefined;
}>;
