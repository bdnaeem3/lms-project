import DefaultButton from "./DefaultButton"
import GroupButton from "./GroupButton"
import LogoutButton from "./LogoutButton"
import PrimaryButton from "./PrimaryButton"

export default ({ type, ...rest }) => {
    switch (type) {
        case 'button':
            return <DefaultButton {...rest} />
        case 'group':
            return <GroupButton {...rest} />
        case 'logout':
            return <LogoutButton {...rest} />
        case 'primary':
            return <PrimaryButton {...rest} />
        default:
            return null
    }
}