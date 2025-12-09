const initState = {
    inputs: {
        group: '',
        word: '',
        text: '',
    },
    dics : [{
        id: 1,
        group: 'html',
        word: 'HTML',
        text: '"Hyper Text Markup Language"의 약자이다. 마크업 언어로 웹 문서를 작성하며, tag를 사용하여 문서의 구조 등을 기술하는 언어이다.'
    },
    {
        id: 2,
        group: 'html',
        word: 'Body 요소',
        text:'id 속성을 이용하여 문서 내에서 tag를 유일하게 식별이 가능하다. class 속성을 이용하여 여러 tag에 공통적인 특성(CSS)를 부여한다.'
    },
    {
        id: 3,
        group: 'html',
        word: '&npsp;',
        text:'HTML 특수문자로 공백을 표현한다.'
    },
    {
        id: 4,
        group: 'html',
        word: '&lt;',
        text:'HTML 특수문자로 less than(<)을 표현한다.'
    },
    {
        id: 5,
        group: 'html',
        word: '&gt;',
        text:'HTML 특수문자로 grater than(>)을 표현한다.'
    },
    {
        id: 6,
        group: 'html',
        word: '&amp;',
        text:'HTML 특수문자로 ampersand(&)를 표현한다.'
    },
    {
        id: 7,
        group: 'html',
        word: '&quot;',
        text:'HTML 특수문자로 quotation mark(")를 표현한다.'
    },
    {
        id: 8,
        group: 'html',
        word: '블록(block) 태그',
        text:'HTML tag 중 가로 한줄을 전부 차지하는 태그를 블록 태그로 부르며 hn, p, div, ol, ul, li 등의 태그들이 블록 태그에 속한다.'
    },
    {
        id: 9,
        group: 'html',
        word: '인라인(inline) 태그',
        text:'HTML tag 중 한줄을 전부 차지하는게 아닌 안에 들어있는 내용의 크기 만큼만 위치를 차지하는 태그를 인라인 태그라고 부르며 a, img 등의 태그들이 인라인 태그에 속한다.'
    },
    {
        id: 10,
        group: 'html',
        word: 'id',
        text:'HTML tag 중 한줄을 전부 차지하는게 아닌 안에 들어있는 내용의 크기 만큼만 위치를 차지하는 태그를 인라인 태그라고 부르며 a, img 등의 태그들이 인라인 태그에 속한다.'
    },
    {
        id: 11,
        group: 'html',
        word: 'id',
        text:'태그의 속성으로 사용되며, 고유한 값을 가지는 태그로 같은 이름을 여러번 설정하는 것이 불가능하다.'
    },
    {
        id: 12,
        group: 'html',
        word: 'class',
        text:'태그의 속성으로 사용되며, 같은 이름을 여러번 설정하는 것이 가능한 속성 태그이다.'
    },
    {
        id: 13,
        group: 'html',
        word: '시멘틱 태그',
        text:'"의미가 있는"이라는 뜻으로 body 안에서 사용된다. div와 같은 의미가 없는 태그에 class, id를 넣어서 사용하는 것 보다 시멘틱 태그를 사용하는 것이 더 권장되며, header, nav, main, footer 등이 시멘틱 태그에 속한다.'
    },
    {
        id: 14,
        group: 'html',
        word: '크로스 브라우징',
        text:'웹사이트에 접근하는 브라우저에 상관 없이 동등한 화면과 기능을 제공할 수 있도록 만드는 작업을 말한다. 렌더링 엔진이 사이트마다 다르기 때문에 모든 브라우저에서 완전히 똑같은 화면이 보이도록 만드는것은 불가능하지만, 모든 브라우저에서 편하게 보이도록 만드는 것을 목표로 한다.'
    },
    {
        id: 15,
        group: 'html',
        word: '웹 접근성',
        text:'일반적으로 웹 접근성은 장애인, 고령자 등이 웹 사이트에 제공하는 정보에 비장애인과 동등하게 접근하고 이해 할 수 있도록 보장하는 것을 의미한다. 궁극적인 목적은 어떤 상황, 어떤 사람이든 정보를 제공받지 못하는 경우가 없도록 하는것이다.'
    },
    {
        id: 16,
        group: 'html',
        word: 'Attribute(속성)',
        text:'HTML 태그에는 여러가지 속성 추가가 가능하다. 속성은 태그에 대한 추가 정보를 제공하며, 여러 속성이 동시에 사용될 수 있다.'
    },
    {
        id: 17,
        group: 'html',
        word: 'Tag(태그)',
        text:'HTML에서 태그는 크게 열린 태그와 닫힌 태그로 구분되며, 태그를 사용함으로서 의미가 있는 기능을 수행 할 수 있다.'
    },
    {
        id: 18,
        group: 'css',
        word: 'css 작성',
        text:'css는 위에서 아래로 읽어가며 내려갈수록 수정이 되기 때문에 순서가 중요한 경우, 순서에 맞게 css를 작성해야 한다.'
    },
    {
        id: 19,
        group: 'css',
        word: '글씨 설정',
        text:'css에서 글씨에 관한 스타일을 설정하고 싶을때는 color, font-size, font-weight, font-style, font-family, letter-spacing, text-align, line-height 등으로 설정이 가능하다.'
    },
    {
        id: 20,
        group: 'css',
        word: '여백 설정',
        text:'css에서 여백에 관한 스타일을 설정하고 싶을때는 margin, padding 등으로 설정이 가능하다. 단, 자식 요소는 부모 요소의 넓이 안에서만 설정이 가능하다.'
    },
    {
        id: 21,
        group: 'css',
        word: 'margin 병합',
        text:'부모 요소의 첫째 자식이 마진을 가질때, 마진 병합이 일어난다. 이때 자식 요소는 부모와 함께 이동되게 된다. 병합이 일어나지 않게 하기 위해선, 부모요소에게 padding-top 값이나 border가 있어야 한다.'
    },
    {
        id: 22,
        group: 'css',
        word: 'calc',
        text:'calc() 로 사용하며, ()안에 연산기호를 넣어 사용이 가능하다.'
    },
    {
        id: 23,
        group: 'css',
        word: '반응형',
        text:'화면의 사이즈에 맞춰 유동적으로 사이트가 변할 수 있게 만드는 것을 반응형 사이트라고 하며, %로 값을 주는게 가장 기본적이다.'
    },
    {
        id: 24,
        group: 'css',
        word: '%',
        text:'반응형에서 가장 많이 사용하는 단위로 %로 값을 주어 화면에 맞춰 일정한 %로 구현할 수 있다.'
    },
    {
        id: 25,
        group: 'css',
        word: 'rem',
        text:'가장 최상위에 준 사이즈를 기준으로 배수를 설정해준다.'
    },
    {
        id: 26,
        group: 'css',
        word: 'em',
        text:'부모 요소의 사이즈를 기준으로 배수를 설정한다.'
    },
    {
        id: 27,
        group: 'css',
        word: 'vw',
        text:'viewport width의 줄임말로 화면의 너비에 맞춰서 사이즈를 적용 시킨다.'
    },
    {
        id: 28,
        group: 'css',
        word: 'vh',
        text:'viewport height의 줄임말로 화면의 높이에 맞춰서 사이즈를 적용시킨다.'
    },
    {
        id: 29,
        group: 'css',
        word: 'vmin',
        text:'최소값이라는 뜻으로, 화면의 넓이와 높이에 둘 다 반응한다.'
    },
    {
        id: 30,
        group: 'css',
        word: 'vmax',
        text:'최대값이라는 뜻으로, 화면의 넓이와 높이에 둘 다 반응한다.'
    },
    {
        id: 31,
        group: 'css',
        word: '!import',
        text:'태그 순서가 낮아도 가장 중요하게 먼저 실행될 수 있도록 한다.'
    },
    {
        id: 32,
        group: 'javaScript',
        word: '변수',
        text:'var, let, const 의 변수가 존재하며, 변하거나 변하지 않는 속성들을 설정할 때 사용된다.'
    },
    {
        id: 33,
        group: 'javaScript',
        word: '숫자형',
        text:'자바스크립트의 기본형으로 사칙연산자와 나머지 연산자(%)를 사용한다.'
    },
    {
        id: 34,
        group: 'javaScript',
        word: '문자형',
        text:'자바스크립트의 기본형으로 따옴표로 묶은 자료들로 따옴표 안에 따옴표를 넣어야 하는 경우 안과 밖의 따옴표를 다르게 사용해야 한다.'
    },
    {
        id: 35,
        group: 'javaScript',
        word: '불린형(boolean)',
        text:'자바스크립트의 기본형으로 참과 거짓을 표현해주며, !==, &&, ||, ===, == 등의 기호를 사용한다.'
    },
    {
        id: 36,
        group: 'javaScript',
        word: 'undefined',
        text:'자바스크립트의 기본형으로 값이 없는 변수를 나타낸다.'
    },
    {
        id: 37,
        group: 'javaScript',
        word: 'null',
        text:'자바스크립트의 기본형으로 빈값이거나 값이 유효하지 않을 때 사용된다.'
    },
    {
        id: 38,
        group: 'javaScript',
        word: 'array',
        text:'자바스크립트의 복합형으로 하나의 변수에 여러 값을 저장할 때 사용된다.'
    },
    {
        id: 39,
        group: 'javaScript',
        word: 'object',
        text:'자바스크립트의 복합형으로 함수의 속성이 포함된 유형을 나타낸다.'
    },
    {
        id: 40,
        group: 'javaScript',
        word: '이스케이프 문자',
        text:'문자열 내부에서 특수한 기능을 하는 문자들을 뜻한다.'
    },
    {
        id: 41,
        group: 'javaScript',
        word: '형 변환',
        text:'숫자형과 문자형을 더해서 나온 값은 숫자만 있더라도 문자형으로 인식하게 된다. 이때, parseInt, Number과 같은 함수들을 사용하면 문자를 숫자로 인식하게 된다.'
    },
    {
        id: 42,
        group: 'javaScript',
        word: 'if 조건문',
        text:'"if(조건){true일 때 출력 내용}else{false일 때 출력 내용};" 과 같이 사용되며, 괄호 안의 조건이 사실일 때, {} 중괄호 안의 내용을 처리하고, 거짓인 경우 {} 중괄호 안의 명령을 무시하고 else 뒤 {} 중괄호의 명령을 처리하게 된다.'
    },
    {
        id: 43,
        group: 'javaScript',
        word: 'result',
        text:'연산자처럼 사용되며, 결과값을 도출해 줄 수 있다.'
    },
    {
        id: 44,
        group: 'javaScript',
        word: 'switch 조건문',
        text:'중첩하여 사용이 가능하며, if 조건문이 조건이 여러개일때 사용된다면, switch 조건문은 조건이 하나일 때 주로 사용된다.'
    },
    {
        id: 45,
        group: 'javaScript',
        word: '삼항연산자',
        text:'if 조건문을 간단하게 표현한 것으로, "(조건) ? 참일때 명령 : 거짓일때 명령" 과 같이 사용한다.'
    },
    {
        id: 46,
        group: 'javaScript',
        word: 'for문',
        text:'for를 사용하여 반복되는 부분을 간단하게 만들어 줄 수 있고, "for(초기식; 조건식; 증감식){실행문}" 과 같이 사용한다.'
    },
    {
        id: 47,
        group: 'javaScript',
        word: '함수(function)',
        text:'각 명령의 시작과 끝을 명확하게 구별이 가능하다. 함수에 별도의 이름을 붙이면 같은 기능이 필요할 때마다 불러 사용이 가능하다.'
    },
    {
        id: 48,
        group: 'node',
        word: 'node',
        text:'노드는 프로그램을 실행할 수 있는 환경을 뜻하며, sns나 채팅 서비스 등에 많이 사용된다.'
    },
    {
        id: 49,
        group: 'react',
        word: 'react',
        text:'리액트는 컴포넌트 기반의 UI 라이브러리이다. 가상의 사이트를 만들어주는 도구로서 같은 스타일로 반복되는 내용들을 만들지 않고도 알아서 반복되게 만들 수 있다는 장점이 있다.'
    },
    {
        id: 50,
        group: 'react',
        word: 'Data flow',
        text:'데이터의 흐름이 한 방향으로만 흐르는 단방향 데이터 흐름을 가진다.'
    },
    {
        id: 51,
        group: 'react',
        word: 'components 기반 구조',
        text:'하나의 컨텐츠를 하나의 부품으로 만들어서 반복적으로 사용하는 방법이다.'
    },
    {
        id: 52,
        group: 'react',
        word: 'Virtual dom',
        text:'변경이 필요한 최소한의 변경사항만 실제 dom에 반영해 앱의 효율성과 속도 개선이 가능하다.'
    },
    {
        id: 53,
        group: 'react',
        word: 'Props',
        text:'부모에서 자식으로 전달해주는 데이터를 props라고 이야기 하는데 props를 전달해준 최상위 부모 컴포넌트만 props를 변경 할 수 있다'
    },
    {
        id: 54,
        group: 'react',
        word: 'State',
        text:'컴포넌트 내부에서 선언하고 내부에서 값 변경이 가능하다. 동적인 데이터를 다룰 때 주로 사용하며 사용자와의 상호작용을 통해 데이터를 동적으로 변경할 때 사용한다.'
    },
    {
        id: 55,
        group: 'react',
        word: 'Jsx',
        text:'변수를 사용할때는 "{변수명}" 과 같이 사용하고, 스타일을 직접 넣을 때는 "{{속성:"속성값"}}" 과 같이 사용한다.'
    },
    {
        id: 56,
        group: 'react',
        word: 'Components(컴포넌트)',
        text:'재사용이 가능한 독립된 조각으로 사이트에서 페이지가 달라져도 항상 그대로 남아있는 네비게이션 메뉴와 같이 재사용이 가능한 조각들을 따로 만들어 놓은 것들을 컴포넌트 파일이라고 한다.'
    }
    ]
}




const reducer = (state, action)=>{
    switch(action.type){
        case "create" : //추가
            return{
                inputs : initState.inputs,
                dics: state.dics.concat(action.dic)
            }
        case "edit" :   //수정
            return{
                ...state,
                dics : state.dics.map((item)=>item.id === action.id ? {...item, text:action.text} : item)
            }
        case "remove" :   //삭제
            return{
                ...state,
                dics : state.dics.filter((item)=>item.id !== action.id)
            }
        case "search" :   //검색
            return{
                ...state,
                dics: state.dics.filter((item)=>{return(
                    item.word.toLowerCase().includes(action.text.toLowerCase()) ||
                    item.text.toLowerCase().includes(action.text.toLowerCase())
                )})
            }
        default :
            return state
    }
}
export {initState, reducer}