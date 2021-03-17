const initialState = {
  projects:[
    {id:'1', title:'Get Work done', conent:'lorem ipsum'},
    {id:'2', title:'Get done coding', conent:'lorem ipsum'},
    {id:'3', title:'Get over it', conent:'lorem ipsum'}
  ]
}

const projectsReducer = (state=initialState, action) => {
  switch(action.type){
    case 'CREATE_PROJECT':
      console.log('create project' , action.project)
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('create project error', action.err)
      return state;
      default:
        return state;
  }
 
}

export default projectsReducer;