import { default as settings } from '../resources/overview_metadata.json';
import { default as tools } from '../resources/overview_tools.json';

export const displayToolsURLs = () => {    
    Object.keys(tools).forEach(toolName => {
        Object.keys(settings).forEach(setting => {

            if (settings[setting].type === "link") {
                if (tools[toolName][setting]) {
                    if (Array.isArray(tools[toolName][setting])) {
                        tools[toolName][setting].map(linkItem => {
                            console.log(tools[toolName].id, linkItem);
                        })
                    } else {
                        console.log(tools[toolName].id.replace(/ /g,"_"), tools[toolName][setting])
                    }
                }
            }
        })
    })

}   