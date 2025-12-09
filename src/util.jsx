import html from './assets/html.png';
import css from './assets/css.png';
import js from './assets/js.png';
import node from './assets/node.png';
import react from './assets/react.png';

export const getLogo = (group)=>{
    // console.log(group)

    switch (group.toLowerCase()){
        // tolowercase는 대문자 소문자로 사용 가능하게 바꿔줌.
        case 'html': return html;
        case 'css': return css;
        case 'javascript': return js;
        case 'node': return node;
        case 'react': return react;
    }
}
