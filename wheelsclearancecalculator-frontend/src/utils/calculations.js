const createData = (width, ratio, diameter) => {
  let obj = {
    width,
    ratio,
    diameter,
    tireHeight: calculateTireHeight(width, ratio, diameter),
    sideWallHeight: calculateSideWallHeight(width, ratio),
    diameterDifference: calculateTireHeight(width, ratio, diameter) - 24.62
  };
  console.log(obj)
  return obj;
};

const calculateTireHeight = (width, ratio, diameter) => (((width * ratio) / 25.4) * 2 + diameter).toFixed(2);

const calculateSideWallHeight = (width, ratio) => ((width * ratio) / 25.4).toFixed(2);

const calculateFrontFenderClearance = (wheelWidth, offset) => {
    return ((wheelWidth*25.4)/2 - offset).toFixed(2);
}

module.exports = {
    createData,
    calculateSideWallHeight,
    calculateTireHeight,
    calculateFrontFenderClearance
}


// createData(205, .4, 18)