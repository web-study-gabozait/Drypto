import { toast } from "react-toastify";

const toastCase = (message: string, type: string): void => {
  switch (type) {
    case "SUCCESS":
      toast.success(message, { position: toast.POSITION.TOP_RIGHT });
      break;

    case "ERROR":
      toast.error(message, { position: toast.POSITION.TOP_RIGHT });
      break;

    case "INFO":
      toast.info(message, { position: toast.POSITION.TOP_RIGHT });

    default:
      toast(message, { position: toast.POSITION.TOP_RIGHT });
      break;
  }
};

class Toast {
  public success(message: string): void {
    toastCase(message, "SUCCESS");
  }
}

export default new Toast();
