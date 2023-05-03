import { ToastContainer, toast } from "react-toastify";
const Notification = (par) => {
  toast(par.text, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "black",
  });
};
export default Notification;
