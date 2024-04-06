import {DefaultTheme, NavigationContainer} from "@react-navigation/native";
import {LoginStack} from "./src/navigation/LoginStack";
import {AuthenticatedStack} from "./src/navigation/AuthenticatedStack";

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: "#f2f2f2",
    },
};
export default function App() {
    const mockIsAuthenticated = true;

    return (
        <NavigationContainer theme={theme}>
            {mockIsAuthenticated ? <AuthenticatedStack/> : <LoginStack/>}
        </NavigationContainer>
    );
}