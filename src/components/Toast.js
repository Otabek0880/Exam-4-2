import { ToastContainer, toast } from "react-toastify";
const Toast = (par) => {
  toast(par.text, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: par.theme,
    type: par.type,
  });
};
export default Toast;
