import {IconButton, Tooltip} from "@mui/material";
import {ReactElement, useState} from "react";

interface Props {
  ariaLabel: string
  iconColor: 'success' | 'error' | 'primary'
  disabled?: boolean
  children: ReactElement
  handleOnClick: () => void
}

const tooltipText = {
  TYPE_TITLE: 'Type any name of board',
  ADD: 'Add board',
  CANCEL: 'Cancel',
}

const CreateIconBtn = ({ariaLabel, iconColor, handleOnClick, disabled = false, children}: Props) => {
  const [open, setOpen] = useState(false);
  const [tooltipTitle, setTooltipTitle] = useState(tooltipText.CANCEL)

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    if(disabled && ariaLabel ==='add'){
      setTooltipTitle(tooltipText.TYPE_TITLE)
    }
    else if(ariaLabel ==='add') {
      setTooltipTitle(tooltipText.ADD)
    }
    else {
      setTooltipTitle(tooltipText.CANCEL)
    }
    setOpen(true);
  };
  return (
    <>
      <Tooltip
        open={open}
        onClose={handleClose}
        onOpen={handleOpen} title={tooltipTitle}
        followCursor
      >
        <div>
        <IconButton
          aria-label={ariaLabel}
          color={iconColor}
          onClick={ handleOnClick}
          disabled={disabled}
          sx={{outline: 'none', padding: '10px 0'}}
        >
          {children}
        </IconButton>
        </div>
      </Tooltip>
    </>
  );
}

export default CreateIconBtn;