import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import logo from '../img/Logo.svg';
import logoDark from "../img/LogoDark.svg";
import menu from "../img/menu.svg";
import menuDark from "../img/menuDark.svg";

const useTheme = () => {
    const { themeDark } = useContext(ThemeContext);

    const BACKGROUND_GENERAL = themeDark === true ? 'background-dark' : 'background-normal';
    const COLOR_TITLE = themeDark === true ? 'color-title--dark' : 'color-title--normal';
    const COLOR_PARAGRAPH = themeDark === true ? 'color-font--dark' : 'color-font--normal';
    const LOGO = themeDark === true ? logoDark : logo;
    const MENU = themeDark === true ? menuDark : menu;

    return {
        MENU,
        BACKGROUND_GENERAL,
        COLOR_TITLE,
        COLOR_PARAGRAPH,
        LOGO
    };

}
export default useTheme;









// .background-dark {
//     background-color: #02020f;
//   }

//   .background-normal {
//     background: color #ffffff;
//   }
//   .color-title--dark {
//     color: ivory;
//   }
//   .color-title--normal {
//     color: black;
//   }
//   .color-font--dark {
//     color: #e3e3e3;
//   }
//   .color-font--normal {
//     color: grey;
//   }
