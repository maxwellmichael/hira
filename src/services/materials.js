import { firebase } from '../firebase/config';

export const getAllMaterials = async () => {

    return await firebase.firestore().collection('materials').orderBy("name").get()
        .then((querySnapshot) => {
            let data = [];
            querySnapshot.forEach((doc) => {
                data.push({ ...doc.data(), id: doc.id })
            });
            return { hasError: false, data: data, error: null };
        })
        .catch((error) => {
            return { hasError: true, error: error, data: null };
        });
}