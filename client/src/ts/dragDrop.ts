function checkIfPuzzleSolved(dragTargetClass: string) {
    /**
     * Returns a boolean value indicating if all puzzle piece is in place.
     * @param dragTargetClass: class selector of of every drag target(puzzle piece) element.
     */
    const dragTargetArr = document.querySelectorAll(dragTargetClass);
    const isSolved = [...dragTargetArr].every((dragTarget) => {
        const isDraggable = (dragTarget as HTMLDivElement).draggable;
        
        return isDraggable !== true;
    });
    return isSolved;
}

function dragEnterHandler(e: DragEvent) {
    /**
     * Handler when the dragged element enters the drop target.
     * @param e: event instance.
     */
    if (!e.dataTransfer) throw new Error("Drag event handler is null");
    e.dataTransfer.dropEffect = "move";
    const dropTarget = e.target as HTMLDivElement;
    if (dropTarget.draggable) {
        dropTarget.classList.toggle('drop-over-style');
    }
}

function dragOverHandler(e: DragEvent) {
    /**
     * Handler when the dragged element is over the drop target.
     * @param e: event instance.
     */
    e.preventDefault();
}

function dragLeaveHandler(e: DragEvent) {
    /**
     * Handler when the dragged element leaves the drop target.
     * @param e: event instance.
     */
    const dropTarget = e.target as HTMLDivElement;
    // reset drop over style of drop target
    dropTarget.classList.remove('drop-over-style');
}

function dropHandler(e: DragEvent) {
    /**
     * Handler when the dragged element is dropped on the drop target.
     * @param e: event instance.
     */
    if (!e.dataTransfer) throw new Error("Drag event handler issue");
    e.preventDefault();
    const draggedData = e.dataTransfer.getData('text');
    const dropTarget = e.target as HTMLDivElement;
    const dropTargetParent = dropTarget.parentElement as HTMLDivElement;
    const dragTarget = document.querySelector(`#${draggedData}`) as HTMLImageElement;
    const dragTargetParent = dragTarget.parentElement as HTMLDivElement;

    const getGridCoordinate = (id: string) => {
        return id.slice(-2);
    }
    // Do nothing if drag is dropped on the same place
    if (dragTargetParent.id !== dropTargetParent?.id) {
        if (dragTarget.draggable && dropTarget.draggable) {
        const dragTargetCoordinate = getGridCoordinate(dragTarget.id);
        const dropTargetCoordinate = getGridCoordinate(dropTarget.id);
        const dragTargetParentCoordinate = getGridCoordinate(dragTargetParent.id);
        const dropTargetParentCoordinate = getGridCoordinate(dropTargetParent.id);
        // Prevent dragging when found a single match or cross match
        if (dragTargetCoordinate === dropTargetParentCoordinate) {
            dragTarget.setAttribute('draggable', "false");
            dragTarget.classList.toggle('match-found');
        }
        if (dropTargetCoordinate === dragTargetParentCoordinate) {
            dropTarget.setAttribute('draggable', "false");
            dropTarget.classList.toggle('match-found');
        }
        // drag target to drop parent
        dropTargetParent.appendChild(dragTarget);
        // drop target to drag parent
        dragTargetParent.appendChild(dropTarget);
        // reset class list of drop target
        dropTarget.classList.remove('drop-over-style')
        e.dataTransfer.clearData();
        }
    }
}


function dragStartHandler(e: DragEvent) {
    /**
     * Handler when the user starts to drag an element
     * @param e: event instance.
     */
    if (!e.dataTransfer) throw new Error("Drag event handler issue");
    const dragTarget = e.target as HTMLImageElement;
    const dragTargetId = dragTarget.id;
    e.dataTransfer.setData("text", dragTargetId);
    e.dataTransfer.effectAllowed = "linkMove";
}

function dragHandler(e: DragEvent) {
    /**
     * Handler when the user is currently dragging an element.
     */
    const dragTarget = e.target;
}

function dragEndHandler(e: DragEvent) {
    /**
     * Handler when the user has finished dragging the element.
     * @param e: event instance.
     */
    const dragTarget = e.target as HTMLImageElement;
    const dragTargetClass = '.dragTarget';
    const isSolved = checkIfPuzzleSolved(dragTargetClass);
    if (isSolved) {
        // Wait for 500ms then congratulate
        setTimeout(() => {
            alert("Puzzle Solved!!!! Congrats");
        }, 400)
    }
    // reset class list of drag target
    dragTarget.classList.remove('drop-over-style')
}


function addDragTargetEvents(dragTarget: HTMLImageElement) {
    /**
     * Add event listener to draggable target.
     * @param dragTarget: draggable target of type image element.
     */
    dragTarget.addEventListener('dragstart', dragStartHandler);
    dragTarget.addEventListener('drag', dragHandler);
    dragTarget.addEventListener('dragend', dragEndHandler);
}

function addDropTargetEvents(dropTarget: HTMLDivElement) {
    /**
     * Add event listener to drop target.
     * @param dropTarget: drop target of type div element.
     */
    dropTarget.addEventListener('dragover', dragOverHandler);
    dropTarget.addEventListener('dragenter', dragEnterHandler);
    dropTarget.addEventListener('dragleave', dragLeaveHandler);
    dropTarget.addEventListener('drop', dropHandler)
}

const dragDrop = {
    addDragTargetEvents,
    addDropTargetEvents
}

export default dragDrop;