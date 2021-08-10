import React, { forwardRef, useState } from 'react';
import { TextField } from '@material-ui/core';
import TextInput from 'react-autocomplete-input';

const findLastPart = (text) => {
    const lastDotIndex = text.lastIndexOf('.');
    const lastDollarIndex = text.lastIndexOf('$');
    const greaterIndex = lastDotIndex > lastDollarIndex ? lastDotIndex : lastDollarIndex;
    const lastTrigger = text.charAt(greaterIndex);
    const lastSlug = text.substring(greaterIndex + 1);
    return {
        lastTrigger,
        lastSlug
    };
};

const CustomTextarea = forwardRef((props, ref) => {
    return (
        <TextField
            inputRef={ref}
            {...props}
        />
    );
});

const AutoSuggestField = (props) => {
    const {ancestors, ...other} = props;
    const parents = ancestors.map(item => item.name.toString());

    const [options] = useState({
        '$': parents,
        '.': []
    });

    // returns the whole text
    const handleSelect = (text) => {
        const {lastTrigger, lastSlug} = findLastPart(text);
        console.log(lastTrigger);
        console.log(lastSlug);

    };

    return (
        <TextInput
            trigger={["$", "."]}
            spacer=""
            options={options}
            onSelect={handleSelect}
            Component={CustomTextarea}
            {...other}
        />
    );
};

export default AutoSuggestField;
