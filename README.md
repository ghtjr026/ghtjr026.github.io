# Portfolio Redesign

기존 GitHub Pages 포트폴리오를 대체할 수 있는 정적 웹사이트입니다.

## 적용 방법

1. 기존 저장소를 백업합니다.
2. 이 폴더의 `index.html`과 `assets` 폴더를 저장소 루트에 복사합니다.
3. 내용 중 경력 기간과 프로젝트 설명을 최신 정보로 확인합니다.
4. GitHub에 push하면 GitHub Pages에 반영됩니다.

```bash
git add index.html assets
git commit -m "[MOD] Redesigned portfolio frontend"
git push origin main
```

## 구조

- `index.html`: 전체 콘텐츠와 섹션 구조
- `assets/css/style.css`: 반응형 레이아웃, 다크/라이트 테마, 애니메이션
- `assets/js/main.js`: 모바일 메뉴, 테마 전환, 스크롤 효과
- `assets/img/hoseok-img.jpg`: 기존 프로필 이미지

## 확인할 항목

- `2023.12 — Present` 경력 기간
- 외부 공개가 가능한 프로젝트 설명 범위
- 이력서 PDF 링크를 추가할지 여부
