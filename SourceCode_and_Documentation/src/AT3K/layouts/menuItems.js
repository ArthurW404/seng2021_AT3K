
// Material UI Icons: https://material-ui.com/components/material-icons/ 
import {
  Home as HomeIcon,
  Work as WorkIcon,
  Search as SearchIcon,
  BarChart as BarChartIcon,
  Settings as SettingsIcon,
  NotificationsNone as NotificationsIcon,
  FormatSize as TypographyIcon,
  FilterNone as UIElementsIcon,
  BorderAll as TableIcon,
  QuestionAnswer as SupportIcon,
  LibraryBooks as LibraryIcon,
  HelpOutline as FAQIcon,
  ArrowBack as ArrowBackIcon,
} from "@material-ui/icons";

/**
 * Side nav items
 */
const sideNavItems = [
    { id: 0, label: "Home", link: "/", icon: <HomeIcon /> },
    { id: 1, label: "Job Dashboard", link: "/dashboard", icon: <WorkIcon /> },
    { id: 2, label: "Search For Jobs", link: "/search", icon: <SearchIcon /> },
    { id: 3, label: "Statistics", link: "/statistics", icon: <BarChartIcon /> },
    { id: 5, type: "divider" },
    { id: 6, label: "Settings", link: "/settings", icon: <SettingsIcon /> },
    { id: 7, type: "divider" },
    { id: 8, type: "title", label: "Resources" },
    { id: 9, label: "FAQ", link: "/faq", icon: <FAQIcon /> },
]

/**
 * Top nav items
 */
const topNavItems = [

];

const TopNavItems = () => {
    return (
        <div>
            Fill some stuff here!
        </div>
    );
};

export default {
    sideNavItems, 
    TopNavItems 
};