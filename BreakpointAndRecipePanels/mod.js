/*
Thanks to olegbl for the getBaseRect() and panel code
*/

if (config.breakpoint) {
  D2RMM.copyFile("breakpoint\\hd", "hd", true);
  D2RMM.copyFile("breakpoint\\global", "global", true);
  
  const characterStatsPanelHDFilename = "global\\ui\\layouts\\characterstatspanelhd.json";
  const characterStatsPanelHD = D2RMM.readJson(characterStatsPanelHDFilename);
  const baseRect = getBaseRect(characterStatsPanelHDFilename);
  characterStatsPanelHD.children = [
    ...characterStatsPanelHD.children,
    {
      type: "ButtonWidget",
      name: "Breakpoints",
      fields: {
        filename: "PANEL\\Character_Sheet\\AdvancedStatsButton",
        hoveredFrame: 3,
        onClickMessage: "PanelManager:TogglePanel:BreakpointsPanel",
        pressLabelOffset: { x: 0, y: 2 },
        rect: { x: baseRect.width - (1162 - 1108), y: baseRect.height - (1507 - 511) },
        tooltipString: "Breakpoints"
      },
    }
  ];
  D2RMM.writeJson(characterStatsPanelHDFilename, characterStatsPanelHD);
}


if (config.recipeStash || config.recipeCube){
  D2RMM.copyFile("recipe\\hd", "hd", true);
  D2RMM.copyFile("recipe\\global", "global", true);
}


const bankExpansionLayoutHDFilename = "global\\ui\\layouts\\bankexpansionlayouthd.json";
const bankExpansionLayoutHD = D2RMM.readJson(bankExpansionLayoutHDFilename);
const stashBaseRect = getBaseRect(bankExpansionLayoutHDFilename);


if (config.recipeStash) {
  // add recipe panel button to the stash panel
  bankExpansionLayoutHD.children = [
    ...bankExpansionLayoutHD.children,
    {
      type: "ButtonWidget",
      name: "Recipes",
      fields: {
        filename: "PANEL\\Character_Sheet\\AdvancedStatsButton",
        hoveredFrame: 3,
        onClickMessage: "PanelManager:TogglePanel:RecipesPanel",
        pressLabelOffset: { x: 0, y: 2 },
        rect: { x: stashBaseRect.width - (1162 - 1108), y: stashBaseRect.height - (1507 - 711) },
        tooltipString: "Recipes"
      },
    }
  ];
  D2RMM.writeJson(bankExpansionLayoutHDFilename, bankExpansionLayoutHD);
  
  // adjust recipe panel location based on the stash width
  const recipesPanelHDFilename = "global\\ui\\layouts\\recipespanelhd.json";
  const recipesPanelHD = D2RMM.readJson(recipesPanelHDFilename);
  
  recipesPanelHD.fields.rect = { x: stashBaseRect.width + (1396 - 1162), y: -651 };
  
  D2RMM.writeJson(recipesPanelHDFilename, recipesPanelHD);
}


const horadricCubeLayoutHDFilename = "global\\ui\\layouts\\horadriccubelayouthd.json";
const horadricCubeLayoutHD = D2RMM.readJson(horadricCubeLayoutHDFilename);
const cubeBaseRect = getBaseRect(horadricCubeLayoutHDFilename);


if (config.recipeCube) {
  // add recipe panel button to the cube panel
  horadricCubeLayoutHD.children = [
    ...horadricCubeLayoutHD.children,
    {
      type: "ButtonWidget",
      name: "Recipes",
      fields: {
        filename: "PANEL\\Character_Sheet\\AdvancedStatsButton",
        hoveredFrame: 3,
        onClickMessage: "PanelManager:TogglePanel:RecipesPanel",
        pressLabelOffset: { x: 0, y: 2 },
        rect: { x: cubeBaseRect.width - (1162 - 1108), y: cubeBaseRect.height - (1507 - 711) },
        tooltipString: "Recipes"
      },
    }
  ];
  D2RMM.writeJson(horadricCubeLayoutHDFilename, horadricCubeLayoutHD);
  
  // only update recipe panel location here if cube is wider than stash
  if (cubeBaseRect.width > stashBaseRect.width) {
    const recipesPanelHDFilename = "global\\ui\\layouts\\recipespanelhd.json";
    const recipesPanelHD = D2RMM.readJson(recipesPanelHDFilename);
  
    recipesPanelHD.fields.rect = { x: cubeBaseRect.width + (1396 - 1162), y: -651 };
  
    D2RMM.writeJson(recipesPanelHDFilename, recipesPanelHD);
  }
}


function getBaseRect(filename) {
  const file = D2RMM.readJson(filename);
  if (!file.fields || !file.fields.rect) {
    // if rect doesn't exist in this file check the parent file its based on
    if (file.basedOn) {
      // replace name of file with the name of the file its based on and recursively call this function
      const parentFile = "global\\ui\\layouts\\" + file.basedOn;
      return getBaseRect(parentFile);
    }
    // if no rect and it's not based on anything... well, this shouldn't happen
    return { x: 0, y: 0, width: 0, height: 0 };
  }
  if (typeof file.fields.rect !== "string") {
    return file.fields.rect;
  }
  // if rect is a pre-defined string replace the "$" character that the rect variable starts with
  // find the variable in the _profilehd.json
  const rectName = file.fields.rect.replace("$", "");
  const profileHDFilename = "global\\ui\\layouts\\_profilehd.json";
  const profileHD = D2RMM.readJson(profileHDFilename);
  if (!profileHD[rectName]) {
    D2RMM.error("Couldn't find variable value for " + rectName + " used in " + filename + ".");
  }
  return profileHD[rectName];
}
