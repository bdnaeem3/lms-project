import Calendar from "./Calendar"
import Clock from "./Clock"
import Coversations from "./Coversations"
import Dashboard from "./Dashboard"
import DocumentLibrary from "./DocumentLibrary"
import Events from "./Events"
import Logout from "./Logout"
import Sessions from "./Sessions"
import Settings from "./Settings"
import StudentsManagement from "./StudentsManagement"
import Tasks from "./Tasks"
import Quiz from "./Quiz"

export default ({ name, ...rest }) => {
    switch (name) {
        case 'calendar':
            return <Calendar {...rest} />
        case 'conversations':
            return <Coversations {...rest} />
        case 'clock':
            return <Clock {...rest} />
        case 'dashboard':
            return <Dashboard {...rest} />
        case 'document-library':
            return <DocumentLibrary {...rest} />
        case 'events':
            return <Events {...rest} />
        case 'logout':
            return <Logout {...rest} />
        case 'sessions':
            return <Sessions {...rest} />
        case 'settings':
            return <Settings {...rest} />
        case 'students-management':
            return <StudentsManagement {...rest} />
        case 'tasks':
            return <Tasks {...rest} />
        case 'quiz':
            return <Quiz {...rest} />
        default:
            return null
    }
}
