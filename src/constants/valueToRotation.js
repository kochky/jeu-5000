function valueToRotation(value){
    switch(value) {
      case 1:
        return [0,-1.5,0,0];
        break;
      case 2:
        return [6,0,0,0];
        break;
      case 3:
        return [6.5,0,0,0];
        break;
      case 4:
        return [1,0,0,0];
        break;
      case 5:
        return [0,0,0,0];
        break;
      case 6:
        return [0,1.5,0,0];
        break;
      default:
        return [0,0,0,0]
    }
}

export default valueToRotation
