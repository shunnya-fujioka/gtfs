/**
 * 経路情報(routes.txt)
 */
export type Routes = Readonly<{
  /** 経路ID */
  routeId: string;
  /** 事業者ID */
  agencyId: string;
  /** 経路略称 */
  routeShortName: string;
  /** 経路名 */
  routeLongName: string;
  /** 経路情報 */
  routeDesc?: string;
  /** 経路タイプ */
  routeType: 3;
  /** 経路URL */
  routeUrl?: string;
  /** 経路色 */
  routeColor?: string;
  /** 経路文字色 */
  routeTextColor?: string;
  /** 路線ID */
  jpParentRouteId?: string;
}>;

/**
 * 経路追加情報(routes_jp.txt)
 */
export type RoutesJp = Readonly<{
  /** 経路ID */
  routeId: string;
  /** ダイヤ改正日 */
  routeUpdateDate?: string;
  /** 起点 */
  originStop?: string;
  /** 経過地 */
  viaStop?: string;
  /** 終点 */
  destinationStop?: string;
}>;
