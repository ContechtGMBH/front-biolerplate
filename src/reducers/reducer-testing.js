const initial = {
  testing: "testing"
}

export default function (state = initial, action){
  switch (action.type){
    case 'TESTING':
      return {testing: action.payload};
    default:
      return state;
  }
}
