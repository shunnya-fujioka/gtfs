/**
 * 事業者情報(agency.txt)
 */
export type Agency = {
  /** 事業者ID */
  agencyId: string;
  /** 事業者名称 */
  agencyName: string;
  /** 事業者URL */
  agencyUrl: string;
  /** タイムゾーン */
  agencyTimezone: "Asia/Tokyo";
  /** 言語 */
  agencyLang: "ja";
  /** 電話番号 */
  agencyPhone?: string;
  /** オンライン購入URL */
  agencyFareUrl?: string;
  /** 事業者Eメール */
  agencyEmail?: string;
};

/**
 * 事業者追加情報(agency_jp.txt)
 */
export type AgencyJp = {
  /** 事業者ID */
  agencyId: string;
  /** 事業者正式名称 */
  agencyOfficialName?: string;
  /** 事業者郵便番号 */
  agencyZipNumber?: string & { length: 7 };
  /** 事業者住所 */
  agencyAddress?: string;
  /** 代表者肩書 */
  agencyPresidentPos?: string;
  /** 代表者氏名 */
  agencyPresidentName?: string;
};
