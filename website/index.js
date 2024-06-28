const API_URL = "http://localhost:3000";
const apiRequest = async (path) => {
    let res;
    try {
        res = await fetch(`${API_URL}/${path || ""}`);
    } catch (error) {
        console.error(error);
    } finally {
        return res.json();
    }
}

const fetchAPIStatus = async () => {
    let apiRes = await apiRequest();
    const statusText = document.querySelector("#statusText");
    statusText.innerHTML = apiRes.message;
}
 
fetchAPIStatus();
