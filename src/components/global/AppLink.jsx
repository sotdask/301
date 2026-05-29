import React from "react";
import { Link } from "react-router-dom";

export function isInternalPath(path) {
  return typeof path === "string" && path.startsWith("/") && !path.startsWith("//");
}

function AppLink({ to, href, children, ...rest }) {
  const target = to ?? href;

  if (isInternalPath(target)) {
    return (
      <Link to={target} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <a href={target ?? "#"} {...rest}>
      {children}
    </a>
  );
}

export default AppLink;
