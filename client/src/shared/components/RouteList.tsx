import React, { useEffect } from "react";
import { To } from "react-router-dom";
import CTA from "./CTA";
import { setHeaderActiveLink } from "../../ts/interaction";

type RouteListRouteType = {
  id: string;
  page: string;
  path: To;
};

type RouteListStructureClassNamesType = {
  ulClassName: string;
  liClassName: string;
  linkClassName: string;
};

type RouteListType = {
  routesArr: RouteListRouteType[];
  structureClassNames: RouteListStructureClassNamesType;
  styleSnippet?: React.CSSProperties;
};

function RouteList({
  routesArr,
  structureClassNames: { ulClassName, liClassName, linkClassName },
  styleSnippet,
}: RouteListType) {
  useEffect(() => {
    // Set active header link on initial render
    setHeaderActiveLink();
  });

  return (
    <ul
      onClick={setHeaderActiveLink}
      style={styleSnippet ? styleSnippet : {}}
      className={ulClassName}
    >
      {routesArr.map(({ id, page, path }, idx) => {
        return (
          <li className={liClassName} key={id + idx}>
            <CTA
              type="route"
              innerText={page}
              className={linkClassName}
              linkTo={path}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default RouteList;
