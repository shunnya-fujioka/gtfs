import { Agency, AgencyJp } from "./files/Agency";
import { Calendar, CalendarDates } from "./files/Calender";
import { FareAttributes, FareRules } from "./files/Fare";
import { FeedInfo } from "./files/FeedInfo";
import { Frequencies } from "./files/Frequencies";
import { OfficeJp } from "./files/Office";
import { Routes, RoutesJp } from "./files/Routes";
import { Shapes } from "./files/Shapes";
import { StopTimes } from "./files/StopTimes";
import { Transfers } from "./files/Transfers";
import { Translations } from "./files/Translations";

export { Agency, AgencyJp } from "./files/Agency";
export { Calendar, CalendarDates } from "./files/Calender";
export { FareAttributes, FareRules } from "./files/Fare";
export { FeedInfo } from "./files/FeedInfo";
export { Frequencies } from "./files/Frequencies";
export { OfficeJp } from "./files/Office";
export { Routes, RoutesJp } from "./files/Routes";
export { Shapes } from "./files/Shapes";
export { StopTimes } from "./files/StopTimes";
export { Transfers } from "./files/Transfers";
export { Translations } from "./files/Translations";

/**
 * @link https://www.gtfs.jp/developpers-guide/format-reference.html#overview
 */
export type GTFS_JP = {
  agency: Agency;
  agencyJp?: AgencyJp;
  stops: Stops;
  routes: Routes;
  routesJp?: RoutesJp;
  trips: Trips;
  officeJp?: OfficeJp;
  stopTimes: StopTimes;
  calendar: Calendar;
  calendarDates?: CalendarDates;
  fareAttributes: FareAttributes;
  fareRules: FareRules;
  shapes?: Shapes;
  frequencies?: Frequencies;
  transfers?: Transfers;
  feedInfo?: FeedInfo;
  translations?: Translations;
};
