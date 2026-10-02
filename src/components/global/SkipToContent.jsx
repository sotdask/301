import React from "react";
import { useTranslation } from "react-i18next";

function SkipToContent() {
  const { t } = useTranslation("common");

  return (
    <a href="#main-content" className="skip-link">
      {t("a11y.skipToContent")}
    </a>
  );
}

export default SkipToContent;
