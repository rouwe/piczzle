import path from "path";

// User authentication
export type UserAuthenticationType = { loggedIn: boolean };

// Piczzle
export type PiczzleType = {
    wrapperId?: string;
    puzzleBodyId?: string;
    gridRows?: number;
    gridColumns?: number;
    gaps?: number;
    imageSource?: path;
}

export type ImageDimensionType = {
    imageWidth: number;
    imageHeight: number;
}

export type GetImageFractionDimensionType = {
    imageDimension: ImageDimension;
    gridRows: number;
    gridColumns: number;
}

export type ImageFractionScaleValueType = {
    imageFractionWidth: number;
    imageFractionHeight: number;
}

export type GetImageScaleValueToFitWrapperType = {
    wrapperId: string;
    imageDimension: ImageDimensionType;
    gridGaps: GridGapsType;
}

export type ScaleValueType = {
    scaleX: number;
    scaleY: number;
}

export type GridGapsType = {
    rowTotalGap: number;
    columnsTotalGap: number;
}

export type GetConfiguredPuzzleBodyType = {
    puzzleBodyId: string;
    gridRows: number;
    gridColumns: number;
    styleGap: number;
}

export type CreatePuzzlePieceArrType = {
    gridRows: number;
    gridColumns: number;
    puzzleImage: HTMLImageElement;
    fractionScaleValue: ScaleValueType;
    imageFractionDimension: ImageFractionScaleValueType;
}

export type dragDropTargetAttributesType = {
    dragTargetId: string;
    dragTargetClass: string;
    dropTargetId: string;
    dropTargetClass: string;
}

export type ShufflePuzzlePieceCreationOrderType = {
    creationOrderArr: string[];
    shuffleCount?: number;
}

export type ShuffledCreationOrderArrType = string[];

export type AppendDropTargetToPuzzleBodyType = {
    puzzleBody: HTMLDivElement;
    dropTargetArr: HTMLDivElement[];
}

export type AppendDragTargetToDropTargetType = {
    shuffledCreationOrderArr: ShuffledCreationOrderArrType;
    dragTargetArr: HTMLImageElement[];
    dropTargetId: string; 
}
// Piczzle Utility

export type CreatePuzzlePieceType = {
    puzzleImage: HTMLImageElement;
    puzzlePiecePosition: number[];
    fractionScaleValue: ScaleValueType;
    imageFractionDimension: ImageFractionScaleValueType;
    dragDropTargetAttributes: dragDropTargetAttributesType;
}

export type NewPuzzlePieceCanvasType = {
    fractionScaleValue: ScaleValueType;
    imageFractionDimension: ImageFractionScaleValueType;
}

export type CreateDragTargetType = {
    canvas: HTMLCanvasElement;
    dragTargetId?: string;
    dragTargetClass?: string;
    puzzlePiecePosition: number[]; 
}

export type CreateDropTargetType = {
    dropTargetId?: string;
    dropTargetClass: string;
    puzzlePiecePosition: number[];
}

export type ReShuffler = {
    creationOrderArr: string[];
    shuffleCount: number;
}

export type PreventDraggingIfMatch = {
    dragTarget: HTMLImageElement;
    dropTarget: HTMLDivElement;
}