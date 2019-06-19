import { createStore } from 'redux'


const store = createStore((state = { count: 0 }, action) => {
    if (action.incrementBy) {
        console.log(actionincrementBy)
    }
    switch (action.type) {
      case 'INCREMENT':
        return {
          count: state.count + 1
        };
      default:
        return state;
    }
  });
  

  store.subscribe(() => {
	console.log(store.getState());
})

  

//   store.dispatch({ 
//     type: 'INCREMENT',
//   });


const incrementCount = () => ({
	type: 'INCREMENT',

})

store.dispatch(incrementCount())
