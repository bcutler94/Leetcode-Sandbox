/*
We have a list of points on the plane.  Find the K closest points to the origin (0, 0).

(Here, the distance between two points on a plane is the Euclidean distance.)

You may return the answer in any order.  The answer is guaranteed to be unique
(except for the order that it is in.)
*/

var kClosest = function (points, K) {
    // init array
    const array = [];
    // edge case coverage
    if (points.length <= K) return points;
    // iterate thru points and find the distance
    for (let coord of points) {
        const [x, y] = coord;
        const dist = Math.sqrt((x ** 2) + (y ** 2));
        // store coord and dist information in array
        array.push({ dist: dist, coord: coord });
    }

    array.sort((a, b) => a.dist - b.dist);
    let output = array.map((obj, idx) => {
        return obj['coord'];
    })
    return output.slice(0, K)
};