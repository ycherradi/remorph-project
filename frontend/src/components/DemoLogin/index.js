import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import '../LoginFormModal/LoginFormModal.css';

const DemoLogin = () => {
  const dispatch = useDispatch();
  const handleDemoForm = () => {
    const credential = "Demo-lition";
    const password = "password";
    return dispatch(sessionActions.login({ credential, password }));
  };

  return (
    <>
      <button onClick={handleDemoForm}>Demo</button>
    </>
  );
}



export default DemoLogin;