import DefaultButton from "./DefaultButton"
import LogoutButton from "./LogoutButton"

export default ({ type, ...rest }) => {
    switch (type) {
        case 'button':
            return <DefaultButton {...rest} />
        case 'logout':
            return <LogoutButton {...rest} />
        default:
            return null
    }
}