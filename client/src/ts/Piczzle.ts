import * as util from "../utils/piczzleUtil";
import {
  PiczzleType,
  ImageDimensionType,
  GetImageFractionDimensionType,
  ImageFractionScaleValueType,
  GetImageScaleValueToFitWrapperType,
  ScaleValueType,
  GetConfiguredPuzzleBodyType,
  CreatePuzzlePieceArrType,
  dragDropTargetAttributesType,
  ShufflePuzzlePieceCreationOrderType,
  ShuffledCreationOrderArrType,
  AppendDropTargetToPuzzleBodyType,
  AppendDragTargetToDropTargetType,
} from "../shared/types/types";

function createPiczzle({
  wrapperId = "#wrapper",
  puzzleBodyId = "#puzzle-body",
  gridRows = 3,
  gridColumns = 3,
  gaps = 0.25,
  imageSource = "https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Fhiddenremote.com%2Ffiles%2Fimage-exchange%2F2022%2F01%2Fie_78870.jpeg",
}: PiczzleType) {
  /**
   * Create an instance of a puzzle component
   * @wrapperId - id selector for the puzzle wrapper.
   * @puzzleBodyId - id selector for the puzzle body.
   * @gridRows - number of rows the image is divided into.
   * @gridColumns - number of columns the image is divided into.
   * @gaps - gaps of each puzzle piece in float value relative to root font size.
   * @imageSource - path to the image source.
   */
  // Step 1: Get computed font size
  const rootFontSize = util.getComputedRootFontSize();
  // Step 2: Calculate total gaps of each axis in px
  const styleGap = rootFontSize * gaps;
  const gridGaps = {
    rowTotalGap: gridRows * styleGap,
    columnsTotalGap: gridColumns * styleGap,
  };
  // Step 3: Fetch and await image resource
  const puzzleImage = new Image();
  puzzleImage.setAttribute("crossOrigin", "http:localhost:3000/")
  puzzleImage.setAttribute("src", imageSource);
  puzzleImage.onload = () => {
    // Step 4: Get image dimension
    const imageDimension = getImageDimension(puzzleImage);
    // Step 5: Divide evenly the image dimension according to grid rows and columns
    const imageFractionDimension = getImageFractionDimension({
      imageDimension,
      gridRows,
      gridColumns,
    });
    // Step 6: Configure wrapper max dimension to fit playground element
    configureWrapper(wrapperId); 

    // Step 7: Get the image fractions scale value needed to fit the wrapper
    const fractionScaleValue = getImageScaleValueToFitWrapper({
      wrapperId,
      imageDimension,
      gridGaps,
    });
    // Step 8: Get the puzzle body and configure its grid template
    const puzzleBody = getConfiguredPuzzleBody({
      puzzleBodyId,
      gridRows,
      gridColumns,
      styleGap,
    });
    // Step 9: Create an array of puzzle piece
    const { dragTargetArr, dropTargetArr, creationOrderArr, dropTargetId } =
      createPuzzlePieceArr({
        gridRows,
        gridColumns,
        puzzleImage,
        fractionScaleValue,
        imageFractionDimension,
      });
    // Step 10: Shuffle the creation order array
    const shuffledCreationOrderArr = shufflePuzzlePieceCreationOrder({
      creationOrderArr,
    });
    // Step 11: Append drop targets to the puzzle body
    appendDropTargetToPuzzleBody({ puzzleBody, dropTargetArr });
    // Step 12: Append drag target to drop target elements.
    appendDragTargetToDropTarget({
      shuffledCreationOrderArr,
      dragTargetArr,
      dropTargetId,
    });
  };
}

function getImageDimension(image: HTMLImageElement): ImageDimensionType {
  /**
   * Returns the image natural width and height.
   * @return object;
   */
  const imageDimension: ImageDimensionType = {
    imageWidth: image.naturalWidth,
    imageHeight: image.naturalHeight,
  };

  return imageDimension;
}

function getImageFractionDimension({
  imageDimension,
  gridRows,
  gridColumns,
}: GetImageFractionDimensionType): ImageFractionScaleValueType {
  /**
   * Returns an object that contains the width and height of each image fraction
   * that's been divided evenly according to the gridRows and gridColumns.
   * @imageDimension - an object containing the image natural width and height.
   * @gridRows - number of rows the image is divided into.
   * @gridColumns - number of columns the image is divided into.
   * @return object;
   */
  const { imageWidth, imageHeight } = imageDimension;
  const imageFractionInfo: ImageFractionScaleValueType = {
    imageFractionWidth: imageWidth / gridRows,
    imageFractionHeight: imageHeight / gridColumns,
  };

  return imageFractionInfo;
}

