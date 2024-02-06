import CareerItem from "@/widgets/Item/CareerItem";
import ProjectItem from "@/widgets/Item/ProjectItem";
import Navigator from "@/widgets/header/Navigator";
import { navDict } from "@/widgets/header/consts";
import Section from "./components/Section";

export default function Home() {
  return (
    <>
      <h1 className="visually-hidden">Gangsan O Portfolio</h1>
      <header>
        <Navigator />
      </header>
      <main className="flex-center">
        <Section title={navDict.introduce}>
          <div className="text-center">
            <p className="text-2xl mb-8">웹 개발자 오강산입니다.</p>
            <p className="text-xl mb-4">
              <span className="font-bold">주도적 성장</span>과{" "}
              <span className="font-bold">건강한 관계</span>를 추구합니다.
            </p>
            <p className="text-sm">
              성장과 관계에서 기쁨을 얻습니다.
              <br />
              주도적 성장을 위해 명확한 기준치 설정과
              <br />
              짧은 주기의 피드백을 받을 수 있는 환경을 조성하고
              <br />
              건강한 관계 구축을 위해 적극적 소통을 시도합니다.
            </p>
          </div>
        </Section>
        <Section title={navDict.projects}>
          <ProjectItem
            title="사진 공유 SNS 웹 서비스 구축"
            role="풀스택, 팀장"
            team="총원 6명"
            time={{
              start: new Date("2023-12-10"),
              end: new Date("2023-12-29"),
            }}
            ImageComponent={<div>예시 이미지</div>}
            contents={[
              <div key={"sns-1"}>
                정해진 짧은 기간 내에 MVP를 구축하여 프로젝트 관리 능력을 향상
                시키고자 진행한 프로젝트
              </div>,
              <div key={"sns-2"}>
                데일리 스크럼으로 이슈 및 진행 상황을 공유, 코드 병합 시 코드
                리뷰를 통해 자신의 의도를 전달하고 다른 사람의 코드를 이해하는
                능력 향상 도모
              </div>,
              <div key={"sns-3"}>
                기능별 작업 분배 후 수직적 관심사 분리로 유지보수성 향상 및
                팀원간 코드 충돌을 최소화 시키고자 진행한 프로젝트
              </div>,
              <div key={"sns-4"}>
                Error Boundary 및 Suspense를 활용한 선언적 프로그래밍으로 코드
                가독성 및 간결성 향상에 기여
              </div>,
              <div key={"sns-5"}>
                API 설계 시 자원 중심적 설계로 명확한 URI 설계를 도모함으로써
                API 가독성과 유지보수성 향상에 기여
              </div>,
            ]}
          />
        </Section>
        <Section title={navDict.career}>
          <CareerItem
            title="Elice SW Engineer Track"
            subTitle="웹 개발 교육 기관 | 교육생"
            contents={[
              <div key={"elice-1"}>
                프로젝트 관리 및 협업 능력 향상을 목적으로 참가
              </div>,
              <div key={"elice-2"}>
                다양한 프로젝트에서 종/횡단적 관심사 분리를 실험함으로써 상황에
                맞는 프로젝트 구조를 효과적으로 구축하는 능력을 향상
              </div>,
              <div key={"elice-3"}>
                모든 프로젝트에서 팀장과 풀스택 역할을 담당하며 기획부터
                배포까지 프로젝트 전반에 대한 경험을 쌓음
              </div>,
              <div key={"elice-4"}>
                1차 스터디 인기상 수상, 1차 프로젝트 최우수상 수상 및{" "}
                <span className=" text-red-500">최종 프로젝트 대상 수상</span>
              </div>,
            ]}
          />
        </Section>

        <Section title={navDict.education}>경대졸업함</Section>
      </main>
    </>
  );
}

/**
 * 1. 프로젝트 소개

프로젝트 명칭과 개요로 본인이 어떤 목적으로 이 프로젝트를 만들었는지, 그리고 이렇게 구현하게 된 배경은 무엇인지 등을 간략하게 설명합니다.
2. 개발 과정

프로젝트를 진행하면서 발생한 문제, 그리고 문제해결 포인트로 개발하는 과정에서 겪은 어려움과 이 문제를 해결한 방법에 대한 구체적 내용을 작성합니다.
3. 기술 스택

- 프로젝트에서 사용한 기술 스택을 기록합니다.
- 어떤 언어, 프레임워크, 라이브러리를 사용했는지 적어줍니다. 이때 특정 기능 구현 시 사용한 기술 스택을 상세히 작성합니다.
4. 결과물

정리된 프로젝트의 결과물 (스크린샷, 링크) 등 실제로 개발한 서비스의 캡쳐 화면과 접속할 수 있는 링크를 남깁니다.
5. 인사이트

프로젝트를 진행하면서 얻은 개인적인 경험과 인사이트를 기록합니다. 자신이 특히 노력했던 부분이나 발생한 문제들, 그리고 그것을 어떻게 극복했는지를 적습니다.
 */
