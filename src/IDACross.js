
// going to pass in cube.getSides from the solver
export function iterativeDeepeningAStar(cube, depthLimit, heuristicFunction = whiteCrossHeuristic) {
    for (let depth = 1; depth <= depthLimit; depth++) {
        const result = depthLimitedSearch(cube, depth, heuristicFunction);
        if (result !== null) {
            return result;
        }
    }
    return null;  // No solution found within the depth limit
}

function depthLimitedSearch(cube, depth, heuristicFunction) {
    if (depth === 0) {
        if (isSolved(cube)) {  // Implement this function to check if the white cross is solved
            console.log(cube);
            return [];  // Return an empty array to represent the solved state
        } else {
            return null;
        }
    }

    for (const move of possibleMoves(cube)) {
        // Apply the move to a copy of the cube
        const newCube = applyMove(cube, move);

        // Calculate the cost to reach the goal state using the heuristic function
        const cost = depth + heuristicFunction(newCube);

        const result = depthLimitedSearch(newCube, depth - 1, heuristicFunction);
        if (result !== null) {
            return [move, ...result];  // Found a solution, so add this move to the array
        }
    }

    return null;  // No solution found at this depth
}








class Node {
    constructor(state, parent, action, cost, heuristic) {
        this.state = state;          // The current state
        this.parent = parent;        // Reference to the parent node
        this.action = action;        // Action that led to this state
        this.cost = cost;            // Cost from the initial state to this node
        this.heuristic = heuristic;  // Heuristic estimate of cost to reach the goal
        this.totalCost = cost + heuristic;  // f(n) = g(n) + h(n)
    }
}

export function idaStar(initialState, isGoalState = isSolved, actions = possibleMoves, transition = applyMove, heuristic = whiteCrossHeuristic) {
    let threshold = heuristic(initialState);
    let solution = [];
    while (true) {
        const result = search(initialState, isGoalState, actions, transition, heuristic, 0, threshold);

        if (result === "FOUND") {
            return threshold; // Solution found
        } else if (result === Number.POSITIVE_INFINITY) {
            return null; // No solution
        }

        threshold = result;
    }
}

function search(state, isGoalState, actions, transition, heuristic, cost, threshold) {
    const estimatedCost = cost + heuristic(state);

    if (estimatedCost > threshold) {
        return estimatedCost;
    }

    if (isGoalState(state)) {
        return "FOUND";
    }

    let minCost = Number.POSITIVE_INFINITY;

    for (const action of actions(state)) {
        const nextState = transition(state, action);
        const result = search(nextState, isGoalState, actions, transition, heuristic, cost + 1, threshold);

        if (result === "FOUND") {
            return "FOUND";
        }

        if (result < minCost) {
            minCost = result;
        }
    }

    return minCost;
}






















function isSolved(cube) {
    // Define your goal state check for the white cross here
    // Return true if the white cross is solved, false otherwise
    let down = cube.get("down");
    let front = cube.get("front");
    let right = cube.get("right");
    let back = cube.get("back");
    let left = cube.get("left");
    return down[1] === down[4] && down[3] === down[4] && down[5] === down[4]
        && down[7] === down[4] && front[4] === front[7] && right[4] === right[7]
        && back[4] === back[7] && left[7] === left[4];
}

