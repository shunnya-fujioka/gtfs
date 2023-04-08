/**
 * 営業所情報(office_jp.txt)
 */
export type OfficeJp = {
  /** 営業所ID */
  officeId: string;
  /** 営業所名 */
  officeName: string;
  /** 営業所URL */
  officeUrl?: string;
  /** 営業所電話番号 */
  officePhone?: string;
};
