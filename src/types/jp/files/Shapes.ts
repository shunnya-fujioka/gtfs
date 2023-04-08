/**
 * 描画情報(shapes.txt)
 */
export type Shapes = {
  /** 描画ID */
  shapeId: string;
  /** 描画緯度 */
  shapePtLat: string;
  /** 描画経度 */
  shapePtLon: string;
  /** 描画順序 */
  shapePtSequence: number;
  /** 描画距離 */
  shapeDistTraveleded: null;
};