function possibleMoves(cube) {
    // Generate all possible moves based on your cube notation
    // Return an array of possible moves

    let move = cube.get("previous");
    let moveList;
    switch (move) {
        case "F ":
                moveList = ["R ", "R' ", "R R ", "B ", "B' ", "B B ", "L ", "L' ", "L L ",
                                "U ", "U' ", "U U ", "D ", "D' ", "D D "];
            break;

        case "F' ":
                moveList = ["R ", "R' ", "R R ", "B ", "B' ", "B B ", "L ", "L' ", "L L ",
                                "U ", "U' ", "U U ", "D ", "D' ", "D D "];
            break;
        case "F F ":
                moveList = ["R ", "R' ", "R R ", "B ", "B' ", "B B ", "L ", "L' ", "L L ",
                                "U ", "U' ", "U U ", "D ", "D' ", "D D "];
            break

        case "R ":
                moveList = ["F ", "F' ", "F F ", "B ", "B' ", "B B ", "L ", "L' ", "L L ",
                                "U ", "U' ", "U U ", "D ", "D' ", "D D "];
            break;

        case "R' ":
                moveList = ["F ", "F' ", "F F ", "B ", "B' ", "B B ", "L ", "L' ", "L L ",
                                "U ", "U' ", "U U ", "D ", "D' ", "D D "];
            break;
        case "R R ":
                moveList = ["F ", "F' ", "F F ", "B ", "B' ", "B B ", "L ", "L' ", "L L ",
                                "U ", "U' ", "U U ", "D ", "D' ", "D D "];
            break

        case "L ":
                moveList = ["F ", "F' ", "F F ", "R ", "R' ", "R R ", "B ", "B' ", "B B ",
                                "U ", "U' ", "U U ", "D ", "D' ", "D D "];
            break;

        case "L' ":
                moveList = ["F ", "F' ", "F F ", "R ", "R' ", "R R ", "B ", "B' ", "B B ",
                                "U ", "U' ", "U U ", "D ", "D' ", "D D "];
            break;
        case "L L ":
                moveList = ["F ", "F' ", "F F ", "R ", "R' ", "R R ", "B ", "B' ", "B B ",
                                "U ", "U' ", "U U ", "D ", "D' ", "D D "];
            break

        case "B ":
                moveList = ["F ", "F' ", "F F ", "R ", "R' ", "R R ", "L ", "L' ", "L L ",
                                "U ", "U' ", "U U ", "D ", "D' ", "D D "];
            break;

        case "B' ":
                moveList = ["F ", "F' ", "F F ", "R ", "R' ", "R R ", "L ", "L' ", "L L ",
                                "U ", "U' ", "U U ", "D ", "D' ", "D D "];
            break;
        case "B B ":
                moveList = ["F ", "F' ", "F F ", "R ", "R' ", "R R ", "L ", "L' ", "L L ",
                                "U ", "U' ", "U U ", "D ", "D' ", "D D "];
            break

        case "U ":
                moveList = ["F ", "F' ", "F F ", "R ", "R' ", "R R ", "B ", "B' ", "B B ", "L ", "L' ", "L L ",
                                "D ", "D' ", "D D "];
            break;

        case "U' ":
                moveList = ["F ", "F' ", "F F ", "R ", "R' ", "R R ", "B ", "B' ", "B B ", "L ", "L' ", "L L ",
                                "D ", "D' ", "D D "];
            break;
        case "U U ":
                moveList = ["F ", "F' ", "F F ", "R ", "R' ", "R R ", "B ", "B' ", "B B ", "L ", "L' ", "L L ",
                                "D ", "D' ", "D D "];
            break

        case "D ":
                moveList = ["F ", "F' ", "F F ", "R ", "R' ", "R R ", "B ", "B' ", "B B ", "L ", "L' ", "L L ",
                                "U ", "U' ", "U U " ];
            break;

        case "D' ":
                moveList = ["F ", "F' ", "F F ", "R ", "R' ", "R R ", "B ", "B' ", "B B ", "L ", "L' ", "L L ",
                                "U ", "U' ", "U U "];
            break;
        case "D D ":
                moveList = ["F ", "F' ", "F F ", "R ", "R' ", "R R ", "B ", "B' ", "B B ", "L ", "L' ", "L L ",
                                "U ", "U' ", "U U "];
            break

        default:
            moveList = ["F ", "F' ", "F F ", "R ", "R' ", "R R ", "B ", "B' ", "B B ", "L ", "L' ", "L L ",
                "U ", "U' ", "U U ", "D ", "D' ", "D D "]
            break;
    }

    return moveList;
}

