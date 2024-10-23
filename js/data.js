export const slidesData = [
    {
        title: "AI 플러그인 with WebStorm",
        contents: [
            { link: "https://github.com/features/copilot/getting-started", imgSrc: "img/copilot.webp", imgAlt: "copilot", heading: "GitHub Copilot", description: "OpenAI Codex 기반의 코드 자동 완성 도구" },
            { link: "https://www.jetbrains.com/ai/#plans-and-pricing", imgSrc: "img/jetbrain.webp", imgAlt: "jetbrains", heading: "JetBrains AI", description: "JetBrains IDE와 통합된 AI 기능" },
            { link: "https://codeium.com/", imgSrc: "img/codeium_logo.webp", imgAlt: "codeium", heading: "Codeium", description: "자연어 질문 기반의 코드 제안 도구" }
        ]
    },
    {
        title: "Github Copilot",
        tabs: [
            {
                id: "GCTab1",
                heading: "개요",
                sections: [
                    { subtitle: "Copilot이란?", items: ["AI 기반 코드 자동 완성 도구", "OpenAI Codex 모델 사용", "GitHub에서 직접 AI 기반의 코드 제안"] },
                    { subtitle: "주요 특징", items: ["금액 : $10(13000원) / 월", "무료 기간 : 30일"] }
                ]
            },
            {
                id: "GCTab2",
                heading: "사용법",
                sections: [
                    { subtitle: "설치 및 설정", items: ["GitHub 계정 연동", "VS Code 또는 JetBrains IDE에 플러그인 설치", "Copilot 활성화"] },
                    { subtitle: "기본 사용", items: ["코드 작성 시 자동 제안 확인", "Tab 키로 제안 수락", "여러 제안 중 선택(option + [ )"] }
                ]
            },
            {
                id: "GCTab3",
                heading: "기능",
                sections: [
                    { subtitle: "코드 자동 완성", items: ["함수 및 메서드 제안", "반복문 및 조건문 생성", "주석 기반 코드 생성"] },
                    { subtitle: "고급 기능", items: ["단위 테스트 생성", "문서화 지원", "리팩토링 제안"] }
                ]
            },
            {
                id: "GCTab4",
                heading: "장단점",
                sections: [
                    { subtitle: "장점", items: ["개발 속도 향상", "반복적인 코드 작성 감소", "새로운 API 학습 지원"] },
                    { subtitle: "단점", items: ["때때로 부정확한 제안", "개인정보 및 보안 우려", "과도한 의존 가능성"] }
                ]
            }
        ]
    },
    {
        title: "JetBrains AI",
        tabs: [
            {
                id: "JBTab1",
                heading: "개요",
                sections: [
                    { subtitle: "JetBrains AI란?", items: ["JetBrains에서 제공하는 AI 기반 코드 도움 및 분석 도구", "GPT 및 자체 언어 모델 통합","다양한 JetBrains IDE와 통합"] },
                    { subtitle: "주요 특징", items: ["JetBrains IDE와의 통합", "다양한 개발 도구와의 호환성", "프로젝트의 다양한 요소에 대한 심층 분석"] }
                ]
            },
            {
                id: "JBTab2",
                heading: "사용법",
                sections: [
                    { subtitle: "설치 및 설정", items: ["JetBrains 계정 생성 및 로그인", "IDE 설정에서 AI 코드 도움 기능 활성화"] },
                    { subtitle: "기본 사용", items: ["AI를 사용하여 코드 분석 및 개선", "AI 도구를 사용하여 프로젝트 지향적 설계 지원"] }
                ]
            },
            {
                id: "JBTab3",
                heading: "기능",
                sections: [
                    { subtitle: "코드 분석", items: ["코드 품질 제어", "프로젝트 관리 및 성능 개선"] },
                    { subtitle: "고급 기능", items: ["각종 문제 발견 및 해결 도움", "리팩토링 제안", "프로젝트 내의 패턴 추적 및 분석"] }
                ]
            },
            {
                id: "JBTab4",
                heading: "장단점",
                sections: [
                    { subtitle: "장점", items: ["JetBrains 제품군과의 통합", "고급 코드 분석 및 최적화", "프로젝트 관리 및 디버깅에 강함"] },
                    { subtitle: "단점", items: ["프로그래밍 언어 및 구조에 대한 깊은 이해 필요", "AI 분석의 제한된 범위"] }
                ]
            }
        ]
    },
    {
        title: "총평",
        tableContents: [
            { heading: "기반 AI 모델", info: [{ text: "OpenAI Codex(OpenAI의 GPT-3 모델을 기반)" }, { text: "GPT 및 JetBrains 자체 언어 모델 통합", active: true }, { text: "자체 AI 모델" }] },
            { heading: "IDE 통합", info: [{ text: "여러 IDE (VS Code, JetBrains, Neovim, GitHub Web 등)" }, { text: "JetBrains 제품군 (WebStorm, IntelliJ, PyCharm 등) 전용", active: true }, { text: "여러 IDE (VS Code, JetBrains, Neovim 등)" }] },
            { heading: "비용", info: [{ text: "월 $10 (또는 연간 $100)" }, { text: "JetBrains 제품 구독(연간 $149 이상) 필요" }, { text: "무료", active: true }] },
            { heading: "코드 자동 완성", info: [{ text: "매우 빠르고 다양한 언어 지원", active: true }, { text: "자동 완성, 리팩토링, 코드 분석까지 포괄적 지원" }, { text: "빠르고 가벼운 코드 자동 완성, 자연어로 코드 설명 가능" }] },
            { heading: "코드 분석 및 최적화", info: [{ text: "제한적" }, { text: "심층 코드 분석 및 리팩토링, 코드 최적화 지원", active: true }, { text: "제한적 (주로 자동 완성 및 코드 제안에 중점)" }] },
            { heading: "문맥 이해 및 코드 리뷰", info: [{ text: "코드 완성에 특화" }, { text: "코드 리뷰 및 문맥 이해를 통한 개선 제안", active: true }, { text: "문맥에 맞는 코드 제안, 주로 자동 완성에 중점" }] },
            { heading: "Git 통합", info: [{ text: "GitHub와 완벽한 통합 (Pull Request 및 코드 리뷰 연동)", active: true }, { text: "JetBrains 내장 VCS 및 Git 연동" }, { text: "Git 통합 기능은 제한적, 주로 코드 자동 완성에 초점" }] },
            { heading: "성능 및 속도", info: [{ text: "빠른 코드 자동 완성", active: true }, { text: "코드 분석 및 자동 완성 속도가 빠름" }, { text: "가벼운 코드 제안과 자동 완성, 리소스 소모가 적음" }] }
        ]
    }
]