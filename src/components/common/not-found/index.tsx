import React from "react";

import { BaseResult } from "../base-result";

export const NotFound: React.FC = () => {
  return <BaseResult status="404" title="404" subTitle="Trang không tồn tại" />;
};
