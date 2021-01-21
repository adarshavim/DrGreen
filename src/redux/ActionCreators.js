import * as ActionTypes from './ActionTypes';
import { firestore} from '../firebase/firebase';

export const fetchDiseases = () => (dispatch) => {

    dispatch(diseasesLoading(true));

    return firestore.collection('diseases').get()
        .then(snapshot => {
            let diseases = [];
            snapshot.forEach(doc => {
                const data = doc.data()
                const _id = doc.id
                diseases.push({_id, ...data });
            });
            return diseases;
        })
        .then(diseases => dispatch(addDiseases(diseases)))
        .catch(error => dispatch(diseasesFailed(error.message)));
}

export const diseasesLoading = () => ({
    type: ActionTypes.DISEASE_LOADING
});

export const diseasesFailed = (errmess) => ({
    type: ActionTypes.DISEASE_FAILED,
    payload: errmess
});

export const addDiseases = (diseases) => ({
    type: ActionTypes.ADD_DISEASE,
    payload: diseases
});
