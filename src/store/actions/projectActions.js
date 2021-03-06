export const createProject = (project) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    //the dispatch param dispatches and action to the reducer
    // This pauses the dispatch to make async call 
    //make async call to database
    //redispatch the action

    const fireStore = getFirestore();
    
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;

    fireStore.collection('projects').add({
      ...project,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date()
    }).then(()=>{
        dispatch({
          type:"CREATE_PROJECT",
          project: project
        })
    }).catch((err)=>{
      dispatch({type:'CREATE_PROJECT_ERROR', err})
    })

 
  }
}