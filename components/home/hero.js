import Animation from "./animation";
import Link from 'next/link';

export default function Hero() {
    return (
        <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                최신 트렌드 기술 응용 개발사
                <br className="hidden lg:inline-block"/>
                SW Dev. + ML, A.I. + Graphics + GPTs
            </h1>
            <p className="mb-8 leading-relaxed">
            끊임없는 열정과 혁신적인 비전으로 탄생한 기업입니다. 대표자는 한국과 미국에서의 유학 경험, 뇌공학 연구, 그리고 다양한 프로그래밍 분야에 대한 깊은 이해를 바탕으로 회사를 설립하였습니다. Arch Linux와 같은 미니멀하고 빠른 시스템에 대한 애정은 로로베리의 경영 철학인 “빠른 대응과 최소한의 설계”의 원칙으로 이어졌습니다. 로벗-한민족 커뮤니티 플랫폼을 개발중에 있으며, 이는 무역, 유통, 구인구직 및 소통을 가능하게 하는 서비스입니다. 
            </p>
            <div className="flex justify-center">
                <Link href="/projects">
                    <a className="btn-project">
                        프로젝트 보러가기
                    </a>
                </Link>
            </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Animation/>
            </div>
        </>
    );
}
