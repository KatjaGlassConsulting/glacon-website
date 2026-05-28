import React, { useCallback } from 'react';

import { default as scripts_jumpstart } from '../resources/scripts_jumpstart.json';
import { default as scripts_scottbass } from '../resources/scripts_scottbass.json';
import { default as scripts_rowland } from '../resources/scripts_rowlandutils.json';
import { default as scripts_sasjs_core } from '../resources/scripts_sasjs_core.json';
import { default as scripts_whitepaper } from '../resources/scripts_whitepaper.json';
import { default as scripts_chris } from '../resources/scripts_chris_sas_macros.json';
import { default as scripts_cdiscdefine } from '../resources/scripts_cdiscdefinexmlmap.json';
import { default as scripts_smile } from '../resources/scripts_smile.json';
import { default as scripts_other } from '../resources/scripts_others.json';
import { default as scripts_cdiscpilotrep } from '../resources/scripts_cdiscpilotrep.json';

export const scripts = {
    ...scripts_jumpstart,
    ...scripts_smile,
    ...scripts_scottbass,
    ...scripts_rowland,
    ...scripts_sasjs_core,
    ...scripts_cdiscpilotrep,
    ...scripts_whitepaper,
    ...scripts_chris,
    ...scripts_cdiscdefine,
    ...scripts_other
};

export const getKeys = (object, secondLevelName) => {
    if (secondLevelName !== undefined) {
        var keys = Object.keys(object).map(item => {
            for (var first in object[item]) break;
            return object[item][first][secondLevelName]
        })

        // remove possible duplicates
        keys = keys.sort().filter(function (item, pos, ary) {
            return !pos || item !== ary[pos - 1];
        })
        return keys;
    }
    else {
        return Object.keys(object);
    }
}

// This function is only used for Project overview which is removed
export const displayContent = (content, type) => {
    if (Array.isArray(content)) {
        var myReturn = [];
        content.forEach((item, i) => {
            myReturn.push(<li key={i}>{displayContent(item, type)}</li>)
        })
        return <ul className="slim_ul">{myReturn}</ul>;
    }
    if (type === "link") {
        var link;
        var description;
        if (typeof (content) === "string") {
            link = content;
            description = content;
        }
        else {
            description = Object.keys(content)[0];
            link = content[description];
        }

        if (description.length > 53) {
            description = description.substring(0, 50) + "...";
        }

        return (
            <a href={link} rel="noopener noreferrer" target="_blank" className="intextlink" key={link}>
                {description}
            </a>
        );
    }
    if (type === "object") {
        return getKeys(content).join(", ");
    }
    return content;
}

export const displayShortContent = (content, type) => {
    if (Array.isArray(content)) {
        var myReturn = [];
        content.forEach((item, i) => {
            myReturn.push(displayShortContent(item, type))
            if (i !== content.length - 1) {
                myReturn.push(", ")
            }
        })
        return myReturn;
    }
    if (type === "link") {
        var link;
        var description;
        if (typeof (content) === "string") {
            link = content;
            description = content;
            var prefix_match = content.match("[^/|:]/");
            if (prefix_match) {
                description = content.substring(0, prefix_match.index + 1) + "/...";
            }
        }
        else {
            description = Object.keys(content)[0];
            link = content[description];
        }

        return (
            <a href={link} rel="noopener noreferrer" target="_blank" className="intextlink" key={link}>
                {description}
            </a>
        );
    }
    if (type === "object") {
        return getKeys(content).join(", ");
    }
    return content;
}
