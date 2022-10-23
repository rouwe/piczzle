import React from "react";
import { To } from "react-router-dom";
import CTA from "./CTA";

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
};

function RouteList({
  routesArr,
  structureClassNames: { ulClassName, liClassName, linkClassName },
}: RouteListType) {
  return (
    <ul className={ulClassName}>
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
