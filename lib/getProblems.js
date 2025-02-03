import { collection, getDocs } from "firebase/firestore";
import {db} from "../app/firebase/firebase";

const getProblems = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "problems"));
        const problems = [];
        querySnapshot.forEach((doc) => {
            problems.push({ id: doc.id, ...doc.data() });
            console.log(problems)
        });
        return problems;
    } catch (error) {
        console.error("Error fetching problems:", error);
    }
};

export default getProblems;
