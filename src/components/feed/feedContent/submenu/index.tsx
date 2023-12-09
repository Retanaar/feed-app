import React from "react";
import CircleIcon from "../../circleIcon";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Menu, MenuItem } from "@mui/material";

interface Props {
    handler: () => void;
}

function Submenu({ handler }: Props) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const handleMenu = () => {
        handler();
        handleClose();
    }
    return (
        <>
        <div onClick={handleClick} data-testid='submenu-button'>
            <CircleIcon icon={<ArrowDropDownIcon />} selected />
        </div>
        <Menu
        id="basic-menu"
        data-testid='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
      >
        <MenuItem onClick={handleMenu} data-testid='remove-button'>Remove</MenuItem>
      </Menu>
        </>
    )
}

export default Submenu;