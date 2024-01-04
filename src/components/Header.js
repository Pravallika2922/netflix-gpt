import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NETFLIX_LOGO, USER_ICON } from "../utils/constants";
import { toggleGptSearch } from "../utils/gptSearchSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLang } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const showGptLang = useSelector((store) => store.gpt.showGpt);
  const navigate = useNavigate();
  const handleGptSearch = () => {
    dispatch(toggleGptSearch());
  };
  const handleSelectValue = (e) => {
    dispatch(changeLang(e.target.value));
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribe when the component unmounts.
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute px-5 bg-gradient-to-b from-black z-50 w-full flex justify-between">
      <img src={NETFLIX_LOGO} alt="Netflix logo" className="w-40" />
      {user && (
        <div className="flex">
          {showGptLang && (
            <select
              className="p-2 m-2 bg-gray-700 text-white"
              onChange={handleSelectValue}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option
                  key={lang.identifier}
                  value={lang.identifier}
                  className="text-xs"
                >
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-2 m-2 px-2 text-white bg-red-700"
            onClick={handleGptSearch}
          >
            {showGptLang ? "Home" : "GPT Search"}
          </button>
          <img src={USER_ICON} alt="usericon" className="w-12 h-12 p-2" />
          <button className="font-bold text-white" onClick={handleSignOut}>
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
