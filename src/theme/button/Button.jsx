import DefaultButton from "./DefaultButton"
import LogoutButton from "./LogoutButton"
import PrimaryButton from "./PrimaryButton"

export default ({ type, ...rest }) => {
    switch (type) {
        case 'button':
            return <DefaultButton {...rest} />
        case 'logout':
            return <LogoutButton {...rest} />
        case 'primary':
            return <PrimaryButton {...rest} />
        default:
            return null
    }
}