function applyMove(cube, move) {
    // Apply a move to a copy of the cube and return the updated cube
    let returnCube;
    switch (move) {
        case "F ":
            returnCube = turnF(cube);
            break;

        case "F' ":
            returnCube = turnFPrime(cube);
            break;
        case "F F ":
            returnCube = turnF(cube);
            returnCube = turnF(returnCube);
            break

        case "R ":
            returnCube = turnR(cube);
            break;

        case "R' ":
            returnCube = turnRPrime(cube);
            break;
        case "R R ":
            returnCube = turnR(cube);
            returnCube = turnR(returnCube);
            break

        case "L ":
            returnCube = turnL(cube);
            break;

        case "L' ":
            returnCube = turnLPrime(cube);
            break;
        case "L L ":
            returnCube = turnL(cube);
            returnCube = turnL(returnCube);
            break

        case "B ":
            returnCube = turnB(cube);
            break;

        case "B' ":
            returnCube = turnBPrime(cube);
            break;
        case "B B ":
            returnCube = turnB(cube);
            returnCube = turnB(returnCube);
            break

        case "U ":
            returnCube = turnU(cube);
            break;

        case "U' ":
            returnCube = turnUPrime(cube);
            break;
        case "U U ":
            returnCube = turnU(cube);
            returnCube = turnU(returnCube);
            break

        case "D ":
            returnCube = turnD(cube);
            break;

        case "D' ":
            returnCube = turnDPrime(cube);
            break;
        case "D D ":
            returnCube = turnD(cube);
            returnCube = turnD(returnCube);
            break

        default:
            break;
    }
    returnCube.set("previous", move);
    return returnCube
}

export function turnF(cube) {
    let returnCube = new Map();
    let down = cube.get("down").slice(0);
    let front = cube.get("front").slice(0);
    let right = cube.get("right").slice(0);
    let back = cube.get("back").slice(0);
    let left = cube.get("left").slice(0);
    let up = cube.get("up").slice(0);

    // setting the back
    returnCube.set("back", back);

    // setting front
    returnCube.set("front", [ front[6], front[3], front[0], front[7], front[4], front[1],
                            front[8], front[5], front[2]] );
    // setting right
    returnCube.set("right", right.slice(0));
    returnCube.get("right")[0] = up[6];
    returnCube.get("right")[3] = up[7];
    returnCube.get("right")[6] = up[8];

    // setting down
    returnCube.set("down", down.slice(0));
    returnCube.get("down")[0] = right[0];
    returnCube.get("down")[1] = right[3];
    returnCube.get("down")[2] = right[6];

    // setting left
    returnCube.set("left", left.slice(0));
    returnCube.get("left")[2] = down[0];
    returnCube.get("left")[5] = down[1];
    returnCube.get("left")[8] = down[2];

    // setting up
    returnCube.set("up", up.slice(0));
    returnCube.get("up")[6] = left[8];
    returnCube.get("up")[7] = left[5];
    returnCube.get("up")[8] = left[2];

    return returnCube;
}

function turnFPrime(cube) {
    let returnCube = turnF(cube);
    returnCube = turnF(returnCube);
    returnCube = turnF(returnCube);
    return returnCube;
}

export function turnL(cube) {
    let returnCube = new Map();
    let down = cube.get("down").slice(0);
    let front = cube.get("front").slice(0);
    let right = cube.get("right").slice(0);
    let back = cube.get("back").slice(0);
    let left = cube.get("left").slice(0);
    let up = cube.get("up").slice(0);

    // setting the back
    returnCube.set("right", right);

    // setting front
    returnCube.set("left", [ left[6], left[3], left[0], left[7], left[4], left[1],
                            left[8], left[5], left[2]] );
    // setting right
    returnCube.set("front", front.slice(0));
    returnCube.get("front")[0] = up[0];
    returnCube.get("front")[3] = up[3];
    returnCube.get("front")[6] = up[6];

    // setting down
    returnCube.set("down", down.slice(0));
    returnCube.get("down")[0] = front[0];
    returnCube.get("down")[3] = front[3];
    returnCube.get("down")[6] = front[6];

    // setting left
    returnCube.set("back", back.slice(0));
    returnCube.get("back")[2] = down[0];
    returnCube.get("back")[5] = down[3];
    returnCube.get("back")[8] = down[6];

    // setting up
    returnCube.set("up", up.slice(0));
    returnCube.get("up")[0] = back[2];
    returnCube.get("up")[3] = back[5];
    returnCube.get("up")[6] = back[8];

    return returnCube;
}

