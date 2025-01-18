
import { child, get, ref } from "firebase/database";
import { database } from "../firebase";

// Tạo một hàm để truy xuất dữ liệu
export const fetchDataFromFirebase = async (path: string) => {
  const dbRef = ref(database);
  try {
    const snapshot = await get(child(dbRef, path));
    if (snapshot.exists()) {
      return snapshot.val(); // trả về dữ liệu nếu tồn tại
    } else {
      console.log("No data available");
      return null; // không có dữ liệu
    }
  } catch (error) {
    console.error("Error fetching data from Firebase:", error);
    throw error; // ném lỗi nếu có
  }
};
