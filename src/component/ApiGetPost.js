import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
const handlePost = async (finalName, finalEmail, finalInterest) => {
  let result = await axios.post(
    "https://testpostapi1.p.rapidapi.com/testBatmanApi/name/register?rapidapi-key=28728db04dmsh34d3f140dd059fap1c388ejsn7288577afcf7",
    {
      name: finalName,
      email: finalEmail,
      interests: finalInterest,
    },
    {
      accept: "success",
      "content-type": "application/x-www-form-urlencoded",
      "x-rapidapi-host": "testpostapi1.p.rapidapi.com",
      "x-rapidapi-key": "28728db04dmsh34d3f140dd059fap1c388ejsn7288577afcf7",
    }
  );
  console.log(result);
  if (result.status)
    toast.success("Data Posted", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
    });
  setTimeout(() => {
    window.location.reload();
  }, 3000);
};

const handleGet = async (temp) => {
  const { data } = await axios.get(
    `https://webit-keyword-search.p.rapidapi.com/autosuggest?q=${temp}&language=en&rapidapi-key=28728db04dmsh34d3f140dd059fap1c388ejsn7288577afcf7`
  );
  const arr = [];
  for (var i = 0; i < 8; i++) {
    const obj = {
      value: data.data.results[i],
      label: data.data.results[i],
    };
    arr.push(obj);
  }
  return arr;
};

export { handlePost };
export { handleGet };
