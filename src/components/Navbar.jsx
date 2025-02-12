import SidebarNav from "../theme/nav/SidebarNav"

export default () => {
    return (
        <nav>
            <ul>
                <SidebarNav name="Dashboard" icon="dashboard" />
                <SidebarNav name="Sessions Management" icon="sessions" />
                <SidebarNav name="Document Library" icon="document-library" />
                <SidebarNav name="Students Management" icon="students-management" />
                <SidebarNav name="Conversations" icon="conversations" badgeCount="21" />
                <SidebarNav name="Quiz Management" icon="quiz" />
                <SidebarNav name="Tasks Management" icon="tasks" />
                <SidebarNav name="Calendar Management" icon="calendar" />
                <SidebarNav name="events & news" icon="events" badgeCount="2" />
                <SidebarNav name="Settings" icon="settings" />
            </ul>
        </nav>
    )
}