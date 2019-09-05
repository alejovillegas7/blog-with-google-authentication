import jasonPlaceholder from '../apis/jsonPlaceHolder';
import {async}  from 'q';
import _ from 'lodash';

export const fetchPostsAndUsers =()=>async (dispatch,getState)=>{ //creamos un nuevo action creator que contendra los dos otros
                                                    //para que no se hagan mas de una peticion por usuario
                                                    //y poder volver a llamarlos en caso de alguna actualizacion
    await dispatch(fetchPost());
    const userIds=_.uniq(_.map(getState().posts, 'userId'));
    userIds.forEach(id=>dispatch(fetchUser(id)));//para que solo se haga la solicitud 1 vez por usuario
};

export const fetchPost = () =>
 async (dispatch, getState)=>{
        const response= await jasonPlaceholder.get('/posts');

        dispatch({type:'FETCH_POST', payload:response.data}) //es .data porque necesitamos los datos de la respuesta de la API
    };


export const fetchUser = id => async dispatch => {

    const response = await jasonPlaceholder.get(`/users/${id}`);

    dispatch({type:'FETCH_USER', payload:response.data});
};

/*export const fetchUser = id => dispatch => { //una manera de hacer peticiones solamente 1 vez por usuario
                                                //el problema es que no podriamos actualizar los datos de ninugn usuario 
                                                //porque no se podria vovler a llmaar jamas
    _fetchUser(id, dispatch);
};

const _fetchUser = _.memoize(async(id, dispatch) =>{
const response = await jasonPlaceholder.get(`/users/${id}`);

dispatch({type:'FETCH_USER', payload:response.data});
});*/