function configureWrapper(wrapperId: string) {
  /**
   * Modifies the wrapper element.
   * @param wrapperId - parent element of puzzle body
   */
  const wrapper = document.querySelector(wrapperId) as HTMLDivElement;
  // Wrapper padding
  const wrapperPadTop = util.getNumFromCssValue(window.getComputedStyle(wrapper).paddingTop);
  const wrapperPadLeft = util.getNumFromCssValue(window.getComputedStyle(wrapper).paddingLeft);
  const wrapperPadBottom = util.getNumFromCssValue(window.getComputedStyle(wrapper).paddingBottom);
  const wrapperPadRight = util.getNumFromCssValue(window.getComputedStyle(wrapper).paddingRight);
  const wrapperPadX = wrapperPadLeft + wrapperPadRight;
  const wrapperPadY = wrapperPadTop + wrapperPadBottom;
  
  const parent = wrapper.parentElement as HTMLDivElement;
  // Parent padding
  const parentPadLeft = util.getNumFromCssValue(window.getComputedStyle(parent).paddingLeft);
  const parentPadBottom = util.getNumFromCssValue(window.getComputedStyle(parent).paddingBottom);
  const parentPadRight = util.getNumFromCssValue(window.getComputedStyle(parent).paddingRight);
  const parentPadX = parentPadLeft + parentPadRight;
  const parentPadY = parentPadBottom;
  // Total dimension reduction due to containers padding
  const totalPaddingBoxWidthReduction = wrapperPadX + parentPadX;
  const totalPaddingBoxHeightReduction = wrapperPadY + parentPadY;
  // Set wrapper max width and height to be the same as its parent 
  const parentWidth = util.getNumFromCssValue(window.getComputedStyle(parent).width);
  const parentHeight = util.getNumFromCssValue(window.getComputedStyle(parent).height);

  wrapper.style.maxWidth = `${util.pxToRem(parentWidth - totalPaddingBoxWidthReduction)}rem`;
  wrapper.style.maxHeight = `${util.pxToRem(parentHeight - totalPaddingBoxHeightReduction)}rem`;
}

function getImageScaleValueToFitWrapper({
  wrapperId,
  imageDimension,
  gridGaps,
}: GetImageScaleValueToFitWrapperType): ScaleValueType {
  /**
   * Returns an object that contains the scaleX and scaleY value
   * that each image fraction needs in order to fit in the wrapper.
   * @wrapperId - id selector of parent element of the puzzle body.
   * @imageDimension - an object containing the image natural width and height.
   * @gridGaps - gaps of each puzzle piece in float relative to root font size.
   * @return object;
   */
  const wrapper = document.querySelector(wrapperId) as HTMLDivElement;
  // Wrapper padding
  const wrapperPadTop = util.getNumFromCssValue(window.getComputedStyle(wrapper).paddingTop);
  const wrapperPadLeft = util.getNumFromCssValue(window.getComputedStyle(wrapper).paddingLeft);
  const wrapperPadBottom = util.getNumFromCssValue(window.getComputedStyle(wrapper).paddingBottom);
  const wrapperPadRight = util.getNumFromCssValue(window.getComputedStyle(wrapper).paddingRight);
  const wrapperPadX = wrapperPadLeft + wrapperPadRight;
  const wrapperPadY = wrapperPadTop + wrapperPadBottom;
  // Total dimension reduction due to containers padding
  const totalPaddingBoxWidthReduction = wrapperPadX ;
  const totalPaddingBoxHeightReduction = wrapperPadY;

  const { imageWidth, imageHeight } = imageDimension;
  const { rowTotalGap, columnsTotalGap } = gridGaps;
  const wrapperComputedStyleWidth = window.getComputedStyle(wrapper).maxWidth;
  const wrapperComputedStyleHeight = window.getComputedStyle(wrapper).maxHeight;
  const wrapperBaseWidth =
    util.getNumFromCssValue(wrapperComputedStyleWidth) - (rowTotalGap + totalPaddingBoxWidthReduction);
  const wrapperBaseHeight =
    util.getNumFromCssValue(wrapperComputedStyleHeight) - (columnsTotalGap + totalPaddingBoxHeightReduction);
  const scaleValue: ScaleValueType = {
    scaleX: wrapperBaseWidth / imageWidth,
    scaleY: wrapperBaseHeight / imageHeight,
  };

  return scaleValue;
}

