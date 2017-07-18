'use strict';

const X_COA = () => { 
    let scripts = document.getElementsByTagName('script'); 
    // css
    const this_style = `color:#f00;background:#000;font-size:12px;`;
    const log_style_before = `color:#f0f;background:#000;font-size:18px;`;
    const log_style_after = `color:#0f0;background:#000;font-size:32px;`;
    console.log(`%c this`, `${this_style}`, this); 
    for (let i = 0; i < scripts.length; i++) { 
        if (!scripts[i].getAttribute("data-rocketsrc")) { 
            console.log(`%c scripts[i]before:`, `${log_style_before}`, scripts[i]);
            scripts[i].setAttribute("crossorigin", "anonymous");
            console.log(`%c scripts[i]after:`, `${log_style_after}`, scripts[i]); 
        }
    }
};

document.addEventListener("DOMContentLoaded", (event) => {
        console.log(`%c DOM fully loaded and parsed`, `${this_style}`, this);
        setTimeout(X_COA, 1000); 
    }
);

export {X_COA};
export default X_COA;

