export enum ResponseCode {
    SUCCESS = 200,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    VALIDATION_ERROR = 422,
    SERVER_ERROR = 500,
}

export enum SortOrder {
    DESC = "DESC",
    ASC = "ASC",
}

export const DATE_FORMAT = {
    SHORT_MONTH_YEAR: "MM/yy",
    BASIC_DATE: "DD-MM-YYYY",
    BASIC_DATE_2: "YYYY/MM/DD",
    FULL_DATE_TIME: "YYYY/MM/DD HH:mm",
    ISO_DATE: "YYYY-MM-DD",
    FULL_DATE_WITH_TIME: "HH:mm DD MMM YYYY",
    HOURS_MINUTES: "HH:mm",
    LONG_MONTH: "DD MMMM YYYY",
    LONG_MONTH_VI: "DD [Tháng] M YYYY",
    MINUTES_SECONDS: "mm:ss",
    TIME_DATE_PART: "hh:mm A DD/MM/YYYY",
    DATE_TEXT_MONTH: "DD MMM YYYY",
    DD_MM_YYYY: "DD/MM/YYYY",
    ISO_WITH_TIMEZONE: "YYYY-MM-DDTHH:mm:ss.SSSZ",
} as const;

export enum SORT_TYPE {
    DESC = "desc",
    ASC = "asc",
}

export enum LOCALE {
    EN = "en",
    VI = "vi",
}
