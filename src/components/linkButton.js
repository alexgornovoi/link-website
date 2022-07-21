import {Button} from '@mui/material'

const LinkButton = ({url, text, icon}) => {
    return (
        <Button variant = "outlined" startIcon ={icon} onClick={(e) => {e.preventDefault();window.open(url,'_blank');}}>{text}</Button>
    )
}

export default LinkButton