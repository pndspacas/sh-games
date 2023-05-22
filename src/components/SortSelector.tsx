import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

const SortSelector = () => {
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Order by:Relevance
            </MenuButton>
            <MenuList>
                <MenuItem>Relevance</MenuItem>
                <MenuItem>Date</MenuItem>
                <MenuItem>Releaee</MenuItem>
                <MenuItem>Pops</MenuItem>
                <MenuItem>Average</MenuItem>
            </MenuList>
        </Menu >
    )
}

export default SortSelector