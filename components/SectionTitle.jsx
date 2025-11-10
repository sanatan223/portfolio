import { Colors } from "../constants/Colors";
import { useTheme } from "../context/ThemeContext";

export const SectionTitle = ({ children }) => {
  const { theme } = useTheme();
  return (
    <h2 className="section-title" style={{
      color: `${Colors[theme].textPrimary}`
    }}>
      {children}
    </h2>
  )
}