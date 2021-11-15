function valueToRotation(value){
    switch(value) {
      case 1:
        return [0,-1.5,0];
      case 2:
        return [6,0,0];
      case 3:
        return [6.5,0,0];
      case 4:
        return [1,0,0];
      case 5:
        return [0,0,0];
      case 6:
        return [0,1.5,0];
      default:
        return [0,0,0]
    }
}

export default valueToRotation
