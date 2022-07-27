import LinkButton from "./linkButton"
import { LinkedIn, GitHub, Code, Web, Javascript } from "@mui/icons-material"
import { ButtonGroup } from "@mui/material"

const Buttons = ({ mode }) => {
    return (
        <ButtonGroup orientation="vertical">
            <LinkButton text="LinkedIn" icon={<LinkedIn />} url="https://www.linkedin.com/in/alexeygornovoi/" />
            <LinkButton text="GitHub" icon={<GitHub />} url="https://github.com/alexgornovoi" />
            <LinkButton text="LeetCode" icon={<Code />} url="https://leetcode.com/alexgornovoi/" />
            <LinkButton text="Website" icon={<Web />} url="https://alexgornovoi.github.io/link-website/" />
            <LinkButton text="Source" icon={<Javascript />} url="https://github.com/alexgornovoi/link-website" />
        </ButtonGroup>
    )
}

export default Buttons