function getConfiguredPuzzleBody({
  puzzleBodyId,
  gridRows,
  gridColumns,
  styleGap,
}: GetConfiguredPuzzleBodyType): HTMLDivElement {
  /**
   * Return the parent of puzzle pieces and configure its grid style property.
   * @puzzleBodyId - id selector for the parent element of each image fraction container.
   * @gridRows - value for grid-template-rows style property.
   * @gridColumns - value for grid-template-columns style property.
   * @styleGap - value for grid gap.
   * @return object;
   */
  const puzzleBody = document.querySelector(puzzleBodyId) as HTMLDivElement;
  const styleRemGap = util.pxToRem(styleGap);
  puzzleBody.style.gap = `${styleRemGap}rem`;
  puzzleBody.style.gridTemplateRows = `repeat(${gridRows}, 1fr)`;
  puzzleBody.style.gridTemplateColumns = `repeat(${gridColumns}, 1fr)`;

  return puzzleBody;
}

function createPuzzlePieceArr({
  gridRows,
  gridColumns,
  puzzleImage,
  fractionScaleValue,
  imageFractionDimension,
}: CreatePuzzlePieceArrType) {
  /**
   * Returns an object that contains the puzzle and creation order array.
   * @gridRows - number of rows the image is divided into.
   * @gridColumns - number of columns the image is divided into.
   * @image - the image source.
   * @fractionScaleValue - an object that contains the scaleX and scaleY value
   * that each image fraction needs in order to fit in the wrapper.
   * @imageFractionDimension - an object that contains the width and height of each image fraction
   * that's been divided evenly according to the gridRows and gridColumns.
   * @return object;
   */
  const dragTargetId = "pDragTarget",
    dropTargetId = "pDropTarget";
  const dragTargetClass = "dragTarget",
    dropTargetClass = "dropTarget";
  const dragDropTargetAttributes: dragDropTargetAttributesType = {
    dragTargetId: dragTargetId,
    dragTargetClass: dragTargetClass,
    dropTargetId: dropTargetId,
    dropTargetClass: dropTargetClass,
  };
  const dragTargetArr: HTMLImageElement[] = [],
    dropTargetArr: HTMLDivElement[] = [],
    creationOrderArr: string[] = [];
  for (let row = 0; row < gridRows; row++) {
    for (let column = 0; column < gridColumns; column++) {
      const puzzlePiecePosition = [row, column];
      const { dragTarget, dropTarget } = util.createPuzzlePiece({
        puzzleImage,
        puzzlePiecePosition,
        fractionScaleValue,
        imageFractionDimension,
        dragDropTargetAttributes,
      });
      dragTargetArr.push(dragTarget);
      dropTargetArr.push(dropTarget);
      creationOrderArr.push(`${row}${column}`);
    }
  }
  const puzzlePieceArr = {
    dragTargetArr: dragTargetArr,
    dropTargetArr: dropTargetArr,
    creationOrderArr: creationOrderArr,
    dropTargetId: dropTargetId,
  };

  return puzzlePieceArr;
}

function shufflePuzzlePieceCreationOrder({
  creationOrderArr,
  shuffleCount = 2,
}: ShufflePuzzlePieceCreationOrderType): ShuffledCreationOrderArrType {
  /**
   * Returns an array that's been shuffled.
   * @creationOrderArr - an array that contains the order of creation of each drag and drop target.
   * @shuffleCount - indicates the number of times to shuffle the creation order array.
   * @return object;
   */
  const shuffleCreationOrderArr: ShuffledCreationOrderArrType = util.reShuffler(
    { creationOrderArr, shuffleCount }
  );

  return shuffleCreationOrderArr;
}

function appendDropTargetToPuzzleBody({
  puzzleBody,
  dropTargetArr,
}: AppendDropTargetToPuzzleBodyType) {
  /**
   * Appends each drop target element in the puzzle body according to the
   * creation order array.
   * @puzzleBody - parent element of each image fraction container.
   * @dropTargetArr - an array of drop target element.
   * @return object;
   */
  dropTargetArr.map((dropTarget) => {
    puzzleBody.appendChild(dropTarget);
    return undefined;
  });
}

function appendDragTargetToDropTarget({
  shuffledCreationOrderArr,
  dragTargetArr,
  dropTargetId,
}: AppendDragTargetToDropTargetType) {
  /**
   * Appends each drag target element to drop targets according to the
   * shuffled creation order array.
   * @shuffledCreationOrderArr - the shuffled version of the creation order array.
   * @dragTargetArr - an array of drag target element.
   * @dropTargetId - id attribute of every drop target element.
   */
  let dragTargetIdx = 0;
  for (const order of shuffledCreationOrderArr) {
    const dragTarget = dragTargetArr[dragTargetIdx];
    const dropTarget = document.querySelector(`#${dropTargetId}${order}`) as HTMLDivElement;
    util.preventDraggingIfMatch({ dragTarget, dropTarget });
    dropTarget.appendChild(dragTarget);
    dragTargetIdx += 1;
  }
}

export default createPiczzle;
