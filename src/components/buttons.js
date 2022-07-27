import LinkButton from "./linkButton"
import { LinkedIn, GitHub, Code, Web, Javascript } from "@mui/icons-material"
import { ButtonGroup } from "@mui/material"

const Buttons = ({mode}) => {
    return (
        <ButtonGroup orientation="vertical">
            <LinkButton text="LinkedIn" mode ={mode} icon={<LinkedIn />} url = "https://www.linkedin.com/in/alexeygornovoi/" />
            <LinkButton text="GitHub" mode= {mode} icon={<GitHub />} url = "https://github.com/alexgornovoi" />
            <LinkButton text="LeetCode" mode={mode} icon={<Code />} url = "https://leetcode.com/alexgornovoi/" />
            <LinkButton text="Website" mode={mode} icon={<Web />} url = "https://www.alexgornovoi.com" />
            <LinkButton text="Source" mode={mode} icon={<Javascript />} url ="https://github.com/alexgornovoi/link-website" />
        </ButtonGroup>
    )
}

export default Buttons