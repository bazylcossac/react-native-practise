import { DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationDefaultTheme } from "@react-navigation/native";
import { Provider as PaperProvider, DefaultTheme as PaperDefaultTheme} from 'react-native-paper';

export const LightThemne = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
    ...NavigationDefaultTheme.colors,
    ...PaperDefaultTheme.colors,
    background: "#FFF"
    }
}

export const DarkTheme = {
    ...NavigationDarkTheme,

    colors: {
    ...NavigationDarkTheme.colors,
    background: "#000"
    }
}

export const TabBarDark = "#222"
export const TabBarLight = "#FFF"