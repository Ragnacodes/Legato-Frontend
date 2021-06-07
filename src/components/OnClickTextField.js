import React, { useState } from 'react';
import clsx from 'clsx';
import {
  TextField,
  InputAdornment,
  IconButton,
  Typography,
} from '@material-ui/core';
import { SaveAlt, Clear } from '@material-ui/icons';
const OnClickTextField = ({
  defaultText,
  textfieldSize,
  divClassName,
  textfieldClassName,
  textClassName,
  handleSave,
  handleCancel,
  ...textfieldProps
}) => {
  const [renameToggle, setRenameToggle] = useState(false);
  const [text, setText] = useState(defaultText);

  React.useEffect(() => {
    setText(defaultText);
  }, [defaultText]);

  const onTextFieldChange = (e) => {
    setText(e.target.value);
  };
  const saveNewText = () => {
    handleSave(text);
    setRenameToggle(false);
  };

  const cancelNewText = () => {
    setRenameToggle(false);
    handleCancel(false);
    setText(defaultText);
  };

  return (
    <div className={clsx('onclick-textfield', textfieldSize, divClassName)}>
      {renameToggle ? (
        <TextField
          {...textfieldProps}
          className={clsx('text-field', textfieldClassName)}
          onChange={onTextFieldChange}
          variant="outlined"
          size={textfieldSize}
          defaultValue={defaultText}
          error={!text}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {text && (
                  <IconButton
                    aria-label="save-name"
                    onClick={saveNewText}
                    onMouseDown={(e) => e.preventDefault()}
                    edge="end"
                  >
                    <SaveAlt />
                  </IconButton>
                )}
                <IconButton
                  aria-label="cancel-name"
                  onClick={cancelNewText}
                  onMouseDown={(e) => e.preventDefault()}
                  edge="end"
                >
                  <Clear />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      ) : (
        <Typography
          className={clsx('text', textClassName)}
          onClick={() => setRenameToggle(true)}
          variant="body1"
        >
          {text}
        </Typography>
      )}
    </div>
  );
};

export default OnClickTextField;
