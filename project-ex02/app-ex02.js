/*
    douzone-hong1071-math npm 모듈 테스트(모듈 패키지: 로컬 배포)

    $ npm i ../douzone-hong1071-math
    명령으로 설치후 테스트 할것
*/

var dzmath = require('douzone-hong1071-math');         // 객체를 리턴해준다.

console.log(dzmath.sum(10, 20, 30, 40, 50));                                    // 객체 내의 함수를 실행
console.log(dzmath.max(10, 20, 30, 40, 50));
console.log(dzmath.min(10, 20, 30, 40, 50));