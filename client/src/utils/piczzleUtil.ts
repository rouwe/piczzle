import dragDrop from "../ts/dragDrop";
import {
  CreatePuzzlePieceType,
  NewPuzzlePieceCanvasType,
  CreateDragTargetType,
  CreateDropTargetType,
  ReShuffler,
  PreventDraggingIfMatch,
} from "../shared/types/types";

export function getNumFromCssValue(styleValue: string): number {
  /**
   * Returns the extracted number from style rule format string.
   * @param styleValue: the style value to get the number from.
   * @return number:
   */
  const regex = /\d*(.?)\d+/g;
  const getValue = styleValue.match(regex) as RegExpMatchArray;
  return Number(getValue[0]);
}

export function getComputedRootFontSize() {
  /**
   * Returns the computed root font size in number format.
   * @return number:
   */
  const root = document.querySelector("html") as HTMLHtmlElement;
  const fontSize = window.getComputedStyle(root).fontSize;
  const numericalSize = getNumFromCssValue(fontSize);

  return numericalSize;
}

export function pxToRem(pxValue: number) {
  /**
   * Converts px or number unit to rem.
   * @pxValue - the value to be converted to rem.
   * @return number;
   */
  const rootFontSize = getComputedRootFontSize();
  const remValue = pxValue / rootFontSize;

  return remValue;
}

export function createPuzzlePiece({
  puzzleImage,
  puzzlePiecePosition,
  fractionScaleValue,
  imageFractionDimension,
  dragDropTargetAttributes,
}: CreatePuzzlePieceType) {
  /**
   * Returns an object that contains the drag target and drop target.
   * @image - the image source.
   * @puzzlePiecePosition - the unique position of each puzzle piece inside a grid.
   * @fractionScaleValue - an object that contains the scaleX and scaleY value
   * that each image fraction needs in order to fit in the wrapper.
   * @imageFractionDimension - an object that contains the width and height of each image fraction
   * that's been divided evenly according to the gridRows and gridColumns.
   * @dragDropTargetAttributes - id and class attribute of drag and drop targets.
   * @return object;
   */
  const [rowPosition, columnPosition] = puzzlePiecePosition;
  const { scaleX, scaleY } = fractionScaleValue;
  const { imageFractionWidth, imageFractionHeight } = imageFractionDimension;
  const { dragTargetId, dragTargetClass, dropTargetId, dropTargetClass } =
    dragDropTargetAttributes;
  const sourceXPosition = imageFractionWidth * columnPosition;
  const sourceYPosition = imageFractionHeight * rowPosition;
  const destinationPosition = 0;
  const canvas = newPuzzlePieceCanvas({
    fractionScaleValue,
    imageFractionDimension,
  });
  const ctx = canvas.getContext("2d");

  if (ctx) {
    ctx.scale(scaleX, scaleY);
    ctx.drawImage(
      puzzleImage,
      sourceXPosition,
      sourceYPosition,
      imageFractionWidth,
      imageFractionHeight,
      destinationPosition,
      destinationPosition,
      imageFractionWidth,
      imageFractionHeight
    );
  }
  const dragTarget = createDragTarget({
    canvas,
    dragTargetId,
    dragTargetClass,
    puzzlePiecePosition,
  });
  /* ------->> Add event listener here or in component if possible in react <<------- */
  const dropTarget = createDropTarget({
    dropTargetId,
    dropTargetClass,
    puzzlePiecePosition,
  });
  /* ------->> Add event listener here or in component if possible in react <<------- */
  const puzzlePiece = {
    dragTarget: dragTarget,
    dropTarget: dropTarget,
  };

  return puzzlePiece;
}

export function newPuzzlePieceCanvas({
  fractionScaleValue,
  imageFractionDimension,
}: NewPuzzlePieceCanvasType) {
  /**
   * Returns a canvas element to be used as destination of the puzzle piece.
   * @fractionScaleValue - an object that contains the scaleX and scaleY value
   * that each image fraction needs in order to fit in the wrapper.
   * @imageFractionDimension - an object that contains the width and height of each image fraction
   * that's been divided evenly according to the gridRows and gridColumns.
   * @return object:
   */
  const { scaleX, scaleY } = fractionScaleValue;
  const { imageFractionWidth, imageFractionHeight } = imageFractionDimension;
  const canvas = document.createElement("canvas");
  canvas.width = imageFractionWidth * scaleX;
  canvas.height = imageFractionHeight * scaleY;

  return canvas;
}