function turnLPrime(cube) {
    let returnCube = turnL(cube);
    returnCube = turnL(returnCube);
    returnCube = turnL(returnCube);
    return returnCube;
}

// turn right
export function turnR(cube) {
    let returnCube = new Map();
    let down = cube.get("down").slice(0);
    let front = cube.get("front").slice(0);
    let right = cube.get("right").slice(0);
    let back = cube.get("back").slice(0);
    let left = cube.get("left").slice(0);
    let up = cube.get("up").slice(0);

    // setting the unchanged side
    returnCube.set("left", left);

    // setting front
    returnCube.set("right", [ right[6], right[3], right[0], right[7], right[4], right[1],
                            right[8], right[5], right[2]] );
    // setting right
    returnCube.set("front", front.slice(0));
    returnCube.get("front")[2] = down[2];
    returnCube.get("front")[5] = down[5];
    returnCube.get("front")[8] = down[8];

    // setting down
    returnCube.set("down", down.slice(0));
    returnCube.get("down")[2] = back[6];
    returnCube.get("down")[5] = back[3];
    returnCube.get("down")[8] = back[0];

    // setting left
    returnCube.set("back", back.slice(0));
    returnCube.get("back")[6] = up[2];
    returnCube.get("back")[3] = up[5];
    returnCube.get("back")[0] = up[8];

    // setting up
    returnCube.set("up", up.slice(0));
    returnCube.get("up")[2] = front[2];
    returnCube.get("up")[5] = front[5];
    returnCube.get("up")[8] = front[8];

    return returnCube;
}

function turnRPrime(cube) {
    let returnCube = turnR(cube);
    returnCube = turnR(returnCube);
    returnCube = turnR(returnCube);
    return returnCube;
}

export function turnB(cube) {
    let returnCube = new Map();
    let down = cube.get("down").slice(0);
    let front = cube.get("front").slice(0);
    let right = cube.get("right").slice(0);
    let back = cube.get("back").slice(0);
    let left = cube.get("left").slice(0);
    let up = cube.get("up").slice(0);

    // setting the unchanged side
    returnCube.set("front", front);

    // setting back
    returnCube.set("back", [ back[6], back[3], back[0], back[7], back[4], back[1],
                            back[8], back[5], back[2]] );
    // setting right
    returnCube.set("right", right.slice(0));
    returnCube.get("right")[2] = down[8];
    returnCube.get("right")[5] = down[7];
    returnCube.get("right")[8] = down[6];

    // setting down
    returnCube.set("down", down.slice(0));
    returnCube.get("down")[8] = left[6];
    returnCube.get("down")[7] = left[3];
    returnCube.get("down")[6] = left[0];

    // setting left
    returnCube.set("left", left.slice(0));
    returnCube.get("left")[6] = up[0];
    returnCube.get("left")[3] = up[1];
    returnCube.get("left")[0] = up[2];

    // setting up
    returnCube.set("up", up.slice(0));
    returnCube.get("up")[0] = right[2];
    returnCube.get("up")[1] = right[5];
    returnCube.get("up")[2] = right[8];

    return returnCube;
}

function turnBPrime(cube) {
    let returnCube = turnB(cube);
    returnCube = turnB(returnCube);
    returnCube = turnB(returnCube);
    return returnCube;
}

