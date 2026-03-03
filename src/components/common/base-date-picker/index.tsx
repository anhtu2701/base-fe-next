import { DatePickerProps } from "antd";

import * as S from "./index.styles";

export type BaseDatePickerProps = DatePickerProps;

export const BaseDatePicker = S.DatePicker as any;

BaseDatePicker.RangePicker = S.RangePicker;
BaseDatePicker.TimePicker = S.TimePicker;
