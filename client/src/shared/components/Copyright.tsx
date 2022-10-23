import React from "react";

type CopyrightType = {
  parent: string;
};

function Copyright({ parent }: CopyrightType) {
  return (
    <div className={`${parent}__copyright`}>
      <span className={`${parent}__copyright__text`}>
        &copy; 2022 Piczzle. All rights reserved.
      </span>
    </div>
  );
}

export default Copyright;
