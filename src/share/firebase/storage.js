import firebase from './config';


const getImg = async img => {

    try {
        const ref = firebase.storage().ref(img);
        return await ref.getDownloadURL();
    } catch (err) {
        return false;
    }
}

const Storage = {
    upload: async (img, name) => {
        var storageRef = firebase.storage().ref();

        var mountainsRef = storageRef.child(name);

        try {
            const { state, metadata } = await mountainsRef.put(img);
            const imgNameReturned = metadata.name;

            if (state === "success") {
                return await getImg(imgNameReturned);
            }

            return false;

        } catch (err) {
            console.log(err);
            return false;
        }
    },


}


export default Storage;