import { icons } from "@iconify-json/logos";
import { getIconData, iconToSVG, iconToHTML, replaceIDs } from "@iconify/utils";

export const getLogoSvg = (iconName: string) => {
  const iconData = getIconData(icons, iconName);
  if (!iconData) {
    throw new Error(`Icon "${iconName}" is missing`);
  }

  const renderData = iconToSVG(iconData, {
    height: "auto",
  });

  const svg = iconToHTML(replaceIDs(renderData.body), renderData.attributes);

  return svg;
};