export function turnU(cube) {
    let returnCube = new Map();
    let down = cube.get("down").slice(0);
    let front = cube.get("front").slice(0);
    let right = cube.get("right").slice(0);
    let back = cube.get("back").slice(0);
    let left = cube.get("left").slice(0);
    let up = cube.get("up").slice(0);

    // setting the unchanged side
    returnCube.set("down", down);

    // setting back
    returnCube.set("up", [ up[6], up[3], up[0], up[7], up[4], up[1],
                            up[8], up[5], up[2]] );
    // setting right
    returnCube.set("front", front.slice(0));
    returnCube.get("front")[0] = right[0];
    returnCube.get("front")[1] = right[1];
    returnCube.get("front")[2] = right[2];

    // setting down
    returnCube.set("right", right.slice(0));
    returnCube.get("right")[0] = back[0];
    returnCube.get("right")[1] = back[1];
    returnCube.get("right")[2] = back[2];

    // setting left
    returnCube.set("back", back.slice(0));
    returnCube.get("back")[0] = left[0];
    returnCube.get("back")[1] = left[1];
    returnCube.get("back")[2] = left[2];

    // setting up
    returnCube.set("left", left.slice(0));
    returnCube.get("left")[0] = front[0];
    returnCube.get("left")[1] = front[1];
    returnCube.get("left")[2] = front[2];

    return returnCube;
}

function turnUPrime(cube) {
    let returnCube = turnU(cube);
    returnCube = turnU(returnCube);
    returnCube = turnU(returnCube);
    return returnCube;
}

export function turnD(cube) {
    let returnCube = new Map();
    let down = cube.get("down").slice(0);
    let front = cube.get("front").slice(0);
    let right = cube.get("right").slice(0);
    let back = cube.get("back").slice(0);
    let left = cube.get("left").slice(0);
    let up = cube.get("up").slice(0);

    // setting the unchanged side
    returnCube.set("up", up);

    // setting back
    returnCube.set("down", [ down[6], down[3], down[0], down[7], down[4], down[1],
                            down[8], down[5], down[2]] );
    // setting right
    returnCube.set("front", front.slice(0));
    returnCube.get("front")[6] = left[6];
    returnCube.get("front")[7] = left[7];
    returnCube.get("front")[8] = left[8];

    // setting down
    returnCube.set("left", left.slice(0));
    returnCube.get("left")[6] = back[6];
    returnCube.get("left")[7] = back[7];
    returnCube.get("left")[8] = back[8];

    // setting left
    returnCube.set("back", back.slice(0));
    returnCube.get("back")[6] = right[6];
    returnCube.get("back")[7] = right[7];
    returnCube.get("back")[8] = right[8];

    // setting up
    returnCube.set("right", right.slice(0));
    returnCube.get("right")[6] = front[6];
    returnCube.get("right")[7] = front[7];
    returnCube.get("right")[8] = front[8];

    return returnCube;
}

function turnDPrime(cube) {
    let returnCube = turnD(cube);
    returnCube = turnD(returnCube);
    returnCube = turnD(returnCube);
    return returnCube;
}

function whiteCrossHeuristic(cube) {
    // Define the white cross stickers and their expected positions.
    // You'll need to adapt this based on the orientation of your cube.

    // Initialize a counter for misplaced white edges.
    let misplacedCount = 0;
    let down = cube.get("down");
    let front = cube.get("front");
    let right = cube.get("right");
    let back = cube.get("back");
    let left = cube.get("left");

    if(down[1] !== down[4]) {
        misplacedCount++;
    }
    if(down[3] !== down[4]) {
        misplacedCount++
    }
    if(down[5] !== down[4]) {
        misplacedCount++;
    }
    if(down[7] !== down[4]) {
        misplacedCount++;
    }
    // if(front[4] !== front[7]) {
    //     misplacedCount++;
    // }
    // if(right[4] !== right[7]) {
    //     misplacedCount++;
    // }
    // if(back[4] !== back[7]) {
    //     misplacedCount++;
    // }
    // if(left[4] !== back[7]) {
    //     misplacedCount++;
    // }

    return misplacedCount;
}