export function createDragTarget({
  canvas,
  dragTargetId = "pDragTarget",
  dragTargetClass = "dragTarget",
  puzzlePiecePosition,
}: CreateDragTargetType) {
  /**
   * Returns an image element that has the source of the canvas data.
   * @canvas - a canvas element that has been modified by the 2dcontext.
   * @dragTargetId - a string that will be used as a part of the drag target id attribute.
   * @dragTagetClass - the class attribute for the drag target.
   * @puzzlePiecePosition - the unique position of each puzzle piece inside a grid.
   * @return object;
   */
  const [rowPosition, columnPosition] = puzzlePiecePosition;
  const dragTarget = new Image();
  dragTarget.setAttribute(
    "id",
    `${dragTargetId}${rowPosition}${columnPosition}`
  );
  dragTarget.setAttribute("class", `${dragTargetClass}`);
  dragTarget.src = canvas.toDataURL();
  dragDrop.addDragTargetEvents(dragTarget);

  return dragTarget;
}

export function createDropTarget({
  dropTargetId = "pDropTarget",
  dropTargetClass = "dropTarget",
  puzzlePiecePosition,
}: CreateDropTargetType) {
  /**
   * Returns a div element that will act as the drop point for drag targets.
   * @dropTargetId - a string that will be used as a part of the drag target id attribute.
   * @dropTargetClass - the class attribute for the drag target.
   * @puzzlePiecePosition - the unique position of each puzzle piece inside a grid.
   * @return object;
   */
  const [rowPosition, columnPosition] = puzzlePiecePosition;
  const dropTarget = document.createElement("div");
  dropTarget.setAttribute(
    "id",
    `${dropTargetId}${rowPosition}${columnPosition}`
  );
  dropTarget.setAttribute("class", `${dropTargetClass}`);
  dragDrop.addDropTargetEvents(dropTarget);

  return dropTarget;
}

export function creationOrderShuffler({
  creationOrderArr,
}: {
  creationOrderArr: string[];
}) {
  /**
   * Returns an array that's been shuffled once.
   * @creationOrderArr - array to be shuffled randomnly.
   * @return object;
   */
  const shuffledCreationOrderArr = [];
  for (const puzzlePieceCoordinate of creationOrderArr) {
    const randomNum = Math.random();
    if (randomNum >= 0.5) {
      shuffledCreationOrderArr.push(puzzlePieceCoordinate);
    } else {
      shuffledCreationOrderArr.unshift(puzzlePieceCoordinate);
    }
  }

  return shuffledCreationOrderArr;
}

export function reShuffler({
  creationOrderArr,
  shuffleCount,
}: ReShuffler): string[] {
  /**
   * Return an array that's been shuffled multiple times.
   * @creationOrderArr - creation order array to be shuffled randomnly.
   * @shuffleCount - number of times to shuffle the array
   * @return object;
   */

  if (shuffleCount === 0) {
    return creationOrderArr;
  } else {
    creationOrderArr = creationOrderShuffler({ creationOrderArr });
    shuffleCount = shuffleCount - 1;
    return reShuffler({ creationOrderArr, shuffleCount });
  }
}

export function preventDraggingIfMatch({
  dragTarget,
  dropTarget,
}: PreventDraggingIfMatch) {
  /**
   * Prevent further dragging of drag target element if already in the
   * correct drop target.
   * @dragTarget - the draggable target element.
   * @dropTarget - the droppable element of drag target element.
   */
  const dragTargetCoordinates = dragTarget.id.slice(-2);
  const dropTargetCoordinates = dropTarget.id.slice(-2);
  if (dragTargetCoordinates === dropTargetCoordinates) {
    dragTarget.setAttribute("draggable", "false");
    dragTarget.classList.toggle("match-found");
  }
}
